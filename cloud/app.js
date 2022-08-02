
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-app.js";
import { getStorage, ref, uploadBytes } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-storage.js";

// ติดต่อ Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBu4obwj9NgyhdUG2CKafjICsx1zImLJ3w",
    authDomain: "fir-learning-41e65.firebaseapp.com",
    projectId: "fir-learning-41e65",
    storageBucket: "fir-learning-41e65.appspot.com",
    messagingSenderId: "774206344894",
    appId: "1:774206344894:web:93de33c5ecf9651e3a98ef",
    measurementId: "G-PB4NG078N5"
  };

const app       = initializeApp(firebaseConfig);
const storage   = getStorage(app);
// -------------------------------------------------

// ตัวแปร
const uploadfile = document.getElementById ("uploadfile")

// สมัครใช้งาน
uploadfile.addEventListener("change", (event) => {

    // ไฟล์
    const file = event.target.files[0]
    
    // เตรียมไฟล์สำหรับอัปโหลด โดยในที่นี้จะเปลี่ยนชื่อไฟล์ไปใช้ชื่อไฟล์ตัวอย่างว่า myimage_test
    const imageRef = ref (storage, "myimage_test")

    // ทำการอัปโหลดไฟล์
    uploadBytes (imageRef, file).then ((result) => {
        alert ("อัปโหลดไฟล์เรียบร้อยแล้ว")
        //uploadfile.value = ""
    })
})