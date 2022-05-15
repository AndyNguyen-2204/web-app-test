import React, { useState } from 'react'
import styles from "./Products.module.scss"
import Logo from "./Images/logo_header.jpg"
import { IoSearchSharp } from "react-icons/io5";
import Product_content from './content-products/Product_content';
import { Link } from 'react-router-dom';
export default function Products({ data }) {
  const [valueSearch, setValueSearch] = useState("")
  const data_value = data ? data.filter(item => {
    return item.name.toLowerCase().includes(valueSearch.toLowerCase())
  }) : ""
  console.log(data_value);
  return (
    <div className={styles.wrapper__products}>
      <div className={styles.header__products}>
        <Link id={styles.logo} to="/">
          <div className={styles.logo}>
            <img src={Logo} alt="" />
          </div>
        </Link>
        <div className={styles.input__search}>
          <input onChange={(e) => setValueSearch(e.target.value)} type="text" placeholder='Tìm kiếm sản phẩm' value={valueSearch}></input>
          <i><IoSearchSharp /></i>
        </div>
        <Link to="/sign_in">
          <div className={styles.login}> Đăng Nhập</div>
        </Link>
      </div>
      <Product_content data={data} data_search={data_value} />
    </div>
  )
}
