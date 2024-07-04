import { adminRTDB } from "$lib/server/admin";
import { convertToCoreMessages } from "ai";
import type { PageServerLoad } from "./$types";

/* ตรวจสอบข้อมูลแชต */
export const load = (async ({ params, locals }) => {
	const room_uid = params.room_uid;
	const snapshot = await adminRTDB
		.ref(`message_history/${locals.userID}/${room_uid}/`)
		.get();
	if (snapshot.exists()) {
		const messages = convertToCoreMessages(Object.values(snapshot.val()));
		return { room_uid, messages };
	}
	return { room_uid, messages: [] };
	
}) satisfies PageServerLoad;
