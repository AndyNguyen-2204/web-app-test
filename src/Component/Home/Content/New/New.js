import React, { useEffect } from 'react'
import styles from "./New.module.scss"
import style from "../../../../SCSS/styles.module.scss"
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function New() {
  useEffect(() => {
    AOS.init({

    })
  }, [])
  return (
    <div className={styles.wrapper__new}>
      <div className={style.container}>
        <p>Hình ảnh trà sữa nổi bật </p>
        <div className={style.row}>
          <div data-aos="fade-up"
            data-aos-duration="2000" className={styles.new__left}>
            <img src='https://img4.thuthuatphanmem.vn/uploads/2020/05/07/anh-pha-tra-sua-dep_062227481.jpg' />
          </div>
          <div className={styles.new__right}>
            <div data-aos="fade-up"
              data-aos-duration="3000"><img src='https://thuthuatnhanh.com/wp-content/uploads/2020/12/hinh-anh-tra-sua-dep-va-ngon.jpg' /></div>
            <div data-aos="fade-left"
              data-aos-offset="500"
              data-aos-duration="500" ><img src='https://toplist.vn/images/800px/dingtea-377411.jpg' /></div>
            <div data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500" ><img src='https://toquoc.mediacdn.vn/2019/11/20/anh-1-15742188589661158583681.jpg' /></div>
            <div data-aos="fade-left"
              data-aos-offset="500"
              data-aos-duration="500" ><img src='https://alltop.vn/backend/media/images/posts/695/quan_tra_sua_ngon_va_noi_tieng_nhat_tai_Ha_Tinh-59001.jpg' /></div>
          </div>
        </div>
      </div>
    </div>
  )
}