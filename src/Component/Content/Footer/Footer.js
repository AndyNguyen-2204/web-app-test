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
            <div className={style.row}>
           <div className={styles.content__inner}>
           <div className={styles.content__left}>
                 <p>Hãy kết nối với chúng tôi thông qua các trang mạng xã hội :</p>
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
             <div className={styles.content__right}>
               <ul>Useful Links :
                 <li>About Us</li>
                 <li>Contact Us</li>
                 <li>Shop by Categories</li>
                 <li>Shopping Cart</li>
                 <li>FAQ's</li>
               </ul>
             </div>
             <div className={styles.map}>
             <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1861.608118138001!2d105.77788740812883!3d21.06402404634868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3134555743ca25ef%3A0xca481659e95c29c6!2zVsSDbiBQaMOybmcgTHXhuq10IFPGsCBMw6ogTmd1ecOqbiBHacOhcA!5e0!3m2!1svi!2s!4v1648392464902!5m2!1svi!2s"></iframe>
             </div>
           </div>
            </div>
         </div>
    </div>
  )
}
