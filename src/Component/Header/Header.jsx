import React, { useEffect, useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Logo from '../../Assess/Svg/logo';
import { data_nav_header, data_header_bottom } from './dataNav';
import { AiOutlineShopping, AiOutlineUser, AiOutlineSearch, AiOutlineHeart } from "react-icons/ai";
import { BsBasket3 } from "react-icons/bs";
export default function Header() {
    useEffect(() => {
        AOS.init({

        })
    }, [])
    return (
        <>
            <div className='wrap__header'>
                <div className='container'>
                    <div className='header__content__top'>
                        <div className='header__content__top__logo'>
                            <Logo />
                        </div>
                        <div className='header__content__top__icon'>
                            <span><AiOutlineSearch /></span>
                            <span><AiOutlineUser /></span>
                            <span><BsBasket3 /></span>
                            <span><AiOutlineHeart /></span>
                        </div>
                    </div>
                    <div className='header__content__nav'>
                        <hr />
                        <ul>
                            {data_nav_header.map((e, index) =>
                                <a key={index} >{e.name}</a>
                            )}
                        </ul>
                        <hr />
                    </div>
                    <div className='header__content__bottom'>
                        {data_header_bottom.map((e, index) =>
                            <div className='header__content__bottom__icon' key={index}>
                                <div>{e.icon}</div>
                                <span>{e.title}</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}
