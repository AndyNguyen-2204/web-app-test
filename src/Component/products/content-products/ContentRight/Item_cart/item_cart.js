import React,{useEffect,useState} from 'react'
import styles from "../../Content_products.module.scss"
import img_glass from "../../../Images/icon-glass-tea.png"
import { useSelector } from 'react-redux';
import { HiChevronDown, HiOutlinePlusCircle, HiOutlineMinusCircle } from "react-icons/hi";
import cart, { clear_cart } from '../../../../../Redux/Reducers/cart';
import { useDispatch } from 'react-redux';
import Item from './Item/Item';
export default function Item_cart() {
  const data_item = useSelector(state => state.cart)
  const dispatch=useDispatch()
  function total_money(){
    let total=0
    if((data_item.cart).length>0){
      for(var i=0;i<(data_item.cart).length;i++){
        total+=data_item.cart[i].product.cost*data_item.cart[i].quantity
      }
    }
    return total
  }
  function Showall(){
    let sum=0
    if(data_item.cart.length>0){
      (data_item.cart).map(e=>{
        sum+=e.quantity
      })
    }
    return sum
  }
  return (
    <div className={styles.content_right}>
      <div className={styles.content_right_title}>
        <span>giỏ hàng của tôi</span>
        <span onClick={()=>dispatch(clear_cart())}>Xóa tất cả</span>
      </div>
      <div className={styles.view_cart}>
     {
         (data_item.cart).length>0?data_item.cart.map((item,index)=>
         <Item data={item} key={index}/>
       ):<div className={styles.noti_cart}>Không có sản phẩm nào trong giỏ hàng</div>
     }
      </div>
      <div className={styles.all_cost}>
        <div className={styles.all_cost_content}>
          <div className={styles.img_glass}>
            <img src={img_glass} alt="" />
          </div>
          <span id={styles.x}>x</span>
          <span>{Showall()}</span>
          <span>=</span>
          <span>{total_money()}đ</span>
        </div>
        <button>Thanh toán</button>
      </div>
    </div>
  )
}
