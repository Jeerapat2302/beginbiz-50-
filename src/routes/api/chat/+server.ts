import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { StreamingTextResponse, convertToCoreMessages, streamText } from "ai";
import type { RequestHandler } from "./$types";
import { adminDB, adminRTDB } from "$lib/server/admin";
import { z } from "zod";
import { error } from "@sveltejs/kit";
import { GENAI_API_KEY } from "$env/static/private";

const google = createGoogleGenerativeAI({
	apiKey: GENAI_API_KEY,
});
/* รับข้อความ*/
export const POST = (async ({ request, locals }) => {
	const { messages, room_uid } = await request.json();

	const parsed_room_id = z.string().uuid().parse(room_uid);
	const user_id = locals.userID;

	if (!user_id) {
		throw error(502, "Please login");
	}

	/*ตั้งค่าระบบ*/
	const result = await streamText({
		system:"You are an AI assistant named BIZGIT. You are created by ICT, SU.You can only give answers about business laws, doing business, and trading in Thailand. คุณคือผู้ชาย แทนตัวด้วยผม ลงท้ายด้วยครับ แบบมีมารยาท",
		model: google("models/gemini-1.5-flash"),//gemini-1.5-flash-latest
		messages,
		onFinish: async (result) => {     //ลงในฐานข้อมูลเรียลไทม์ 
			if (["stop", "length"].includes(result.finishReason)) {
				await adminRTDB
					.ref(`message_history/${user_id}/${parsed_room_id}/`)
					.push({
						role: "assistant",
						content: result.text,
					});
				const check = await adminDB
					.collection("users")
					.doc(user_id)
					.collection("rooms")
					.doc(room_uid)
					.get();
				if (!check.exists) {
					const firstMessage = messages.find((msg: { role: string; }) => msg.role === "user")?.content || "Room";
					await adminDB
						.collection("users")
						.doc(user_id)
						.collection("rooms")
						.doc(room_uid)
						.set({
							name: firstMessage, 
							id: parsed_room_id,
						});
				}
			}
		},
	});

	
	/*บันทึกข้อความสุดท้าย*/
	const lastMessage = convertToCoreMessages(messages).pop();
	await adminRTDB
		.ref(`message_history/${user_id}/${parsed_room_id}/`)
		.push(lastMessage);
	// Respond with the stream
	return new StreamingTextResponse(result.toAIStream());
}) satisfies RequestHandler;
