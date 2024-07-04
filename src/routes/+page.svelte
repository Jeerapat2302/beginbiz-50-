<script lang="ts"> 
</script>

<!-- Component.svelte -->
<style>
    @import url(https://fonts.googleapis.com/css?family=Krona+One:regular);
    @import url(https://fonts.googleapis.com/css?family=Kanit:100,100italic,200,200italic,300,300italic,regular,italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic);

    :global(body) {
    background-color: #01031D;
    margin: 0;
    padding: 0;
    font-family: "Kanit", sans-serif;
    }

    .text-gradient {
        background: linear-gradient(to right, #EC5A35,#E135C5, #A255F3);
        -webkit-background-clip: text;
        color: transparent; /* ตั้งค่านี้เพื่อให้เอฟเฟคไล่สีในข้อความใช้งานได้ในทุกเบราว์เซอร์ */
        display: inline-block; /* ใช้ inline-block หากต้องการให้คุณสมบัติ size ตามข้อความ */
    }
    .bt-gradient{
        /* color: #01031D;
        margin-top: 5%;
        border-radius:25px;
        padding: 1.5% 6%; 
        text-align: center; */
        text-decoration: none; 
        background: linear-gradient(to right, #EC5A35,#E135C5, #A255F3);
    }


    .container-01{
        display: flex;
        flex-wrap: wrap;
        gap: 2.6%;
        position: relative;
        justify-content: center;
        
    
    }
    .button {
        padding: 0.8% 3%;
        border: 3.5px solid transparent;
        border-radius: 30px;
        color: #fff;
       
        /* cursor: pointer;      */
        /* transition: background-color 0.3s ease; */
    }
    .orange {
        border-color: #FF5F5F;
        
    }
    .purple {
        border-color: #A255F3;
    }
    .bd-gradient{
        text-align: center;
        text-decoration: none;
        border: 3.5px solid transparent;
        border-radius: 50px; /* ปรับความมนของขอบ */
        background-image: linear-gradient(#01031D,#01031D), /* พื้นหลังสีเข้ม */
                          linear-gradient(to right,  #EC5A35,#E135C5, #A255F3); /* ไล่สีขอบ */
        background-origin: border-box;
        background-clip: padding-box, border-box; 
    }
    .margin-color {
        margin-top:2%;
        
    } 
    .margin-law{
        margin-left: -1.5%;
    }

    @media (max-width: 768px) {
        .text-6xl {
            font-size: 2.8rem; /* Adjust heading size */
        }
        .text-4xl {
            font-size: 1.8rem; /* Adjust subheading size */
        }
        .text-3xl {
            font-size: 2.05rem; /* Adjust subheading size */
        }
        .text-l {
            font-size: 0.8rem; /* Adjust paragraph size */
        }
        .mx-10 {
            margin-left: 1rem;
            margin-right: 1rem;
        }
        .-mt-9 {
            margin-top: -2rem; /* Adjust top margin */
        }
    }
    
</style>

<main class="flex justify-center text-center ">
    <div class="max-w-full mx-10">
        <h1 class="mb-0 text-6xl font-bold font-krona text-gradient">LEGALTECH</h1>
        <h3 class="mb-4 text-4xl font-bold font-krona text-white">for customer</h3>
        <p class="mb-10 text-l text-white">
            เทคโนโลยีดิจิทัลเพื่อผู้ประกอบการ ฟังก์ชันแชทบอตที่เป็นส่วนช่วยให้ท่าน <br>
            สามารถหาความรู้กฎหมายธุรกิจได้อย่างรวดเร็ว ถูกต้อง
        </p>
    </div>

</main>
 
<div class="flex items-center justify-center ">
    <img class="size-10/12" src="/src/pic/chatbot_pic.png" alt="" >

</div>
<div class="flex items-center justify-center -mt-9 ">
    <img class="size-6/12" src="/src/pic/logo_tool.png" alt="" >
</div>

<!-- <div class="flex items-center justify-center ">
    <div class="rounded-lg p-6 w-1/2 text-center ">

      <h2 class="text-3xl font-bold mb-2 text-3xl font-bold text-white">บิสกิทซ์ เอไอน้อยคอยช่วยเหลือคุณ</h2>
      <p class="mb-6 ">ให้คำปรึกษาด้านกฎหมายธุรกิจ โดยบิสกิทซ์ผ่านการเทรนด์มาโดยเฉพาะ</p>
      <a href="/chat"><button class="rounded-full bt-gradient text-black px-7 py-2 ">เข้าใช้งาน</button></a>

    </div>
</div> -->

<div class="flex items-center justify-center mt-28">
    <div class="relative rounded-lg p-6 w-7/12">
      <div class="absolute -inset-20 rounded-lg bg-gradient-to-r from-[#EC5A35] via-[#E135C5] to-[#A255F3] p-1">
        <div class="relative bg-[#01031D] rounded-lg p-6 text-center">
            <h2 class="text-3xl font-bold mb-4 text-white">บิสกิทซ์ เอไอน้อยคอยช่วยเหลือคุณ</h2>
            <p class="mb-6 text-l ">ให้คำปรึกษาด้านกฎหมายธุรกิจผ่านการเทรนด์มาโดยเฉพาะ</p>
            <a href="/chat"><button class="rounded-full bt-gradient text-black px-7 py-2 mb-3">เข้าใช้งาน</button></a>
        </div>
      </div>
    </div>
</div>



  







