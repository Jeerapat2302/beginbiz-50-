<script lang="ts">
	import "../app.css";
	import { auth, firestore, storage } from "$lib/firebase";
	import { FirebaseApp, userStore } from "sveltefire";
	import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
	import { SignedIn, SignedOut } from "sveltefire";
	import { Modal } from "$lib/modal/modal";
	import { onMount } from "svelte";
	import blank_profile from "$lib/assets/Blank_Profile.webp";
	import { FirebaseError } from 'firebase/app';
	import logo_beginbiz from "$lib/assets/logo.png";
  
	let loginModal: Modal;
	let ready = false;
	let errorMessage = "";
	let users = userStore(auth);
  
	onMount(() => {
	  ready = true;
	  loginModal = new Modal("login");
	});
  
	// Google
	async function signInWithGoogle() {
	  const provider = new GoogleAuthProvider();
	  try {
		const result = await signInWithPopup(auth, provider);
		// You can access the signed-in user's information here
		const user = result.user;
		console.log(user);
	  } catch (error) {
		//ตัวจัดการ error
		if (error instanceof FirebaseError) {
			const errorCode = error.code;
			errorMessage = error.message;
			console.error(errorCode, errorMessage);
		} else {
			console.error("Unknown error:", error);
  }
}
	}
  
	async function signOutUser() {
	  try {
		await signOut(auth);
		console.log("User signed out");
	  } catch (error) {
		console.error("Error signing out:", error);
	  }
	}
  </script>
  
  <style>
	@import url(https://fonts.googleapis.com/css?family=Kanit:100,100italic,200,200italic,300,300italic,regular,italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic);
	.navbar {
	  background-color: #01031D;
	  font-family: "Kanit", sans-serif;
	}
  </style>
  
  <FirebaseApp {auth} {firestore} {storage}>
	<!-- <div class=""> -->
	<div class="navbar bg-base">
		<div class="navbar-start">
		  <div class="dropdown">
			<div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
			  <svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-5 w-5"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor">
				<path
				  stroke-linecap="round"
				  stroke-linejoin="round"
				  stroke-width="2"
				  d="M4 6h16M4 12h8m-8 6h16" />
			  </svg>
			</div>
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<ul
			  tabindex="0"
			  class="menu menu-sm dropdown-content bg-base rounded-box z-[1] mt-3 w-52 p-2 shadow">
			  <!-- svelte-ignore a11y-missing-attribute -->
				<li>
					<a>ข้อมูลกฎหมายธุรกิจ  </a>
					<ul class="p-3">
						<li><a href="/data">01</a></li>
						<li><a href="/">02</a></li>
					</ul>
				</li>
				<li><a href="/">แบบฟอร์มกฎหมาย  </a>
					<ul class="p-2">
						<li><a href="/lawform/form01">ทะเบียนพาณิชย์</a></li>
						<li><a href="/lawform/form02">หลักประกันทางธุรกิจ</a></li>
						<li><a href="/lawform/form03">ห้างหุ้นส่วนจดทะเบียน</a></li>
						<li><a href="/lawform/form04">บริษัทจำกัด</a></li>
						<li><a href="/lawform/form05">บริษัทมหาชนจำกัด</a></li>
						<li><a href="/lawform/form06">สมาคมการค้า</a></li>
						<li><a href="/lawform/form07">หอการค้า</a></li>
						<li><a href="/lawform/form08">งานงบการเงิน</a></li>
						<li><a href="/lawform/form09">งานด้านบัญชี</a></li>
					</ul>
				</li>
				<li><a href="/chat">แชตบอต</a></li>
				<li><a href="/aboutus">เกี่ยวกับเรา</a></li>
			</ul>

		  </div>
		  
		  <a class="btn btn-ghost text-xl" href="/home">
			<img src={logo_beginbiz} alt="Company logo"class="w-40 object-center"/></a>

		</div>
		<div class="navbar-center hidden lg:flex">
		  <ul class="menu menu-horizontal px-1">
			<!-- svelte-ignore a11y-missing-attribute -->
			<li>
				<details>
				  <summary>ข้อมูลกฎหมายธุรกิจ</summary>
				  <ul class="p-2">
					<li><a>01</a></li>
					<li><a>02</a></li>
					<li><a>03</a></li>
					<li><a>04</a></li>
					<li><a>05</a></li>
					<li><a>06</a></li>
					<li><a>07</a></li>
					<li><a>08</a></li>
					<li><a>09</a></li>
				  </ul>
				</details>
			</li>
			<li>
				<details>
				  <summary>แบบฟอร์มกฎหมาย</summary>
				  <ul class="p-2">
					<li><a href="/lawform/form01">ทะเบียนพาณิชย์</a></li>
					<li><a href="/lawform/form02">หลักประกันทางธุรกิจ</a></li>
					<li><a href="/lawform/form03">ห้างหุ้นส่วนจดทะเบียน</a></li>
					<li><a href="/lawform/form04">บริษัทจำกัด</a></li>
					<li><a href="/lawform/form05">บริษัทมหาชนจำกัด</a></li>
					<li><a href="/lawform/form06">สมาคมการค้า</a></li>
					<li><a href="/lawform/form07">หอการค้า</a></li>
					<li><a href="/lawform/form08">งานงบการเงิน</a></li>
					<li><a href="/lawform/form09">งานด้านบัญชี</a></li>
				  </ul>
				</details>
			</li>
			<li><a href="/chat">แชตบอต</a></li>
			<li><a href="/aboutus">เกี่ยวกับเรา</a></li>
		  </ul>
		</div>

		<div class="navbar-end">
			<SignedOut>
				<button class="btn btn-success-content" on:click={signInWithGoogle}>
				<img width="16" alt="Google &quot;G&quot; logo"
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/16px-Google_%22G%22_logo.svg.png"/>
					Google</button>
			</SignedOut>
	
			<SignedIn let:user>
			<div class="dropdown dropdown-end">
				  <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar ">
				  <div class="w-10 rounded-full">
					  <img alt="Tailwind CSS Navbar component" src={user.photoURL || blank_profile} />
				  </div>
				  </div>
				  <ul tabindex="-1" class="mt-3 z-[1] p-2 shadow menu dropdown-content bg-base-200 rounded-box w-52 ">
					<li><p>@{user.displayName}</p></li>
				  <li><button on:click={signOutUser}>ออกจากระบบ</button></li>
				  </ul>
			  </div>
			  </SignedIn>
		</div>
	  </div>
	<!-- </div> -->
  </FirebaseApp>
  
  <slot />