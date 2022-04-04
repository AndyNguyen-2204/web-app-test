import React from 'react'
import styles from "../../Content_products.module.scss"
import { HiChevronDown, HiOutlinePlusCircle, HiOutlineMinusCircle } from "react-icons/hi";
export default function category_nb({data}) {
    function categoryTS(){
        let result=null;
        if(data.length>0){
          result = data.map(item=>{
          if(item.category==="TS"){
              return(
                <div className={styles.category_item}>
                <div className={styles.img}>
                  <img src={item.url} alt=""/>
                </div>
                <div className={styles.item_title}>
                           {item.name}
                </div>
                <div className={styles.cost}>
                  <span>{item.cost}</span>
                  <i><HiOutlinePlusCircle/></i>
                </div>
              </div>
              )
          }
          })
          return result;
        }
      }
  return (
    <>{categoryTS()}</>
  )
}