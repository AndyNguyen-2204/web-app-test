import React from 'react'
import Img from "./Images/img_test.jpg"
import styles from "./Banner.module.scss"
import style from "../../../SCSS/styles.module.scss"
export default function Products(list_product) {
  return (
   <div className={styles.wrapper__banner}>
     <div className={styles.banner_content}>
       <h1 className={styles.banner_content__title}>Chúng tôi là</h1>
       <span className={styles.banner_content__name}>Tuna Tea</span>
       <p>Thứ hai đến Thứ bảy <b>8:30am - 11:00pm </b>| Hotline: <b>090.635.1080</b></p>
       <div className={styles.br}/>
       <p className={styles.banner_content__des}>Chúng tôi đi khắp thế giới để tìm kiếm cà phê tuyệt vời.
          Trong quá trình đó, chúng tôi phát hiện ra những hạt đậu đặc biệt và hiếm
          đến nỗi chúng tôi có thể chờ đợi để mang chúng về.</p>
     </div>
     <div className={styles.banner_img}>
       <img src={Img}/>
     </div>
   </div>
  )
}
