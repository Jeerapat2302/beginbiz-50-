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
    .for-download{
        display: inline-block;
        font-size:200%;
        font-family: "Krona One", sans-serif;
    }
    .bg-biz{
        background-color: #01031D;
        font-family: "Kanit", sans-serif;
    }
    .font{
        font-family: "Kanit", sans-serif;
    }
    </style>

<div class="hero"> <!-- Removed the inline style for background-image and moved it to the stylesheet -->
    <div class="hero-content">
        <div class="max-w-md">
            <h1 class="mb-0 text-6xl font-bold gradient-text ">LEGALFORM</h1>
            <h3 class="mb-5 text-2xl font-bold for-download">for download</h3>
        </div>
    </div>
    <div class="menu bg-base w-100 rounded-box font">
        <ul>
            <li></li>
            <li><a href="/lawform/form01">ทะเบียนพาณิชย์</a></li>
            <li></li>
            <li></li>
            <li><a href="/lawform/form02">งานงบด้านบัญชี</a></li>
            <li></li>
            <li></li>
            <li><a href="/lawform/form03">งานงบด้านการเงิน</a></li>
            <li></li>
            <li></li>
            <li><a href="/lawform/form04">บริษัทจำกัด</a></li>
            <li></li>
            <li></li>
            <li><a href="/lawform/form05">บริษัทมหาชนจำกัด</a></li>
            <li></li>
            <li></li>
            <li><a href="/lawform/form06">สมาคมการค้า</a></li>
            <li></li>
            <li></li>
        </ul>
    </div>
</div>  

<footer class="footer p-10 bg-base-200 text-base-content bg-biz">
    <aside>
        <p><!-- <img src="/src/pic/logo_biz.png" alt="" width="5%" height="5%"> -->
        ACME Industries Ltd.<br>Providing reliable tech since 1992
        </p>
    </aside> 
    <nav>
      <h6 class="footer-title">ทางลัด</h6> 
      <a href="/" class="01">ค้นหากฎหมาย</a>
      <a  href="/"class="link link-hover">ข้อมูลทั่วไป</a>
      <a  href="/" class="link link-hover">แชทบอต</a>
      <a  href="/" class="link link-hover">ราคา</a>
    </nav> 
    <nav>
      <h6 class="footer-title">เกี่ยวกับเรา</h6> 
      <a  href="/" class="link link-hover">คำถามเกี่ยวกับเรา</a>
      <a  href="/" class="link link-hover">ติดต่อเรา</a>
    </nav> 
    <nav>
      <h6 class="footer-title">ข้อมูลทั่วไป</h6> 
      <a  href="/" class="link link-hover">กฎหมายที่ครอบคลุม</a>
      <a  href="/" class="link link-hover">กรณีศึกษา</a>
    </nav>
  </footer>






