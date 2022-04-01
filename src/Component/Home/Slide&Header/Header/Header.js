import React from 'react'
import styles from "./Header.module.scss"
import { FiZoomOut} from "react-icons/fi";
import {FiTool } from "react-icons/fi";
import { FiSmartphone } from "react-icons/fi";
import Logo from "../../../../Assess/Images/logo.png"
export default function Header() {
  return (
    <div className={styles.header}>
    <div className={styles.navigation}>
        <ul className={styles.content_left}>
            <li>Trang chủ </li>
            <li>Giới thiệu</li>   
            <li>Sản phẩm</li>
        </ul>
        <div className={styles.logo}> 
            <img src={Logo}/>
        </div>
        <ul className={styles.content_right}>
            <li>dịch vụ</li>
            <li>Tin tức</li>
            <li>Liên Hệ</li>
        </ul>
        <div className={styles.icon}>
        <i><FiZoomOut/></i>
        <i><FiTool/></i>
    </div>
    </div>
</div>
  )
}
