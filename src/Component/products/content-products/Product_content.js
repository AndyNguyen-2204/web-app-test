import React from 'react'
import styles from "./Content_products.module.scss"
import style from "../../../SCSS/styles.module.scss"
import { useState } from 'react';
import { HiChevronDown } from "react-icons/hi";
import Category_nb from './ContentMid/CategoryNB/category_nb';
import Category_ts from './ContentMid/CategoryTS/category_ts';
import Category_fft from './ContentMid/CategoryFFT/category_fft';
import Category_mcc from './ContentMid/CategoryMCC/category_mcc';
import Category_scd from './ContentMid/CategorySCD/category_scd';
import ContentLeft from "./ContentLeft/content_left"
import Content_right from './ContentRight/content_right';
import Modal_item from './Modal/Modal';
export default function Product_content({ data, data_search }) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [onHide1, setOnHide1] = useState(false)
  const [onHide2, setOnHide2] = useState(false)
  const [onHide3, setOnHide3] = useState(false)
  const [onHide4, setOnHide4] = useState(false)
  const [onHide5, setOnHide5] = useState(false)
  function OnchangeHide1() {
    if (onHide1 === true) {
      setOnHide1(false)
    } else {
      setOnHide1(true)
    }
  }
  function OnchangeHide2() {
    if (onHide2 === true) {
      setOnHide2(false)
    } else {
      setOnHide2(true)
    }
  }
  function OnchangeHide3() {
    if (onHide3 === true) {
      setOnHide3(false)
    } else {
      setOnHide3(true)
    }
  }
  function OnchangeHide4() {
    if (onHide4 === true) {
      setOnHide4(false)
    } else {
      setOnHide4(true)
    }
  }
  function OnchangeHide5() {
    if (onHide5 === true) {
      setOnHide5(false)
    } else {
      setOnHide5(true)
    }
  }
  return (
    <div className={styles.wrapper_content__products}>
      <div className={style.container}>
        <div className={styles.content__products__inner}>
          <ContentLeft data={data} />
          <div className={styles.content_mid}>
            <div className={styles.category}>
              <div className={styles.category_title}>
                <span>Món nổi bật</span>
                <i onClick={OnchangeHide1}><HiChevronDown /></i>
              </div>
              <div className={onHide1 === false ? styles.category_item_list : styles.hide}>
                <Category_nb data={data} setIsModalVisible={setIsModalVisible} data_search={data_search} />
              </div>
            </div>
            <div className={styles.category}>
              <div className={styles.category_title}>
                <span>Trà Sữa</span>
                <i onClick={OnchangeHide2}><HiChevronDown /></i>
              </div>
              <div className={onHide2 === false ? styles.category_item_list : styles.hide}>
                <Category_ts data={data} setIsModalVisible={setIsModalVisible} data_search={data_search} />
              </div>
            </div>
            <div className={styles.category}>
              <div className={styles.category_title}>
                <span>Fresh Fruit Teat</span>
                <i onClick={OnchangeHide3}><HiChevronDown /></i>
              </div>
              <div className={onHide3 === false ? styles.category_item_list : styles.hide}>
                <Category_fft data={data} setIsModalVisible={setIsModalVisible} data_search={data_search} />
              </div>
            </div>
            <div className={styles.category}>
              <div className={styles.category_title}>
                <span>Macchiato Cream Cheese</span>
                <i onClick={OnchangeHide4}><HiChevronDown /></i>
              </div>
              <div className={onHide4 === false ? styles.category_item_list : styles.hide}>
                <Category_mcc data={data} setIsModalVisible={setIsModalVisible} data_search={data_search} />
              </div>
            </div>
            <div className={styles.category}>
              <div className={styles.category_title}>
                <span>Sữa Chua Dẻo</span>
                <i onClick={OnchangeHide5}><HiChevronDown /></i>
              </div>
              <div className={onHide5 === false ? styles.category_item_list : styles.hide}>
                <Category_scd data={data} setIsModalVisible={setIsModalVisible} data_search={data_search} />
              </div>
            </div>
          </div>
          <Content_right />
          <Modal_item isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} />
        </div>
      </div>
    </div>
  )
}
