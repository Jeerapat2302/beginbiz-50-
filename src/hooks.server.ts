import { adminAuth } from "$lib/server/admin";
import { redirect, type Handle } from "@sveltejs/kit";

export const handle = (async ({ event, resolve }) => {
    const sessionCookie = event.cookies.get("__session");
    
    try {
        const decodedClaims = await adminAuth.verifySessionCookie(sessionCookie!);
        // adminAuth.revokeRefreshTokens(decodedClaims.uid);
        event.locals.userID = decodedClaims.uid;
    } catch (e) {
        event.locals.userID = null;
        return resolve(event);
    }

    return resolve(event);
}) satisfies Handle;