import React,{useState} from 'react'
import styles from "../../Content_products.module.scss"
import { useDispatch } from 'react-redux';
import { HiChevronDown, HiOutlinePlusCircle, HiOutlineMinusCircle } from "react-icons/hi";
import { click_on_data } from '../../../../../Redux/Reducers/view_item';
import Product_item from "./Product_SCD/product_SCD"
export default function category_SCD({data,setIsModalVisible}) {
  const dispatch=useDispatch
  // const [count,setCount]=useState([])
    function categorySCD(){
        let result=null;
        if(data.length>0){
            result=data.map( (item,index)=>{
            if(item.category==="SCD"){
              return(
               <Product_item key={index} product={item} setIsModalVisible={setIsModalVisible}/>
              )
            }
            })
            return result
        }
      }
  return (
    <>{categorySCD()}</>
  )
}
