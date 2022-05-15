import React from 'react'
import styles from "./Header_page.module.scss"
import style from "../../SCSS/styles.module.scss"
import Logo from "../products/Images/logo_header.jpg"
import { Link } from 'react-router-dom'
export default function Header_page() {
  return (
    <>
     <div className={styles.header}>
              <Link to="/">
              <img src={Logo} alt=""/>
              </Link>
              <div className={styles.login}>
              <Link to="/sign_in">
                Đăng nhập
              </Link>
              </div>
           </div>
    </>
  )
}
