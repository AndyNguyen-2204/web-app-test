import React from 'react'
import { HiChevronDown, HiOutlinePlusCircle, HiOutlineMinusCircle } from "react-icons/hi";
import styles from "../../../Content_products.module.scss"
import { useDispatch } from 'react-redux';
import { click_on_data } from '../../../../../../Redux/Reducers/view_item';
export default function Product_SCD({ product, setIsModalVisible}) {
  const dispatch = useDispatch();
  const view_item = (product) => {
    setIsModalVisible(true)
    dispatch(click_on_data(product))
  }
  return (
    <div onClick={() => view_item(product)}  className={styles.category_item}>
      <div className={styles.img}>
        <img src={product.url} alt="" />
      </div>
      <div className={styles.item_title}>
        {product.name}
      </div>
      <div className={styles.cost}>
        <span>{product.cost}</span>
        <i ><HiOutlinePlusCircle /></i>
      </div>
    </div>
  )
}

