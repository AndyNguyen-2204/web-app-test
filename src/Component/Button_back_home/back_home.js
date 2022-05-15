import React from 'react'
import styles from "./Back_home.module.scss"
import { BiHomeAlt} from "react-icons/bi";
import { Link } from 'react-router-dom';
export default function Back_home() {
  return (
    <div className={styles.wrap_button_back_home}> 
<Link to="/">
<div className={styles.wrap_button_back_home_inner}>
           <i><BiHomeAlt/></i>
           <p>Trở lại trang chủ</p>
       </div>
       </Link>    
       </div>
  )
}
