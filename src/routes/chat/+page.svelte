<script lang="ts">
	import { goto } from "$app/navigation";
	import { v4 as uuidv4 } from "uuid";

	function createRoom() {
		const uuid = uuidv4();
		goto(`/chat/${uuid}`);
	}

</script>