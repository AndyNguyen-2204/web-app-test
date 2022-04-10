import React, { useState } from 'react'
import "antd/dist/antd.css";
import { Modal, Button } from "antd";
import styles from "./Modal.module.scss"
import { useSelector } from 'react-redux';
import { HiChevronDown, HiOutlinePlusCircle, HiOutlineMinusCircle } from "react-icons/hi";
export default function Modal_item({isModalVisible,setIsModalVisible}) {
    const data_item=useSelector(state=>state.view_item.item)
    // const showModal = () => {
    //     setIsModalVisible(true);
    // };

    // const handleOk = () => {
    //     setIsModalVisible(false);
    // };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    return (
        <>
            {/* <Button type="primary" onClick={showModal}>
                Open Modal
            </Button> */}
            <Modal
                visible={isModalVisible}
                onCancel={handleCancel}
                width={650}
            >
                <div className={styles.wrapper__modal}>
                    <div className={styles.info_item}>
                        <div className={styles.img}>
                            <img src={data_item.url} alt='' />
                        </div>
                        <div className={styles.content}>
                            <h1>{data_item.name}</h1>
                            <span>{data_item.cost}</span>
                            <p>Chưa có thông tin</p>
                            <div className={styles.quantity_item}>
                                <i><HiOutlineMinusCircle /></i>
                                <span>1</span>
                                <i><HiOutlinePlusCircle /></i>
                                <button className={styles.all_cost}>
                                    + 56000đ
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className={styles.wrap__option}>
                        <div className={styles.category}>
                            <p>Chọn loại </p>
                            <i><HiChevronDown /></i>
                        </div>
                        <div className={styles.wrap__checkbox}>
                            <div className={styles.circlecheck}>
                                <input type="radio" className={styles.circle_1} name="selector1" checked />Lạnh
                            </div>
                        </div>
                        <div className={styles.category}>
                            <p>Chọn size </p>
                            <i><HiChevronDown /></i>
                        </div>
                        <div className={styles.wrap__checkbox}>
                            <div className={styles.circlecheck}>
                                <input type="radio" className={styles.circle_1} name="selector2" value="Size L"  />Size L
                            </div>
                            <div className={styles.circlecheck}>
                                <input type="radio"  className={styles.circle_2} name="selector2" value="Size M" />Size M
                            </div>
                        </div>
                        <div className={styles.category}>
                            <p>Chọn đường </p>
                            <i><HiChevronDown /></i>
                        </div>
                        <div className={styles.wrap__checkbox} id={styles.wrap__checkbox_3}>
                            <div className={styles.circlecheck}>
                                <input type="radio" className={styles.circle_1}  name="selector3" value="100% đường"  />100% đường
                               
                            </div>
                            <div className={styles.circlecheck}>
                                <input type="radio" className={styles.circle_2}  name="selector3" value="70% đường" />70% đường
                               
                            </div>
                            <div className={styles.circlecheck}>
                                <input type="radio"  className={styles.circle_2}  name="selector3" value="50% đường" />50% đường
                                
                            </div>
                            <div className={styles.circlecheck}>
                                <input type="radio"  className={styles.circle_2}  name="selector3" value="30% đường" />30% đường
                            
                            </div>
                            <div className={styles.circlecheck}>
                                <input type="radio"  className={styles.circle_2}  name="selector3" value="không đường" />không đường
                             
                            </div>
                        </div>
                        <div className={styles.category}>
                            <p>Chọn đá </p>
                            <i><HiChevronDown /></i>
                        </div>
                        <div className={styles.wrap__checkbox}>
                            <div className={styles.circlecheck}>
                                <input type="radio"  className={styles.circle_1} name="selector4" value="100% đá" />100% đá
                                
                            </div>
                            <div className={styles.circlecheck}>
                                <input type="radio" className={styles.circle_2} name="selector4" value="70% đá"  />70% đá
                                
                            </div>
                        </div>
                        <div className={styles.category}>
                            <p>Chọn topping </p>
                            <i><HiChevronDown /></i>
                        </div>
                        <div className={styles.wrap__checkbox} id={styles.wrap__checkbox_5}>
                            <div className={styles.circlecheck}>
                                <input type="radio"  className={styles.circle_2} name="selector5" value="thêm trân châu sương mai" />Thêm trân châu sương mai   
                                <span>+ 9000đ</span>
                            </div>
                            <div className={styles.circlecheck}>
                                <input type="radio" className={styles.circle_2} name="selector5" value="thêm hạ dẻ"  />thêm hạt dẻ
                                <span>+ 8000đ</span>
                            </div>
                            <div className={styles.circlecheck}>
                                <input type="radio" className={styles.circle_2} name="selector5" value="thêm trân châu baby"  />thêm trân châu baby
                                <span>+ 8000đ</span>
                            </div>
                            <div className={styles.circlecheck}>
                                <input type="radio" className={styles.circle_2} name="selector5" value="thêm creamcake"  />thêm creamCake
                                <span>+ 9000đ</span>
                            </div>
                            <div className={styles.circlecheck}>
                                <input type="radio" className={styles.circle_2} name="selector5" value="thêm trân châu hoàng kim"  />thêm trân châu hoàng kim
                                <span>+ 8000đ</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    )
}
