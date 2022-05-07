import React,{useEffect} from 'react'
import Header from "../Header_page/Header_page"
import styles from "./Order.module.scss"
import Footer from "../Footer/Footer"
import style from "../../SCSS/styles.module.scss"
import buoc1 from "../../Assess/Images/buoc1.jpg"
import buoc2 from "../../Assess/Images/buoc2.jpg"
import buoc3 from "../../Assess/Images/buoc3.jpg"
import buoc4 from "../../Assess/Images/buoc4.jpg"
import buoc5 from "../../Assess/Images/buoc5.jpg"
import buoc6 from "../../Assess/Images/buoc6.jpg"
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function Order() {
  const step=[
    {
      url:buoc1,
      title_vn:"Bước 1: CHỌN THỨC UỐNG",
      title_en:"STEP 1: CHOOSE YOUR DRINK"
    },
    {
      url:buoc2,
      title_vn:"Bước 2: CHỌN SIZE LY",
      title_en:"STEP 2: CHOOSE CUP SIZE"
    }, {
      url:buoc3,
      title_vn:"Bước 3: CHỌN MỨC ĐƯỜNG",
      title_en:"STEP 3: CHOOSE SUGAR LEVEL"
    }, {
      url:buoc4,
      title_vn:"ước 4: CHỌN MỨC ĐÁ",
      title_en:"STEP 4: CHOOSE ICE LEVEL"
    }, {
      url:buoc5,
      title_vn:"Bước 5: CHỌN TOPPING",
      title_en:"STEP 5: CHOOSE TOPPING"
    }, {
      url:buoc6,
      title_vn:"Bước 6: THƯỞNG THỨC NGAY",
      title_en:"STEP 6: ENJOY!"
    }
  ]
  useEffect(() => {
    AOS.init({

    })
  }, [])
  return (
    <>
      <Header />
      <div className={styles.wrap__order}>
        <div className={style.container}>
          <div className={styles.section}>
            <h1>6 bước order trà sữa</h1>
          </div>
          {step.map((e,index)=>
          <div data-aos="zoom-in" data-aos-delay="300" key={index} className={styles.wrap__step}>
          <div className={styles.title}>
          <p className={styles.title_vn}>{e.title_vn}</p>
          <p className={styles.title_en}>{e.title_en}</p>
          </div>
          <div className={styles.img}>
            <img src={e.url} alt=""/>
          </div>
     </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  )
}
