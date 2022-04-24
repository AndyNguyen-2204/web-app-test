import React from 'react'
import style from "../../SCSS/styles.module.scss"
import styles from "./Products.module.scss"
import Logo from "./Images/logo_header.jpg"
import { IoSearchSharp } from "react-icons/io5";
import Product_content from './content-products/Product_content';
import { Link } from 'react-router-dom';
export default function Products({data}) {
  return (
    <div className={styles.wrapper__products}>
      <div className={styles.header__products}>
       <Link to="/">
       <div className={styles.logo}>
          <img src={Logo} alt=""/>
        </div>
       </Link>
        <div className={styles.input__search}>
          <input type="text" placeholder='Tìm kiếm sản phẩm'></input>
          <i><IoSearchSharp/></i>
        </div>
        <div className={styles.login}> Đăng Nhập</div>
      </div>
        <Product_content data={data}/>
    </div>
  )
}
