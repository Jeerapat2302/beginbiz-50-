import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";
import { getStorage, ref } from "firebase/storage";

import { getAuth } from "firebase/auth";
import type { Readable } from "svelte/motion";
import { derived } from "svelte/store";
import { docStore, userStore } from "sveltefire";


const firebaseConfig = {
	apiKey: "AIzaSyDVFbjykYdUu85xTX1xOhk35lwIrmtoMwA",
	authDomain: "beginbiz-v2.firebaseapp.com",
	databaseURL: "https://beginbiz-v2-default-rtdb.asia-southeast1.firebasedatabase.app",
	projectId: "beginbiz-v2",
	storageBucket: "beginbiz-v2.appspot.com",
	messagingSenderId: "162567978975",
	appId: "1:162567978975:web:5fe5fcbc9b22a0b2794e6a",
	measurementId: "G-MBN2FKPBD5"
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

