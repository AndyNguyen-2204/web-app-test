import React from 'react'
import styles from "../Content_products.module.scss"
import img_glass from "../../Images/icon-glass-tea.png"
import { HiChevronDown, HiOutlinePlusCircle, HiOutlineMinusCircle } from "react-icons/hi";
export default function Content_right() {
  return (
    <>
      <div className={styles.content_right}>
            <div className={styles.content_right_title}>
              <span>giỏ hàng của tôi</span>
              <span>Xóa tất cả</span>
            </div>
            <div className={styles.view_cart}>
              <div className={styles.cart_item}>
                <div className={styles.info_item}>
                  <div>Trà đào Bưởi Hồng</div>
                  <div>30% đá,70% đường</div>
                  <div>38000 x 1=38000đ</div>
                </div>
                <div className={styles.quantity_item}>
                  <i><HiOutlineMinusCircle /></i>
                  <span>1</span>
                  <i><HiOutlinePlusCircle /></i>
                </div>
              </div>
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
          
    </>
  )
}
