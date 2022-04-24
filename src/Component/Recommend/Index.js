import React from 'react'
import styles from "./Recommend.module.scss"
import style from "../../SCSS/styles.module.scss"
import Logo from "../products/Images/logo_header.jpg"
export default function Index() {
  return (
    <div className={styles.wrapper_recommend_page}>
           <div className={styles.header}>
               <img src={Logo} alt=""/>
           </div>
    </div>
  )
}
