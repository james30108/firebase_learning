
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-app.js";
import { getFirestore, collection, getDocs, addDoc, deleteDoc, doc } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-firestore.js";

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

// เรียกใช้งานฐานข้อมูล FireStore ของระบบ Firebase
const db = getFirestore (app)

const getEmployee = async (db) => {

    // เรียกใช้งาน Collection employee
    const employee_collection = collection(db,"employees")

    // ดึง document ทุกอันที่อยู่ใน employee_collection มาใช้งาน
    const employee_snapshot = await getDocs (employee_collection)

    return employee_snapshot
}
// -------------------------------------------------


// * สำหรับแสดงข้อมูลในตาราง
const table = document.getElementById ("table")

// สำหรับแสดงข้อมูล
function showData (employee) {

    // สร้างจำนวนแถวในตาราง ดดยทำการแทรกข้อมูลลงบนชั้นบนสุดเสมอ (-1 คือบนสุด) 
    const row = table.insertRow (-1)
    const nameCol = row.insertCell(0)
    const ageCol = row.insertCell(1)
    const deleteCol = row.insertCell(2)

    // ใส่ข้อมูลลงในตาราง
    nameCol.innerHTML = employee.data().employee_name
    ageCol.innerHTML = employee.data().employee_age

    // สร้างปุ่มลบข้อมูล
    let btn = document.createElement("button")
    btn.textContent = "ลบข้อมูล"
    btn.setAttribute ("class", "btn btn-danger")
    btn.setAttribute ("data-id", employee.id)
    deleteCol.appendChild (btn)

    // การลบข้อมูล
    btn.addEventListener("click", (event) => {
        alert ("ลบข้อมูลแล้ว")
        let id = event.target.getAttribute ("data-id")
        deleteDoc (doc (db, "employees", id))
    })

}

// เรียกใช้งาน getEmployee
const data = await getEmployee (db)

// Loop ข้อมูลและนำไปแสดงหน้าเว็บ
data.forEach(element => {
    showData (element)
})
// -------------------------------------------------


// * การบันทึกข้อมูล
const form = document.getElementById ("addForm")
// ดึงข้อมูลจาก form
form.addEventListener("submit", (event) => {
    
    // ทำให้ฟอร์มไม่รีเซ็ตหน้า
    event.preventDefault ()

    // บันทึกลงฐานข้อมูล
    addDoc (collection(db, "employees"), {
        employee_name : form.employee_name.value,
        employee_age  : form.employee_age.value,
    })

    // รีเซ้ตให้ form เป้นค่าว่าง
    form.employee_name.value = ""
    form.employee_age.value = ""

    alert ("บันทึกข้อมูลเรียบร้อย")
})
// -------------------------------------------------

