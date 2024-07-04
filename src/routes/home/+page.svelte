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
        margin-top: -45%;
        color: #fff; /* ตั้งค่าสีของข้อความให้สว่างเพื่อให้เห็นชัดบนภาพพื้นหลัง */
    }
    .gradient-text {
        font-family: "Krona One", sans-serif;
        background: linear-gradient(to right, #EC5A35,#E135C5, #A255F3);
        -webkit-background-clip: text;
        color: transparent; /* ตั้งค่านี้เพื่อให้เอฟเฟคไล่สีในข้อความใช้งานได้ในทุกเบราว์เซอร์ */
        display: inline-block; /* ใช้ inline-block หากต้องการให้คุณสมบัติ size ตามข้อความ */
    }
    .for-customer{
        display: inline-block;
        font-size:200%;
        font-family: "Krona One", sans-serif;
    }
    .max-w-md {
        max-width: 28rem; /* จำกัดขนาดความกว้างของเนื้อหา */
    }
    .chatbot_pic {    
        width: 75%;
        margin-top: 20%;
    }
    .logo_tool {    
        width: 50%;
        margin-top: 70%;
    }
    .border-01{
        text-align: center;
        text-decoration: none;
        border: 3px solid transparent;
        border-radius: 25px; /* ปรับความมนของขอบ */
        background-image: linear-gradient(#01031D,#01031D), /* พื้นหลังสีเข้ม */
                          linear-gradient(to right,  #EC5A35,#E135C5, #A255F3); /* ไล่สีขอบ */
        background-origin: border-box;
        background-clip: padding-box, border-box;
        border-width: 3px;
        width: 166%;
        height: 40%;
    }
    .text-law-1,.text-law-2,.try-1,.text-1{
        font-family: "Kanit", sans-serif;
    }
    .text-law-1{
        font-size: 36px;    
    }
    .text-law-2{
        font-size: 20px;   
    }
    .try-1{
        color: #01031D;
        margin-top: 5%;
        border-radius:25px;
        padding: 1.5% 6%;
        text-align: center;
        text-decoration: none;
        border-radius: 25px; /* ปรับความมนของขอบ */
        background: linear-gradient(to right, #EC5A35,#E135C5, #A255F3);
    }
    .try-1:hover{
        color: #fff;
        margin-top: 5%;
        border-radius:25px;
        padding: 1.5% 6%;
        text-align: center;
        text-decoration: none;
        border-radius: 25px; /* ปรับความมนของขอบ */
        background: linear-gradient(to right,  #A255F3,#E135C5,#EC5A35);
    }
    .bg-biz{
        background-color: #01031D;
        font-family: "Kanit", sans-serif;
    }

    /* button เยอะ ๆ */
    .container-01{
        display: flex;
        flex-wrap: wrap;
        gap: 2.6%;
        margin-top:-90%;
    }
    .button {
        font-family: "Kanit", sans-serif;
        padding: 0.8% 3%;
        border: 3px solid transparent;
        border-radius: 30px;
        color: #fff;
        text-align: center;
        cursor: pointer;     
        /* transition: background-color 0.3s ease; */
    }
    .orange {
        border-color: #FF5F5F;
    }
    .orange-01 { 
        margin-left:9.5%;
    }
    .purple {
        border-color: #A255F3;
    }
    .gradient-00{
        text-align: center;
        text-decoration: none;
        border: 3px solid transparent;
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
        margin-left: -0.8%;
    }
    .container-02{
        display: flex;
        /* gap: 2.5%; */
        margin-top:-140%;
        height: 45%;
    }
    .card-perple {
        font-family: "Krona One", sans-serif;
        background: linear-gradient(to top left, rgba(0, 0, 0, 0.3), rgba(142, 37, 177, 0.3), rgba(193, 64, 236, 0.3)); /* ไล่สีเฉียงจางลง */
        border-radius: 10px;
        padding: 20px;
        color: white;
        box-shadow: 0 4% 8% rgba(0, 0, 0, 0.5);
        width: 50%;
        
    }
    .card-margin-left{
        margin-left: 14.5%;
        margin-right:1%;
    }
    .card-margin-right{
        margin-right:14.5%;
        margin-left: 1%;
    }
    .font{
        font-family: "Kanit", sans-serif;
    }
    .card-title-00{
        font-size: 28px;
    }
    .try-2{
        font-family: "Kanit", sans-serif;
        color: #01031D;
        display: inline-block;
        padding: 10px 20px;
        font-size: 16px;
        text-align: center;
        border-radius: 25px;
        background: linear-gradient(to right, #EC5A35,#E135C5, #A255F3);
    }
    
    /*.try-2 .second{
        text-align: center;
        text-decoration: none;
        border: 3px solid transparent;
        background-image: linear-gradient(#01031D,#01031D), /* พื้นหลังสีเข้ม */
                          /*linear-gradient(to right,  #EC5A35,#E135C5, #A255F3); /* ไล่สีขอบ */
        /*background-origin: border-box;
        background-clip: padding-box, border-box;
    }*/

    .for-customer-02{
        display: inline-block;
        font-size:250%;
        color: #fff;
        font-family: "Krona One", sans-serif;
        margin-top: -195%;
    }
    .container-03{
        display: flex;
        /* gap: 2.5%; */
        font-family: "Kanit", sans-serif;
        margin-top:-170%;
        justify-content: center;
        gap: 2%;
        margin-left: 14.5%;
        margin-right: 14.5%;
    }

    .card-icon {
        /* background-color: #1c1c1c; */
        border: 3px solid transparent;
        border-radius: 20px; /* ปรับความมนของขอบ */
        padding: 20px;
        color: white;
        width: 50%;
        text-align: center;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        position: relative;
    }
    .orange-howto{
        border-color: #FF5F5F;
    }
    .perple-howto{
        border-color:  #A255F3 ;
    }
    .gradient-01{
        text-align: center;
        text-decoration: none;
        border: 3px solid transparent;
        border-radius: 20px; /* ปรับความมนของขอบ */
        background-image: linear-gradient(#01031D,#01031D), /* พื้นหลังสีเข้ม */
                          linear-gradient(to bottom right,  #EC5A35,#E135C5); /* ไล่สีขอบ */
        background-origin: border-box;
        background-clip: padding-box, border-box;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
    .gradient-02{
        text-align: center;
        text-decoration: none;
        border: 3px solid transparent;
        border-radius: 20px; /* ปรับความมนของขอบ */
        background-image: linear-gradient(#01031D,#01031D), /* พื้นหลังสีเข้ม */
                          linear-gradient(to bottom right, #E135C5, #b36fff ); /* ไล่สีขอบ */
        background-origin: border-box;
        background-clip: padding-box, border-box;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }

    .card-icon:before {
        content: "";
        position: absolute;
        top: -3px;
        left: -3px;
        right: -3px;
        bottom: -3px;
        border-radius: 20px; /* ให้ตรงกับ .card */
        background: linear-gradient(to top left, #ff5f5f, #b36fff);
        z-index: -1;
    }

    .icon {
        font-size: 40px;
        margin-bottom: 10px;
    }
    
    
    
</style>
  
<div class="hero"> <!-- Removed the inline style for background-image and moved it to the stylesheet -->
    <div class="hero-content">
        <div class="max-w-md">
            <h1 class="mb-0 text-6xl font-bold gradient-text ">LEGALTECH</h1>
            <h3 class="mb-5 text-2xl font-bold for-customer">for customer</h3>
            <p class="mb-5 text-1">เทคโนโลยีดิจิทัลเพื่อผู้ประกอบการ ฟังก์ชันแชทบอตที่เป็นส่วนช่วย<br>
                ให้ท่านสามารถหาความรู้กฎหมายธุรกิจได้อย่างรวดเร็ว ถูกต้อง </p>
        </div>
    </div> 
    <div class="chatbot_pic">
        <img src="/src/pic/chatbot_pic.png" alt="" >
    </div>
    <div class="logo_tool" >
        <img src="/src/pic/logo_tool.png" alt="" >
    </div>
</div>

<div class="hero min-h-screen">
    <div class="hero-content text-center border-01">
      <div class="max">
        <h1 class="text-law-1 font-bold">
            บิสกิทซ์ เอไอน้อยคอยช่วยเหลือคุณ </h1>
        <p class="text-law-2">ให้คำปรึกษาด้านกฎหมายธุรกิจ โดยบิสกิทซ์ผ่านการเทรนด์มาโดยเฉพาะ</p>
        <a href="/chat"><button class="try-1">เข้าใช้งาน</button></a>
      </div>
    </div>
</div>

<div class="hero">
    <div class="container-01">
        <div class="button orange orange-01">กฎหมายแรงงาน</div>
        <div class="button orange">กฎหมายเครื่องหมายการค้า</div>
        <div class="button gradient-00">กฎหมายลิขสิทธิ์</div>
        <div class="button purple purple-01">กฎหมายการคุ้มครองผู้บริโภค</div>
        <div class="button orange orange-01 margin-color">กฎหมายพระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล</div>
        <div class="button gradient-00 margin-color margin-law">กฎหมายภาษี</div>
        <div class="button purple margin-color margin-law">กฎหมายบัญชี</div>
        <div class="button purple purple-02 margin-color margin-law">กฎหมายสิทธิบัตร</div>
    </div>
</div>

<div class="hero">
    <div class="container-02">
        <div class="card w-96 card-perple card-margin-left">
            <div class="card-body items-center text-center">
            <h2 class="card-title-00">AI Chatbot</h2>
            <p class="font">ผสมผสานนวัตกรรมระหว่างแชทบอตและกฎหมาย
                เพื่อความสะดวกสบายของทุกท่านโดยพวกเราบีกินบิทซ์ขอร่วมเป็นส่วนหนึ่งในการสนับสนุนการเปิดกิจการ</p>
            <div class="card-actions justify-end">
                <button class="try-2">ใช้งาน</button>
                <button class="try-2 second">ดูเพิ่มเติม</button>
            </div>
        </div>
    </div>
    <div class="card w-96 card-perple card-margin-right">
        <div class="card-body items-center text-center">
            <h2 class="card-title-00">Legal Document</h2>
            <p class="font">ช้อมูลกฎหมายธุรกิจที่ครอบคลุมสำหรับคำถามของท่าน รวม
                ถึงสามารถเสิร์ชประมวลกฎหมายที่ท่านต้องการได ้ เพียงแค่
                เข้า ค้นหากฎหมาย</p>
            <div class="card-actions justify-end">
                <button class="try-2">ใช้งาน</button>
                <button class="try-2 second">ดูเพิ่มเติม</button>
            </div>
            </div>
        </div>
    </div>
</div>


<div class="hero"> 
    <h3 class="mb-5 text-2xl font-bold for-customer-02">HOW TO HELP?</h3>
    <div class="container-03">
            <!-- <p class="mb-5 text-1">เทคโนโลยีดิจิทัลเพื่อผู้ประกอบการ ฟังก์ชันแชทบอตที่เป็นส่วนช่วย<br>
                ให้ท่านสามารถหาความรู้กฎหมายธุรกิจได้อย่างรวดเร็ว ถูกต้อง </p> -->
    
    <div class="card-icon orange-howto">
        <!-- <div class="icon">
            <img src="/src/pic/chatbot_pic.png" alt="" >
        </div> -->
        <div class="icon">🕒</div>
        <h2>ประหยัดเวลา</h2>
        <p>ช่วยลดเวลา ในการหาข้อมูลและบางคำถามหรือท่านก็ปรึกษาสามารถถามบิลสิทธ์ได้ทันที</p>
    </div>
    <div class="card-icon gradient-01">
        <div class="icon">🕒</div>
        <h2>บริการตลอด 24 ชั่วโมง</h2>
        <p>สามารถใช้บิลสิทธ์ได้ตลอดเวลาเหมาะสมสำหรับผู้ประกอบการที่ต้องการใช้บริการช่วงดึก</p>
    </div>
    <div class="card-icon gradient-02">
        <div class="icon">📝</div>
        <h2>เข้าถึงข้อมูลได้ง่าย</h2>
        <p>บริการแชทบอตเป็นบริการที่สามารถเข้าถึงง่ายเพียงพิมพ์คำถามก็ได้คำตอบที่ต้องการ</p>
    </div>
    <div class="card-icon perple-howto">
        <div class="icon">⚖️</div>
        <h2>ข้อมูลเฉพาะเจาะจง</h2>
        <p>บิลสิทธ์ คือ แชทบอตที่ถูกเทรนด์ มาในด้านกฎหมายธุรกิจโดยเฉพาะ</p>
    </div>
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


