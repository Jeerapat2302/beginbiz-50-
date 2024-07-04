import { firestore, user } from "$lib/firebase";
import { derived, type Readable } from "svelte/store";
import { collectionStore } from "sveltefire";

export interface RoomDoc {
	name: string;
	id: string;
}

export const roomsStore: Readable<RoomDoc[] | null> =
	derived(user, ($user, set) => {
		if ($user) {
			collectionStore<RoomDoc>(firestore, `users/${$user.uid}/rooms/`).subscribe(set);
		} else {
			set(null);
		}
	});
