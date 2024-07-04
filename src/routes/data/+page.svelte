<script lang="ts"> 
</script>


    <!-- Component.svelte -->
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
    .for-learn{
        display: inline-block;
        font-size:200%;
        font-family: "Krona One", sans-serif;
    }
    .text-law{
        font-size:110%;
        font-family: "Kanit", sans-serif;
    }
    .text-law-head{
        margin-top: 10%;
    }
    .text-content{
        margin-left: 5%;
        margin-right: 5%;
        font-family: "Kanit", sans-serif;
    }
    .rectangle{
        margin-top: 2%;
        max-width: 50rem; /* จำกัดขนาดความกว้างของเนื้อหา */
    }
    .bg-biz{
        background-color: #01031D;
        font-family: "Kanit", sans-serif;
    }

</style>

<div class="hero"> 
    <div class="hero-content">
        <div class="max-w-md">
            <h1 class="mb-0 text-6xl font-bold gradient-text ">LEGALDOC</h1>
            <h3 class="mb-5 text-2xl font-bold for-learn">for learning</h3>
        </div>
    </div> 
<div class="text-law-head">
    <!-- <div class="collapse collapse-arrow outline rectangle">
        <input type="radio" name="my-accordion-2" /> 
        <div class="collapse-title text-law"> กฎหมายแรงงาน </div>
        <div class="collapse-content text-content"> 
            <p> ความสมบูรณ์ของการทำสัญญาจ้างแรงงาน นายจ้าง และลูกจ้างมีสิทธทจะแสดงเจตนาทำสัญญาจ้าง
                แรงงานกันโดยทำเป็นหนังสือ หรือโดยปากเปลาก็ได้ แต่ต้องอยู่ภายในขอบเขตของกฎหมายแพงและพาณิชย์ 
                และกฎหมายคมครองแรงงาน ซึ่งเป็นกฎหมายเกี่ยวกบความสงบเรียบร้อยของประชาชน ซึ่งถามการแสดงเจตนา
                ขัดต่อกฎหมายดังกล่าวยอมทำใหตกเปนโมฆะได้ 
            </p>
        </div>
    </div> -->
    
    

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





