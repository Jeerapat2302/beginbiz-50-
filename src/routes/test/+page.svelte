<script lang="ts">
	import { ChevronsUp, Search } from "lucide-svelte";
	import { scrollTo, scrollTop, scrollRef } from "svelte-scrolling";
	import { fade } from "svelte/transition";
	import Typewriter from "svelte-typewriter";
	import laws from "$lib/assets/laws.jpg";
	import chat_img from "$lib/assets/Chat.jpg";
	import docs from "$lib/assets/Docs.jpg";
	import { flip } from "svelte/animate";

	let scrollY: number;

	function wait(ms: number) {
		return new Promise((resolve) => {
			setTimeout(resolve, ms);
		});
	}

	$: cardData = [
		{
			id: 1,
			image: laws,
			image_alt: "info",
			header: "📄 บอกขั้นตอนการเปิดบริษัทอย่างง่าย",
			sub_header:
				"การเปิดบริษัทจะไม่ใช่เรื่องยากอีกต่อไป เพียงแค่คุณเข้ามาดูวิธีการ",
			information: {
				features: [
					"00",
					"01",
				],
			},
			link: "/",
			card_color: "pink",
			state: true,
			show_image: true,
		},
		{
			id: 2,
			image: chat_img,
			image_alt: "info",
			header: "🔎 แบบฟอร์มเอกสารที่ครบครัน",
			sub_header: "Chatbot ที่มีความรู้เรื่องกฏหมายไทย",
			information: {
				features: [
					"01",
					"02",
				],
			},
			link: "/chat",
			card_color: "accent",
			state: false,
			show_image: false,
		},
		{
			id: 3,
			image: docs,
			image_alt: "",
			header: "💬 บิสกิทซ์แชตบอตน้อยคอยตอบคำถาม",
			sub_header: "แชตบอตที่จะคอยตอบคำถามเกี่ยวกับกฎหมายธุรกิจที่คุณสงสัย",
			information: {
				features: [
					"แชตบอตตอบคำถามตามที่คุณพิมพ์",
					"เหมาะสมกับผู้ประกอบการเริ่มต้น",
					"การตอบคำถามเกี่ยวกับกฏหมายธุรกิจ",
				],
			},
			link: "/documents",
			card_color: "success",
			state: false,
			show_image: false,
		},
	];
	let isOpen = 0;
	$: {
		isOpen = 0;
		if (!cardData[0].state && cardData[1].state && !cardData[2].state) {
			isOpen = 2;
		} else {
			for (let i = 0; i < cardData.length; i++) {
				if (cardData[i].state) {
					isOpen++;
				}
			}
		}
	}
</script>

<svelte:window bind:scrollY />

<section use:scrollRef={"services"} />
<div class={"flex flex-col justify-center items-center text-center px-4 lg:px-36 w-full pb-10"}>
	<div class="grid max-w-lg lg:max-w-4xl grid-flow-row lg:grid-cols-6 mt-10 gap-4">
		{#each cardData as data (data.id)}
			<div animate:flip={{ duration: 500 }} class:lg:col-span-6={data.state} class={`col-span-${6 / (3 - isOpen)}`}>
				<div class={`card ${data.state ? "lg:card-side" : ""} 
                    w-full h-full bg-${data.card_color }/5 border border-${data.card_color}/50`}>
					{#if data.state}
						<img
							src={data.image}
							alt={data.image_alt}
							class={`m-6 lg:m-10 rounded-xl object-cover max-w-full transition-[height_blur_opacity] duration-500 ${
								data.show_image ? "h-full lg:h-96" : "h-0 blur-sm opacity-0"
							}`}
						/>
					{/if}

					<div class="card-body items-center text-center">
						<h2 class="card-title">{data.header}</h2>
						<p>
							{data.sub_header}
							{#if data.show_image}
								<div
									class={`collapse collapse-arrow border border-1 border-black/30 mt-4 text-left`}
									in:fade={{ delay: 250, duration: 250 }}
									out:fade={{ duration: 100 }}
								>
									<input
										type="radio"
										name={`my-accordion-${data.id}`}
										checked
									/>
									<div class="collapse-title text-lg font-bold">ฟีเจอร์ ✅</div>
									<div class="collapse-content space-y-4">
										{#each data.information.features as feature}
											<p>{feature}</p>
										{/each}
									</div>
								</div>
								<div
									class={`collapse collapse-arrow border border-1 border-black/30 mt-2 text-left`}
									in:fade={{ delay: 500, duration: 250 }}
									out:fade={{ duration: 100 }}
								>
								</div>
							{/if}
						</p>

						<div class="card-actions my-4 justify-center">
							<a href={data.link}
								><button
									class="btn btn-sm lg:rounded-l-full btn-{data.card_color}"
									>เข้าใช้</button
								></a
							>
							<button
								class={`btn btn-sm no-underline lg:rounded-r-full btn-outline btn-${data.card_color}`}
								on:click={async () => {
									if (!data.state) {
										data.state = true;
										if (isOpen < 2) {
											await wait(250);
										}
										data.show_image = true;
									} else {
										data.show_image = false;
										await wait(250);
										data.state = false;
									}
									// await toggleStateById(data.id);
								}}>{data.state ? "ปิด" : "ดูเพิ่มเติม"}</button
							>
						</div>
					</div>
				</div>
			</div>
		{/each}
	</div>
		</div>


<style>
	.blob1 {
		position: fixed;
		top: 50%;
		left: 0%;

		width: 70vw;
		height: 70vw;
		background: radial-gradient(
			circle at 50% 50%,
			#d769af33 0%,
			transparent 70%
		);
		transform: translate(-50%, -50%);
		z-index: -50;
		animation: gradientAnimation 5s infinite alternate;
	}
	.blob2 {
		position: fixed;
		top: 0%;
		left: 100%;

		width: 70vw;
		height: 70vw;
		background: radial-gradient(
			circle at 50% 50%,
			#8290ec38 0%,
			transparent 70%
		);
		transform: translate(-50%, -50%);
		z-index: -50;
	}
	.animateFromTop {
		opacity: 0; /* Set initial opacity to 0 */
		transform: translateY(
			-40px
		); /* Move the element 100px above its normal position */

		/* Apply animation properties */
		animation: fadeInFromTop 0.5s ease-out forwards;
	}

	/* Define the keyframes for the animation */
	@keyframes fadeInFromTop {
		from {
			opacity: 0;
			transform: translateY(-40px);
		}

		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
</style>
