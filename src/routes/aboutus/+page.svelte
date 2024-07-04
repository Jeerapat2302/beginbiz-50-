<script lang="ts">
</script>

<style>
    @import url(https://fonts.googleapis.com/css?family=Krona+One:regular);
    @import url(https://fonts.googleapis.com/css?family=Kanit:100,100italic,200,200italic,300,300italic,regular,italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic);
    
    .hero {
        position: relative;
        display: flexbox;
        justify-content: center;
        background-color: #01031D;
        
        min-height: 100vh; /* ทำให้เต็มหน้าจอ */
        background-size: cover; /* ทำให้ภาพพื้นหลังเต็ม div */
        background-position: center; /* จัดศูนย์กลางภาพพื้นหลัง */
    }
    .hero-content {
        text-align: center;
        margin-top: 10%;
        margin-bottom: 105%;
        color: #fff; /* ตั้งค่าสีของข้อความให้สว่างเพื่อให้เห็นชัดบนภาพพื้นหลัง */
    }
    .gradient-text {
        font-family: "Krona One", sans-serif;
        background: linear-gradient(to right, #EC5A35,#E135C5, #A255F3);
        -webkit-background-clip: text;
        color: transparent; /* ตั้งค่านี้เพื่อให้เอฟเฟคไล่สีในข้อความใช้งานได้ในทุกเบราว์เซอร์ */
        display: inline-block; /* ใช้ inline-block หากต้องการให้คุณสมบัติ size ตามข้อความ */
        
    }
    .for-about{
        display: inline-block;
        font-size:200%;
        font-family: "Krona One", sans-serif;
    }
    </style>


<div class="hero"> <!-- Removed the inline style for background-image and moved it to the stylesheet -->
    <div class="hero-content">
        <div class="max-w-md">
            <h1 class="mb-0 text-6xl font-bold gradient-text ">LEGALFORM</h1>
            <h3 class="mb-5 text-2xl font-bold for-about">about us</h3>
        </div>
    </div>
</div>  