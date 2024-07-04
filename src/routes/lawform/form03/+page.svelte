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
          alert("เกิดข้อผิดพลาดในการดาวน์โหลดไฟล์"); // แสดงข้อความทั่วไปสำหรับข้อผิดพลาดอื่นๆ
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
                  <th>ชื่อแบบฟอร์ม</th>
                  <th></th>
                  <th>ดาวน์โหลด</th>
                  
                </tr>
              </thead>
              <tbody>
                <!-- row 1 -->
                <tr>
                  <th>1</th>
                  <td>คําขอจดทะเบียนบริษัทจํากัด</td>
                  <td></td>
                  <td> <button on:click={() => downloadFile('gs://beginbiz-195d8.appspot.com/lawform/คำขอจดทะเบียนบริษัทจำกัด.pdf')}>Download</button>
                </tr>
                <!-- row 2 -->
                <tr>
                  <th>2</th>
                  <td>คําขอจดทะเบียนบริษัทจํากัด</td>
                  <td></td>
                  <td><button on:click={() => downloadFile('path/to/your/file')}>Download</button>
                </tr>
                <!-- row 3 -->
                <tr>
                  <th>3</th>
                  <td>หนังสือบริคณห์สนธิ</td>
                  <td></td>
                  <td><button on:click={() => downloadFile('path/to/your/file')}>Download</button>
                </tr>
                
              </tbody>
            </table>
          </div>
    
    </div>  