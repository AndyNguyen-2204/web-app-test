import React from 'react'
import styles from "./Brands.module.scss"
import style from "../../../SCSS/styles.module.scss"
import { GoThumbsup } from "react-icons/go";
import {FiTruck} from "react-icons/fi"
import {IoLogoUsd} from "react-icons/io"
export default function Brands() {
  return (
    <div className={styles.wrapper__brand}>
      <div className={style.container}>
         <div className={styles.wrapper__brand__inner}>
         <div className={style.row}>
         <div className={styles.service__item}>
           <i><GoThumbsup/></i>
           <p>Trà sữa chất lượng hàng đầu</p>
         </div>
         <div className={styles.service__item}>
         <i><FiTruck/></i>
           <p>Giao hàng tận nơi,nhanh chóng ,tiện lợi</p>
         </div>
         <div className={styles.service__item}>
         <i><IoLogoUsd/></i>
           <p>Giá rẻ hơn bất kì nơi đâu</p>
         </div>
         </div>
         </div>
      </div>
    </div>
  )
}
