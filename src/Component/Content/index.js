import React from 'react'
import Banner from "./Banner/Banner"
import List_products from './List_Products/List_products'
import styles from "./Content.module.scss"
import style from "../../SCSS/styles.module.scss"
import New from './New/New'
 function Index() {
  return (
    <div className={styles.wrapper__content__inner}>
   <div className={style.container}>
      <Banner/>
   </div>
   <List_products/>
   <New/>
    </div>
  )
}
export default Index
