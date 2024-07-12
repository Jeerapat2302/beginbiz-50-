<script lang="ts">
	import { goto } from "$app/navigation";
	import { signInWithGoogle, signOutSSR } from "$lib/auth";
	import { auth, storage, user } from "$lib/firebase";
	import { signOut } from "firebase/auth";
	import { v4 as uuidv4 } from "uuid";

	function createRoom() {
		const uuid = uuidv4();
		goto(`/chat/${uuid}`);
	}

</script>