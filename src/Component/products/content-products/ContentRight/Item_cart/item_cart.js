import React from 'react'
import styles from "../../Content_products.module.scss"
import img_glass from "../../../Images/icon-glass-tea.png"
import { useSelector } from 'react-redux';
import { HiChevronDown, HiOutlinePlusCircle, HiOutlineMinusCircle } from "react-icons/hi";
import cart from '../../../../../Redux/Reducers/cart';
export default function item_cart() {
  const data_item = useSelector(state => state.cart)
  const quantityitem = parseInt(data_item?.cart?.quantity)
  const valueSelect = data_item.cart.valueall
  const size=valueSelect?.valueSize?.slice(4)
  console.log(size)
  function showcost() {
    return (
      data_item?.cart?.product?.cost * data_item?.cart?.quantity
    )
  }
  return (
    <div className={styles.content_right}>
      <div className={styles.content_right_title}>
        <span>giỏ hàng của tôi</span>
        <span>Xóa tất cả</span>
      </div>
      <div className={styles.view_cart}>
        {data_item?.cart?.product?.length < 1 ? <div className={styles.noti_cart}>Chưa có sản phẩm nào trong giỏ hàng</div> : <div className={styles.cart_item}>
          <div className={styles.info_item}>
            <div>{data_item?.cart?.product?.name} </div>
            <div>{valueSelect?.valueSugar ?valueSelect.valueSugar : ""}
            {valueSelect?.valueIce ? "," + valueSelect.valueIce : ""}{valueSelect?.value ? "," + valueSelect.value : ""}
            </div>
            <div>{data_item?.cart?.product?.cost} x {quantityitem} = {showcost()}đ</div>
          </div>
          <div className={styles.quantity_item}>
            <i><HiOutlineMinusCircle /></i>
            <span>1</span>
            <i><HiOutlinePlusCircle /></i>
          </div>
        </div>
        }
      </div>
      <div className={styles.all_cost}>
        <div className={styles.all_cost_content}>
          <div className={styles.img_glass}>
            <img src={img_glass} alt="" />
          </div>
          <span id={styles.x}>x</span>
          <span>1</span>
          <span>=</span>
          <span>38000đ</span>
        </div>
        <button>Thanh toán</button>
      </div>
    </div>
  )
}
