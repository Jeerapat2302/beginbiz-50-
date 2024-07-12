import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";
import { getStorage, ref } from "firebase/storage";
import { getAuth } from "firebase/auth";
import type { Readable } from "svelte/motion";
import { derived } from "svelte/store";
import { docStore, userStore } from "sveltefire";


const firebaseConfig = {
	apiKey: "AIzaSyCM0_iA4_6oRLx9rOdmGFIZtgyI8-Ihr3c",
	authDomain: "beginbiz-v3.firebaseapp.com",
	databaseURL: "https://beginbiz-v3-default-rtdb.asia-southeast1.firebasedatabase.app",
	projectId: "beginbiz-v3",
	storageBucket: "beginbiz-v3.appspot.com",
	messagingSenderId: "462312147050",
	appId: "1:462312147050:web:ec09891513a2916be7e213",
	measurementId: "G-YBL899MY7M"
  };
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
export const storageRef = ref(storage, 'some-child');
// export const rtdb = getDatabase(app);
export let user = userStore(auth);
export const realtimeDatabase = getDatabase(app);
  
export interface UserData {
	photoURL: string;
	username: string;
  	bio: string;
  	published: boolean;
}

export const userData: Readable<UserData | null> = derived(
	user,
	($user, set) => {
		if ($user) {
			return docStore<UserData>(firestore, `users/${$user.uid}`).subscribe(set);
		} else {
			set(null);
		}
	}
);

