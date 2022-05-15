import React,{useState} from 'react'
import styles from "./Sign_up.module.scss"
import { BsFillPersonFill,BsFillLockFill} from "react-icons/bs";
import Modal_form from '../Orther/Modal/Modal_form';
import { Link } from 'react-router-dom';
import Back_home from '../Button_back_home/back_home';
export default function Sign_in() {
const [value,setValue]=useState({
  useName:"",
  password:"",
  confirmpass:""
})
const [isOpen,setIsOpen]=useState(false)
const[ title,setTitle]=useState("")
const submit_form=()=>{
 if((value.useName).length===0&&(value.password).length===0&&(value.confirmpass).length===0){
   setTitle("Vui lòng nhập tài khoản và mật khẩu")
   setIsOpen(true)
 }
 if((value.useName).length===0){
   setTitle("Vui lòng nhập email")
   setIsOpen(true)
 }
 if((value.password).length===0&&(value.confirmpass).length===0){
  setTitle("Vui lòng nhập mật khẩu")
  setIsOpen(true)
}
if((value.password).length===0){
  setTitle("Vui lòng nhập mật khẩu")
  setIsOpen(true)
}
if((value.confirmpass).length===0){
  setTitle("Vui lòng nhập mật khẩu xác nhận")
  setIsOpen(true)
}
if(value.useName,value.password,value.confirmpass){
  setTitle("Chúc mừng bạn đã đăng ký thành công")
  setIsOpen(true)
}
}
  return (
    <div className={styles.wrap_sign_up}>
      <div><Back_home/></div>
      <div  className={styles.content_form}>
             <div className={styles.section}>
               <h1>Tuna Tea</h1>
             </div>
             <div className={styles.wrap_form}>
               <h1>Đăng ký</h1>
               <form>
                     <div className={styles.input_email}>
                       <i><BsFillPersonFill/></i>
                       <input value={value.useName} onChange={(e)=>setValue({...value,useName:e.target.value})} type="email" placeholder='Nhập email'/>
                     </div>
                     <div className={styles.input_password}>
                       <i><BsFillLockFill/></i>
                       <input value={value.password} onChange={(e)=>setValue({...value,password:e.target.value})} type="password" placeholder='Nhập password'/>
                     </div>
                     <div className={styles.input_password}>
                       <i><BsFillLockFill/></i>
                       <input value={value.confirmpass} onChange={(e)=>setValue({...value,confirmpass:e.target.value})} type="password" placeholder='Xác nhận password'/>
                     </div>
               </form>
               <button onClick={()=>submit_form()} type='button'>Xác nhận</button>
               <div className={styles.text_bottom}>
                  <p>Bạn đã có tài khoản? <Link to="/sign_in"><span>Đăng nhập</span></Link></p>
               </div>
             </div>
      </div>
      <Modal_form title={title} isOpen={isOpen} setIsOpen={setIsOpen}/>
    </div>
  )
}
