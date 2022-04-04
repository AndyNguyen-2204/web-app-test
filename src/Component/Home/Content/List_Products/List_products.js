import AOS from 'aos';
import 'aos/dist/aos.css';
import React,{useEffect} from 'react'
import styles from './List.module.scss'
import style from "../../../../SCSS/styles.module.scss"
import { FiEye } from "react-icons/fi";
import { FaLink} from "react-icons/fa";
import { IoCartOutline} from "react-icons/io5";
export default function List_products() {
  useEffect(()=>{
    AOS.init({
      
    })
   }, [])
  return (
    <div className={styles.wrapper__list}>
      <div className={style.container}>
        <h1 data-aos="zoom-in" data-aos-delay="500">Menu hôm nay</h1>
        <span data-aos="zoom-in" data-aos-delay="700" className={styles.wrapper__list__title}>Xem menu hôm nay</span>
        <div className={styles.wrapper__list__tab}>
          <ul  data-aos="fade-down" data-aos-delay="900">
            <li>Bán chạy</li>
            <li>Món mới</li>
            <li>Nước hoa quả</li>
            <li>Giảm giá</li>
          </ul>
        </div>
        <div className={styles.wrap__all__products}>
          <div className={style.row}>
            <div data-aos="flip-up" data-aos-delay="500" className={styles.wrap__product}>
              <div className={styles.wrap__product__inner}>
              <div className={styles.img__icon}>
              <img src='https://pdp.edu.vn/wp-content/uploads/2021/06/hinh-anh-tra-sua-dep-ngon-nhat.jpg'></img>
              </div>
                <div className={styles.wrap__product__content}>
                  <h2>Trà sữa caramen</h2>
                  <p>150000đ</p>
                  <div className={styles.icon}>
                  <span>Đặt hàng</span>
                  <i><IoCartOutline/></i>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
