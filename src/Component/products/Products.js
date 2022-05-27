import React, { useState } from 'react'
import styles from "./Products.module.scss"
import Logo from "./Images/logo_header.jpg"
import { IoSearchSharp } from "react-icons/io5";
import Product_content from './content-products/Product_content';
import { Link } from 'react-router-dom';
export default function Products({ data }) {
  return (
    <div className={styles.wrapper__products}>
      <Product_content data={data} />
    </div>
  )
}
