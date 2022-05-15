import React,{useState} from 'react'
import styles from "./Modal_form.module.scss"
import { BsXLg} from "react-icons/bs";
export default function ({title,isOpen,setIsOpen}) {
  const close_modal=()=>{
       setIsOpen(false)
  }
  return (
    <div className={isOpen===true?styles.wrap_modal:styles.hide}>
      <div className={styles.box_noti}>
        <div>
        <h1>Thông báo </h1>
           <p>{title}</p>
        </div>
            <i onClick={()=>close_modal()}><BsXLg/></i>
      </div>
    </div>
  )
}
