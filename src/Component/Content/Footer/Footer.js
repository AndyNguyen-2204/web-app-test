import React from 'react'
import styles from "./footer.module.scss"
import style from "../../../SCSS/styles.module.scss";
import { TiSocialFacebook } from "react-icons/ti";
import {TiSocialGooglePlus} from "react-icons/ti";
import {TiSocialInstagram} from "react-icons/ti";
import {TiSocialTwitter} from "react-icons/ti";
import { IoLocationOutline } from "react-icons/io5";
import {IoCallOutline } from "react-icons/io5";
export default function footer() {
  return (
    <div className={styles.wrapper__footer}>
         <div className={style.container}>
             <div className={styles.content__left}>
                 <p>Hãy kết nối với chúng tôi thông qua các trang mạng xã hội:</p>
                 <div className={styles.icon}>
                     <i><TiSocialFacebook/></i>
                     <i><TiSocialGooglePlus/></i>
                     <i><TiSocialInstagram/></i>
                     <i><TiSocialTwitter/></i>
                 </div>
                 <div className={styles.icon__bot}>
                   <div className={styles.content__top}>
                   <i>< IoLocationOutline/></i>
                   <span>số 9 ngõ 305 Cổ Nhuế-Bắc Từ Liêm-Hà Nội</span>
                   </div>
                   <div className={styles.content__bot}>
                   <i>< IoCallOutline/></i>
                   <div className={styles.content__bot__text}>
                   <p>Mon – Fri: 9:00 am – 9:00 pm</p>
                   <b>0865268791</b>
                   </div>
                   </div>
                 </div>
             </div>
             {/* <div>
               <ul>
                 <li></li>
                 <li></li>
                 <li></li>
                 <li></li>
                 <li></li>
               </ul>
             </div> */}
         </div>
    </div>
  )
}
