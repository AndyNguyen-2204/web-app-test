import React from 'react'
import Header from './Header/Header'
import style from "../../../SCSS/styles.module.scss"
import Carousel from 'react-elastic-carousel';
import styles from "./slide.module.scss"
export default function Slide() {
  const Items = [
    { id: 1,  url: "https://tocotocotea.com/wp-content/uploads/2021/12/slideshow1_2.jpg" },
    { id: 2,  url: "https://tocotocotea.com/wp-content/uploads/2021/12/slideshow1_1.jpg" },
    { id: 3,  url: "https://tocotocotea.com/wp-content/uploads/2021/12/about-banner-main.png" },
  ]
  return (
    <div className={style.slide}>
      <Carousel>
        {Items.map(item =>
           <div className={styles.wrap__img__content} key={item.id}>
             <div className={styles.wrap__img}>
             <img src={item.url} alt=""/>
             </div>
             <div className={style.wrap__container}>
          <div className={style.container}>
            <div className={styles.wrap__header__content}>
            <Header />
            <div className={styles.wrap__content}>
               <h1>Tuna Tea</h1>
               <h2>Đậm vị thiên nhiên <br/>  Trọn vị hạnh phúc </h2>
               <p>
                 Với sứ mệnh mang tới niềm vui và hạnh phúc, TocoToco hy vọng sẽ tạo nên <br/>  một nét văn hóa giải trí bên cạnh ly trà sữa Ngon – sạch – tươi. </p>
             </div>
            </div>
          </div>
          <div>
          </div>
        </div>
            
           </div>
           )}

      </Carousel>
    </div>
  )
}
