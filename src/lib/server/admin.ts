import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";
import { getDatabase } from "firebase-admin/database";

import {
	FB_CLIENT_EMAIL,
	FB_DATABASE_URL,
	FB_PRIVATE_KEY,
	FB_PROJECT_ID,
} from "$env/static/private";
import pkg from "firebase-admin";
import dotenv from "dotenv";
import { z } from "zod";

// import { getDatabase } from "firebase-admin/database";
// import type { App } from "firebase-admin/app";

dotenv.config();

try {
	pkg.initializeApp({
		credential: pkg.credential.cert({
			projectId: FB_PROJECT_ID,
			clientEmail: FB_CLIENT_EMAIL,
			privateKey: FB_PRIVATE_KEY.replace(/\\n/g, '\n'),
		}),
		databaseURL: FB_DATABASE_URL,
	});
} catch (err: any) {
	if (!/already exists/u.test(err.message)) {
		console.error("Firebase Admin Error: ", err.stack);
	}
}

export const userAdminDataType = z.object({
	message_count: z.number().optional(),
	files: z
		.record(
			z.object({
				file_size: z.number(),
			})
		)
		.optional(),
	stored_bytes: z.number().optional(),
	search_count: z.number().optional(),
	workspace_ids: z.array(z.string()).optional(),
	workspace_invites: z.array(z.string()).optional(),
});

export const adminDB = getFirestore();
export const adminAuth = getAuth();
export const adminRTDB = getDatabase();

export async function getUserAdminData(
	userId: string
): Promise<z.infer<typeof userAdminDataType>> {
	const userAdminData = await adminDB
		.collection("usersAdmin")
		.doc(userId)
		.get();
	if (!userAdminData.exists) {
		await adminDB.collection("usersAdmin").doc(userId).set({});
	}
	return userAdminDataType.parse(userAdminData.data() || {});
}


