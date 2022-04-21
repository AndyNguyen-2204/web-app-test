import React,{useState} from 'react'
import { HiChevronDown, HiOutlinePlusCircle, HiOutlineMinusCircle } from "react-icons/hi";
import styles from "../../../Content_products.module.scss"
import { useDispatch } from 'react-redux';
import { minus_quantity, plus_quantity } from '../../../../../../Redux/Reducers/cart';
export default function Item({data}) {
    const quantityitem = parseInt(data?.quantity)
    const dispatch=useDispatch();
    function showcost() {  
        let result = null;
        const cost = data?.valueall?.value
        result = parseInt(data?.product?.cost *data?.quantity)
        if(cost.length>0){
         if(cost==="thêm trân châu sương mai"){
             result += 9000
         }
         if(cost==="thêm hạt dẻ"){
             result +=8000
         }
         if(cost==="thêm trân châu baby"){
            result +=8000
        }
        if(cost==="thêm creamcake"){
            result +=9000
        }
        if(cost==="thêm trân châu hoàng kim"){
            result +=8000
        }
        }
        return (
            result
        )
      }
  return (
    <div className={styles.cart_item}>
    <div className={styles.info_item}>
      <div> {data?.product?.name}</div>
      <div>{data?.valueall?.valueSugar ?data.valueall.valueSugar:"" }
      {data?.valueall?.valueIce ? "," + data.valueall.valueIce : ""}{data.valueall?.value ? "," + data.valueall.value : ""}
      </div>
      <div>{data?.product?.cost} x {quantityitem} = {showcost()}đ</div>
    </div>
    <div className={styles.quantity_item}>
      <i onClick={e=>dispatch(minus_quantity(data))} ><HiOutlineMinusCircle /></i>
      <span>{quantityitem}</span>
      <i onClick={e=>dispatch(plus_quantity(data))}><HiOutlinePlusCircle /></i>
    </div>
  </div>
  )
}
