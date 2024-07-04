<script lang="ts">
	import { v4 as uuidv4 } from "uuid";
    import { goto } from "$app/navigation";
    import { roomsStore, type RoomDoc } from "$lib/stores/rooms";
    import { setDoc, doc, updateDoc, deleteDoc, runTransaction ,collection,getDocs } from "firebase/firestore";
    import { firestore, realtimeDatabase, user } from "$lib/firebase";
    import { ref, remove, update } from "firebase/database";
	

	function createRoom() {
		const uuid = uuidv4();
		goto(`/chat/${uuid}`);
	}

	// async function createRoom(name: string) {
    // const uuid = uuidv4();
    // if ($user) {
    //     await setDoc(doc(firestore, `users/${$user.uid}/rooms/${uuid}/`), { name });
    //     goto(`/chat/${uuid}`);
    // 	}
	// }

	function renameRoom(name: string, room_uid: string) {
		if ($user) {
			updateDoc(doc(firestore, `users/${$user.uid}/rooms/${room_uid}/`), 
			{name,});
		}
	}

	async function deleteRoom(room_uid: string) {
    // const $user = get(user);
    if ($user) {
        try {
            // Firestore Transaction
            await runTransaction(firestore, async (transaction) => {
                const userRoomRef = doc(firestore, `users/${$user.uid}/rooms/${room_uid}`);
                transaction.delete(userRoomRef);
            });

            // Realtime Database Deletion *ติดบัคอยู่ ณ ตอนนี้*
            const roomRef = ref(realtimeDatabase, `rooms/${room_uid}`);
			console.log('Realtime Database Reference:', roomRef); // Add this line
            await remove(roomRef);
            // console.log('ลบห้องสำเร็จจาก Firestore และ Realtime Database');

        } catch (error) {
            console.error("เกิดข้อผิดพลาดในการลบห้อง:", error);
            // จัดการข้อผิดพลาดตามที่ต้องการ
        }
    }
}

	interface EditableRoom {[key: string]: boolean;}

	let editableRooms: EditableRoom = {};

	$: {
		if ($roomsStore) {
			$roomsStore.forEach((room) => {
				if (!(room.id in editableRooms)) {
					editableRooms[room.id] = false;
				}
			});
		}
	}
</script>

<div class="drawer lg:drawer-open">
	<input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content flex flex-col h-svh">
		<!-- Page content here -->
		<label for="my-drawer-2" class="btn drawer-button lg:hidden w-fit">Open drawer</label>
		<slot />
	</div>
	<div class="drawer-side">
		<label for="my-drawer-2" aria-label="close sidebar" class="drawer-overlay"></label>
		<ul class="p-4 w-80 min-h-full bg-base-200 text-base-content">
			<!-- Sidebar content here -->
		<button class="btn btn-lg w-full btn-primary btn-outline" on:click={() => createRoom()}>Create Room</button>
			<div class="menu menu-lg mt-4 flex flex-col items-center">
				{#if $roomsStore}
					<p class="text-xl font-bold">Rooms</p>
					{#each $roomsStore as room} 
				{#if editableRooms[room.id]}
					<li class="w-full group">
						<div class="flex">
							<input type="text" value={room.name} on:change={(e) => {renameRoom(e.currentTarget.value, room.id); editableRooms[room.id] = false;}}/>
							<button class={`btn btn-sm btn-ghost btn-square hidden group-hover:block`} on:click={() => {editableRooms[room.id] = true;}}>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
									class="lucide lucide-check"
									><path d="M20 6 9 17l-5-5" /></svg>
									</button>
								</div>
							</li>
					{:else}
						<li class="w-full group">
							<div class="flex">
								<a class="w-full" href={`/chat/${room.id}`}>{room.name}</a>
									<button class={`btn btn-sm btn-square btn-ghost hidden group-hover:block`} on:click={() => {editableRooms[room.id] = true;}}>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
											class="lucide lucide-pencil-line"
											><path d="M12 20h9" /><path
												d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/>
											<path d="m15 5 3 3" /></svg>
									</button>

									<button class={`btn btn-sm btn-square btn-ghost hidden group-hover:block`} on:click={() => deleteRoom(room.id)}>
										<svg
										  xmlns="http://www.w3.org/2000/svg"
										  width="24"
										  height="24"
										  viewBox="0 0 24 24"
										  fill="none"
										  stroke="currentColor"
										  stroke-width="2"
										  stroke-linecap="round"
										  stroke-linejoin="round"
										  class="lucide lucide-trash-2"
										>
										  <path d="M3 6h18" />
										  <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
										  <path d="M10 11v6" />
										  <path d="M14 11v6" />
										  <path d="M12 6V4a1 1 0 0 1 1-1h0" />
										</svg>
									  </button>
								</div>
							</li>
						{/if}
					{/each}
				{/if}
			</div>
		</ul>
	</div>
</div>
