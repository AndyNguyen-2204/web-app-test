import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect, useState } from 'react'
import styles from './List.module.scss'
import style from "../../../../SCSS/styles.module.scss"
import { FiEye } from "react-icons/fi";
import { FaLink } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import NB from "./Images/NB.jpg"
import FFT from "./Images/FFT.jpg"
import TS from "./Images/TS.jpg"
import MCC from "./Images/MCC.jpg"
import SCD from "./Images/SCD.png"
import { useSelector } from 'react-redux';
import { Item } from 'rc-menu';
import { Link } from 'react-router-dom';
export default function List_products() {
  const data_all = useSelector(state => state.data)
  const [data, setData] = useState("NB");
  const category = [
    { id: 1, tittle: "Món nổi bật", number: (data_all.data)?(data_all.data).filter(e=>e.category==="NB"):"" ,url:NB,category:"NB"},
    { id: 2, tittle: "Trà Sữa",number: (data_all.data)?(data_all.data).filter(e=>e.category==="TS"):"",url:TS,category:"TS"  },
    { id: 3, tittle: "Fresh Fruit Teat", number: (data_all.data)?(data_all.data).filter(e=>e.category==="FFT"):"",url:FFT,category:"FFT"  },
    { id: 4, tittle: "Macchiato Cream Cheese", number: (data_all.data)?(data_all.data).filter(e=>e.category==="MCC"):"",url:MCC,category:"MCC"  },
    { id: 5, tittle: "Sữa Chua Dẻo", number: (data_all.data)?(data_all.data).filter(e=>e.category==="SCD"):"",url:SCD,category:"SCD"  }
  ]
  useEffect(() => {
    AOS.init({

    })
  }, [])
  function show_item() {
    let result = null;
    if ((data_all.data).length > 0) {
      result = (data_all.data).map(e => {
        if (e.category === data) {
          return(
            <div data-aos="flip-up" data-aos-delay="500" className={styles.wrap__product}>
            <div className={styles.wrap__product__inner}>
              <div className={styles.img__icon}>
                <img src={e.url}></img>
              </div>
              <div className={styles.wrap__product__content}>
                <h2>{e.name}</h2>
                <p>{e.cost}đ  </p>
                <Link to="/products">
                <div className={styles.icon}>
                  <span>Đặt hàng</span>
                  <i><IoCartOutline /></i>
                </div>
                </Link>
              </div>
            </div>
          </div>
          )
        }
      })
      return result
    }
    return result
  }
  return (
    <div className={styles.wrapper__list}>
      <div className={style.container}>
        <h1 data-aos="zoom-in" data-aos-delay="500">Menu hôm nay</h1>
        <span data-aos="zoom-in" data-aos-delay="700" className={styles.wrapper__list__title}>Xem menu hôm nay</span>
        <div className={styles.wrapper__list__tab}>
          <ul data-aos="fade-down" data-aos-delay="900">
            {
              category.map(e=>
                <li key={e.id} onClick={()=>setData(e.category)}>
              <img src={e.url} alt="" />
              <p>{e.tittle}</p>
              <span>{(e.number).length} sản phẩm</span>
            </li>
              )
            }
          </ul>
        </div>
        <div className={styles.wrap__all__products}>
          <div className={style.row}>
            {show_item()}
          </div>
        </div>
      </div>
    </div>
  )
}
