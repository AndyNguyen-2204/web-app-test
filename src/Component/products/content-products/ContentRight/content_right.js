import React from 'react'
import styles from "../Content_products.module.scss"
import img_glass from "../../Images/icon-glass-tea.png"
import { useSelector } from 'react-redux';
import { HiChevronDown, HiOutlinePlusCircle, HiOutlineMinusCircle } from "react-icons/hi";
import cart from '../../../../Redux/Reducers/cart';
import Item_cart from './Item_cart/item_cart';
export default function Content_right() {
  return (
    <>
     <Item_cart/>
    </>
  )
}
