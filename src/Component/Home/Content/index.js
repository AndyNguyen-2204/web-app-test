import React, { useEffect } from 'react'
import Banner from "./Banner/Banner"
import List_products from './List_Products/List_products'
import styles from "./Content.module.scss"
import style from "../../../SCSS/styles.module.scss"
import New from './New/New'
import Brands from './Brands/Brands'
import AOS from 'aos';
import 'aos/dist/aos.css';
function Index() {
  useEffect(() => {
    AOS.init({

    })
  }, [])
  return (
    <div className={styles.wrap__content}>
      <div className={styles.wrapper__content__inner}>
        <div className={style.container}>
          <Banner />
        </div>
        <List_products />
        <New />
        <Brands />
      </div>
    </div>
  )
}
export default Index
