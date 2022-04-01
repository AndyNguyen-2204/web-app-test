import React from 'react'
import styles from "./New.module.scss"
import style from "../../../../SCSS/styles.module.scss"
export default function New() {
  return (
    <div className={styles.wrapper__new}>
      <div className={style.container}>
       <p>Hình ảnh trà sữa nổi bật </p>
       <div className={style.row}>
         <div className={styles.new__left}>
           <img src='https://img4.thuthuatphanmem.vn/uploads/2020/05/07/anh-pha-tra-sua-dep_062227481.jpg'/>
         </div>
         <div className={styles.new__right}>
           <div><img src='https://thuthuatnhanh.com/wp-content/uploads/2020/12/hinh-anh-tra-sua-dep-va-ngon.jpg'/></div>
           <div><img src='https://toplist.vn/images/800px/dingtea-377411.jpg'/></div>
           <div><img src='https://toquoc.mediacdn.vn/2019/11/20/anh-1-15742188589661158583681.jpg'/></div>
           <div><img src='https://alltop.vn/backend/media/images/posts/695/quan_tra_sua_ngon_va_noi_tieng_nhat_tai_Ha_Tinh-59001.jpg'/></div>
         </div>
       </div>
    </div>
    </div>
  )
}