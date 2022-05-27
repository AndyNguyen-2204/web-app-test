import React, { useEffect, useState } from 'react'
import styles from "./Header.module.scss"
import { BsFillBasket2Fill } from "react-icons/bs";
import { BsPersonFill, BsListUl, BsXLg } from "react-icons/bs";
import Logo from "../../../../Assess/Images/logo.jpg"
import { Link, useLocation } from 'react-router-dom';
import { IoSearchSharp } from "react-icons/io5";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useDispatch } from 'react-redux';
import { search_item } from '../../../../Redux/Reducers/view_item';
export default function Header() {
    useEffect(() => {
        AOS.init({

        })
    }, [])
    const [hideMenu, setHideMenu] = useState(true)
    const location = useLocation()
    const [inputSearch, setInputSearch] = useState(true)
    const [valueSearch, setValueSearch] = useState("")
    const dispatch = useDispatch()
    const dispatchValue = (e) => {
        setValueSearch(e.target.value)
        dispatch(search_item(valueSearch))
    }
    const statusIcon = () => {
        if (inputSearch === true) {
            setInputSearch(false)
        } else {
            setInputSearch(true)
        }
    }
    return (
        <>
            {
                location.pathname === "/sign_in" || location.pathname === "/sign_up" ? "" :
                    <div className={styles.header}>
                        <div className={styles.navigation}>
                            <div className={styles.logo}>
                                <img src={Logo} />
                            </div>
                            <ul className={styles.content_left}>
                                <li><Link to="/">Trang Chủ</Link></li>
                                <li>
                                    <Link to="/recommend">Giới thiệu</Link>
                                </li>
                                <li>
                                    <Link to="/products">Sản phẩm</Link>
                                </li>

                                <li>
                                    <Link to="order">Dịch vụ</Link>
                                </li>
                                <li>Tin tức</li>
                                <li>Liên Hệ</li>
                            </ul>
                            <div className={styles.icon}>
                                <Link to="/products"><i><BsFillBasket2Fill /></i></Link>
                                <Link to="/sign_in"><i><BsPersonFill /></i></Link>
                                {
                                    location.pathname === "/products" && <i onClick={() => statusIcon()}><IoSearchSharp /></i>
                                }
                            </div>
                            {
                                inputSearch === false && location.pathname === "/products" ? <div className={styles.input__search}>
                                    <input onChange={(e) => dispatchValue(e)} type="text" placeholder='Tìm kiếm sản phẩm' value={valueSearch}></input>
                                    <i><IoSearchSharp /></i>
                                </div> : ""
                            }
                            <div className={styles.menu_mobile}>
                                <div onClick={() => setHideMenu(false)} className={styles.icon_toggle_menu}><BsListUl /></div>
                                {
                                    hideMenu === false ? <div className={styles.menu_mobile_inner}>
                                        <div className={styles.logo_btnclose}>
                                            <img src={Logo} alt="logo" />
                                            <div onClick={() => setHideMenu(true)} className={styles.btn_close}><BsXLg /></div>
                                        </div>
                                        <div className={styles.list_menu}>
                                            <ul>
                                                <li><Link to="/">Trang Chủ</Link></li>
                                                <li><Link to="/recommend">Giới thiệu</Link></li>
                                                <li><Link to="/products">Sản phẩm</Link></li>
                                                <li><Link to="order">Dịch vụ</Link></li>
                                                <li>tin tức </li>
                                                <li>liên hệ</li>
                                                <li><Link to="/products">Giỏ hàng </Link></li>
                                                <li><Link to="/sign_in">Đăng nhập</Link></li>
                                            </ul>
                                        </div>
                                    </div> : ""
                                }
                            </div>
                        </div>
                    </div>

            }
        </>
    )
}
