import React,{useEffect} from 'react'
import styles from "./Header.module.scss"
import { BsFillBasket2Fill } from "react-icons/bs";
import { BsPersonFill} from "react-icons/bs";
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
            <li>
                <Link to="order">Dịch vụ</Link>
            </li>
            <li>Tin tức</li>
            <li>Liên Hệ</li>
        </ul>
        <div className={styles.icon}>
        <Link to="/products"><i><BsFillBasket2Fill/></i></Link>
        <Link to="/sign_in"><i><BsPersonFill/></i></Link>
    </div>
    </div>
</div>
  )
}
