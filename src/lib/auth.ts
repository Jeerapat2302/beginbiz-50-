import {
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	sendEmailVerification,
	sendPasswordResetEmail,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
	type UserCredential,
} from "firebase/auth";
import { auth, firestore, storage } from "./firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

// TODO: Change This later
const relaxEmailVerify = true;

async function _getUserCredentials(
	method: Promise<UserCredential>,
	customUsername?: string
) {
	try {
		const userCredential = await method;
		const { errorMessage } = await verifyUserToken(
			userCredential,
			customUsername
		);
		return errorMessage;
	} catch (error) {
		if (error instanceof Error) {
			return error.message;
		} else {
			return "Unknown error";
		}
	}
}

export async function signInWithGoogle() {
	const method = signInWithPopup(auth, new GoogleAuthProvider());
	return await _getUserCredentials(method);
}

export async function signUpWithPassword(
	email: string,
	password: string,
	customUsername: string
) {
	const method = createUserWithEmailAndPassword(auth, email, password);
	return await _getUserCredentials(method, customUsername);
}

export async function logInWithPassword(email: string, password: string) {
	const method = signInWithEmailAndPassword(auth, email, password);
	return await _getUserCredentials(method);
}

export async function resetPassword(email: string) {
	sendPasswordResetEmail(auth, email)
		.then(() => {
			// Password reset email sent!
			// ..
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
			// ..
		});
}

async function downscaleImage(
	imageBlob: Blob,
	width: number,
	height: number
): Promise<Blob> {
	// Create an image element
	const img = new Image();

	// Load the image blob into the image element
	const imageURL = URL.createObjectURL(imageBlob);
	img.src = imageURL;

	return new Promise((resolve, reject) => {
		img.onload = () => {
			// Create a canvas element
			const canvas = document.createElement("canvas");
			const ctx = canvas.getContext("2d");

			if (!ctx) {
				reject(new Error("Failed to get canvas context"));
				return;
			}

			// Set the canvas size to the desired output size
			canvas.width = width;
			canvas.height = height;

			// Draw the original image onto the canvas, resizing it to fit
			ctx.drawImage(img, 0, 0, width, height);

			// Convert the canvas content to a Blob (downscaled image)
			canvas.toBlob((blob) => {
				// Revoke the object URL
				URL.revokeObjectURL(imageURL);

				if (blob) {
					resolve(blob);
				} else {
					reject(new Error("Canvas to Blob conversion failed"));
				}
			}, "image/jpeg");
		};

		img.onerror = (error) => {
			URL.revokeObjectURL(imageURL);
			reject(new Error("Failed to load image: " + error));
		};
	});
}

export async function verifyUserToken(
	userCredential: UserCredential,
	customUsername?: string
) {
	const idToken = await userCredential.user.getIdToken();
	const userSnapshot = await getDoc(
		doc(firestore, "users", userCredential.user.uid)
	);
	if (!userSnapshot.exists()) {
		const username =
			userCredential.user.displayName ?? customUsername ?? "User";
		storage;
		const storageRef = ref(
			storage,
			`users/${userCredential.user.uid}/profile.png`
		);
		let photoUrl: string | undefined = undefined;
		if (userCredential.user.photoURL) {
			try {
				const response = await fetch(userCredential.user.photoURL);
				if (response.ok) {
					const imageBlob = await response.blob();
					// const downScaledImage = await downscaleImage(imageBlob, 100, 100);
					// const result = await uploadBytes(storageRef, downScaledImage);
					// photoUrl = await getDownloadURL(result.ref);
				}
			} catch {
				photoUrl = userCredential.user.photoURL;
			}
		}
		await setDoc(doc(firestore, "users", userCredential.user.uid), {
			username,
			photoURL: photoUrl ?? null,
			published: true,
			bio: "",
		});
	}

	const res = await fetch("/api/signin", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			// 'CSRF-Token': csrfToken  // HANDLED by sveltekit automatically
		},
		body: JSON.stringify({ idToken }),
	});
	window.sessionStorage.clear();
	if (!res.ok) {
		await signOut(auth);
		return { errorMessage: "An error occured while creating your account" };
	}
	// TODO: Change This later
	if (!userCredential.user.emailVerified && !relaxEmailVerify) {
		await sendEmailVerification(userCredential.user);
		return { errorMessage: "We've sent you a verification email." };
	}
	return { errorMessage: "" };
}

export async function signOutSSR() {
	const res = await fetch("/api/signin", { method: "DELETE" });
	window.sessionStorage.clear();
	await signOut(auth);
}
