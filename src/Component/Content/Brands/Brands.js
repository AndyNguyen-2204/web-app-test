import React from "react";
import styles from "./Brands.module.scss";
import style from "../../../SCSS/styles.module.scss";
import { GoThumbsup } from "react-icons/go";
import { FiTruck } from "react-icons/fi";
import { IoLogoUsd } from "react-icons/io";
import logo1 from "./Images/step-1.png";
import logo2 from "./Images/step-2.png";
import logo3 from "./Images/step-3.png";
import logo4 from "./Images/step-4.png";
import Arr from "./Images/step-arr.png";
export default function Brands() {
  return (
    <div className={styles.wrapper__brand}>
      <div className={style.container}>
        <div className={styles.wrapper__brand__inner}>
          <div className={styles.flex__title}>
            <h1 className={styles.title_1}> Cách thức đặt hàng </h1>
          </div>
          <div className={style.row}>
            <div className={styles.service__item}>
              <img src={logo1} alt="" />
              <p>
                Gọi <b> 19001802 </b>
              </p>
            </div>
            <div className={styles.arr}>
              <img src={Arr} alt="" />
            </div>
            <div className={styles.service__item}>
              <img src={logo2} alt="" />
              <p> Tạo đơn hàng </p>
            </div>
            <div className={styles.arr}>
              <img src={Arr} alt="" />
            </div>
            <div className={styles.service__item}>
              <img src={logo3} alt="" />
              <p> Giao hàng </p>
            </div>
            <div className={styles.arr}>
              <img src={Arr} alt="" />
            </div>
            <div className={styles.service__item}>
              <img src={logo4} alt="" />
              <p> Thanh toán </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
