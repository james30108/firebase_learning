
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-auth.js";

// * ติดต่อ Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBu4obwj9NgyhdUG2CKafjICsx1zImLJ3w",
    authDomain: "fir-learning-41e65.firebaseapp.com",
    projectId: "fir-learning-41e65",
    storageBucket: "fir-learning-41e65.appspot.com",
    messagingSenderId: "774206344894",
    appId: "1:774206344894:web:93de33c5ecf9651e3a98ef",
    measurementId: "G-PB4NG078N5"
  };

const app = initializeApp(firebaseConfig);

// -------------------------------------------------

// * การเข้าสู่ระบบ

// * เรียกใช้งาน Auth ของระบบ Firebase
const auth          = getAuth (app)

// ตัวแปร
const formarea     = document.getElementById ("form-area")
const registerform  = document.getElementById ("registerform")

// เมื่อทำการกด submit
registerform.addEventListener("submit", (event) => {

    // ทำให้ฟอร์มไม่รีเซ็ตหน้า
    event.preventDefault ()

    const email     = registerform.email.value
    const password  = registerform.password.value


    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
        console.log ("สร้างบัญชีเสร็จเรียบร้อย")
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log (errorMessage)
    });
})