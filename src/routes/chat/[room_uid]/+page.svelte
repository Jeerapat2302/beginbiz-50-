<script lang="ts">
    import { useChat } from "ai/svelte";
	import type { PageData } from "./$types";
	import { v4 as uuidv4 } from "uuid";
	// import { goto } from "$app/navigation";
	// import { firestore, user } from "$lib/firebase";
	// import { doc, updateDoc } from "firebase/firestore";
	
	/* หน้าบ้าน */
	export let data: PageData;
	let inputElement: HTMLInputElement;


	$: ({ messages, input, handleSubmit } = useChat({
		api: "/api/chat",
		sendExtraMessageFields: true,
		initialMessages: data.messages.map((message) => {
			return {
				content: message.content as string,
				id: uuidv4(),
				role: message.role,
			};
		}),
	}));

</script>

<div class="flex flex-col h-full p-4">
	<div class="flex-grow overflow-y-auto">
		{#each $messages as message}
			{#if message.role == "user"}
				<div class="chat chat-end">
					<div class="chat-bubble chat-bubble-success">
						{message.content}
					</div>
				</div>
			{:else}
				<div class="chat chat-start">
					<div class="chat-bubble">{message.content}</div>
				</div>
			{/if}

		{/each}
	</div>

	<form
		class="flex gap-2"
		on:submit|preventDefault={(e) => {
			handleSubmit(e, { options: { body: { room_uid: data.room_uid } } });
		}} >
		<input type="text" placeholder="Type here" bind:value={$input} class="input input-bordered w-full grow"/>
		<button type="submit" class="btn btn-square btn-primary">:3</button>
	</form>
</div>
<!-- 
<script lang="ts">
	import { useChat } from "ai/svelte";
	import type { PageData } from "./$types";
	import { v4 as uuidv4 } from "uuid";

	export let data: PageData;
	let inputElement: HTMLInputElement;

	const { messages, input, handleSubmit } = useChat({
		api: "/api/chat",
		sendExtraMessageFields: true,
		initialMessages: data.messages.map((message) => {
			return {
				content: message.content as string,
				id: uuidv4(),
				role: message.role,
			};
		}),
	});

</script>

<div class="flex flex-col h-full p-4">
	<div class="flex-grow overflow-y-auto">
		{#each $messages as message}
			{#if message.role == "user"}
				<div class="chat chat-end">
					<div class="chat-bubble chat-bubble-success">
						{message.content}
					</div>
				</div>
			{:else}
				<div class="chat chat-start">
					<div class="chat-bubble">{message.content}</div>
				</div>
			{/if}

		{/each}
	</div>

	<form
		class="flex gap-2"
		on:submit|preventDefault={(e) => {
			handleSubmit(e, { options: { body: { room_uid: data.room_uid } } });
		}} >
		<input type="text" placeholder="Type here" bind:value={$input} class="input input-bordered w-full grow"/>
		<button type="submit" class="btn btn-square btn-primary">:3</button>
	</form>
</div>
 -->
