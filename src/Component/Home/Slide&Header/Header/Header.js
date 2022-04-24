import React,{useEffect} from 'react'
import styles from "./Header.module.scss"
import { FiZoomOut} from "react-icons/fi";
import {FiTool } from "react-icons/fi";
import { FiSmartphone } from "react-icons/fi";
import Logo from "../../../../Assess/Images/logo.jpg"
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function Header() {
    useEffect(()=>{
        AOS.init({
          
        })
       }, [])
  return (
    <div data-aos="fade-down"
    data-aos-anchor-placement="center-bottom" data-aos-delay="500"  className={styles.header}>
    <div className={styles.navigation}>
        <ul className={styles.content_left}>
            <li>Trang chủ </li>
            <li>
                <Link to="/recommend">Giới thiệu</Link>
                </li>   
            <li>
                <Link to="/products">Sản phẩm</Link>
            </li>
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
