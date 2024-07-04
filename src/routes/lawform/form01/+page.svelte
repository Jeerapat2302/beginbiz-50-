<script lang="ts">
    import { storage } from "$lib/firebase";
    import { ref, getDownloadURL } from "firebase/storage";
    
    async function downloadFile(path: string) {
      try {
        const storageRef = ref(storage, path);
        const url = await getDownloadURL(storageRef);
    
        // สร้างลิงก์สำหรับดาวน์โหลด
        const link = document.createElement('a');
        link.href = url;
        // link.download = path.split('/').pop(); 
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } catch (error) {
        if ((error as any).code === 'storage/object-not-found') {
          alert("ไม่พบไฟล์"); // แสดงข้อความเฉพาะเมื่อไม่พบไฟล์
        } else {
          console.error("Error downloading file:", error);
          alert("เกิดข้อผิดพลาดในการดาวน์โหลดไฟล์"); 
        }
      }
    }
    
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
        .law-form{
            display: inline-flexbox;
    
        }
        .table{
            font-family: "Kanit", sans-serif;
            
        }
        .all-table{
            margin-top: -25%;
        }
        </style>
    
    
    <div class="hero"> <!-- Removed the inline style for background-image and moved it to the stylesheet -->
        <div class="hero-content">
            <div class="max-w-md">
                <h1 class="mb-0 text-6xl font-bold gradient-text ">LEGALFORM</h1>
                <h3 class="mb-5 text-2xl font-bold for-download">for download</h3>
            </div>
        </div>
    
        <div class="overflow-x-auto all-table">
            <table class="table">
              <!-- head -->
              <thead>
                <tr>
                  <th></th>
                  <th>ทะเบียนพาณิชย์</th>
                  <th></th>
                  <th>ดาวน์โหลด</th>
                  
                </tr>
              </thead>
              <tbody>
                <!-- row 1 -->
                <tr>
                  <th>1</th>
                  <td>คำแนะนำ จดทะเบียนจัดตั้งใหม่</td>
                  <td></td>
                  <td> <button on:click={() => downloadFile('gs://beginbiz-v2.appspot.com/lawform/ทะเบียนพาณิชย์/คำแนะนำ จดทะเบียนจัดตั้งใหม่.pdf')}>Download</button>
                </tr>
                <!-- row 2 -->
                <tr>
                  <th>2</th>
                  <td>คำแนะนำ จดทะเบียนเปลี่ยนแปลงรายการ</td>
                  <td></td>
                  <td><button on:click={() => downloadFile('/path')}>Download</button>
                </tr>
                <!-- row 3 -->
                <tr>
                  <th>3</th>
                  <td>คำแนะนำ จดทะเบียนเลิกพาณิชยกิจ</td>
                  <td></td>
                  <td><button on:click={() => downloadFile('gs://beginbiz-v2.appspot.com/lawform/ทะเบียนพาณิชย์/คำแนะนำ จดทะเบียนเลิกพาณิชยกิจ.pdf')}>Download</button>
                </tr>

                <tr>
                  <th>4</th>
                  <td>หนังสือมอบอำนาจ</td>
                  <td></td>
                  <td><button on:click={() => downloadFile('gs://beginbiz-v2.appspot.com/lawform/ทะเบียนพาณิชย์/หนังสือมอบอำนาจ.pdf')}>Download</button>
                </tr>

                <tr>
                  <th>5</th>
                  <td>เอกสารประกอบการจดทะเบียนพาณิชย์อิเล็กทรอนิกส์</td>
                  <td></td>
                  <td><button on:click={() => downloadFile('gs://beginbiz-v2.appspot.com/lawform/ทะเบียนพาณิชย์/เอกสารประกอบการจดทะเบียนพาณิชย์อิเล็กทรอนิกส์.pdf')}>Download</button>
                </tr>

                <!-- <tr>
                  <th>6</th>
                  <td>แบบ ทพ</td>
                  <td></td>
                  <td><button on:click={() => downloadFile('gs://beginbiz-v2.appspot.com/lawform/ทะเบียนพาณิชย์/แบบ ทพ..pdf')}>Download</button>
                </tr>

                <tr>
                  <th>7</th>
                  <td>แบบคำร้อง</td>
                  <td></td>
                  <td><button on:click={() => downloadFile('gs://beginbiz-v2.appspot.com/lawform/ทะเบียนพาณิชย์/แบบคำร้อง.pdf')}>Download</button>
                </tr>

                <tr>
                  <th>8</th>
                  <td>แบบบริการข้อมูลทะเบียนพาณิชย์</td>
                  <td></td>
                  <td><button on:click={() => downloadFile('gs://beginbiz-v2.appspot.com/lawform/ทะเบียนพาณิชย์/แบบบริการข้อมูลทะเบียนพาณิชย์.pdf')}>Download</button>
                </tr> -->
                
              </tbody>
            </table>
          </div>
    
    </div>  