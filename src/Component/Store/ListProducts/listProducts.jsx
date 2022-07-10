import React from 'react'
import test from "../../../Assess/Images/chair.png"
import { BiStar } from 'react-icons/bi';
import { TbZoomIn } from "react-icons/tb";
import { AiOutlineShopping, AiOutlineUser, AiOutlineSearch, AiOutlineHeart } from "react-icons/ai";
import { BsBasket3 } from "react-icons/bs";
export default function ListProducts() {
    const showrating = (rating) => {
        const result = [];
        for (var i = 1; i <= rating; i++) {
            result.push(<i className='star_yl'><BiStar /></i>)
        }
        for (var j = 1; j <= (5 - rating); j++) {
            result.push(<i className='star_gr'><BiStar /></i>)
        }
        return result;
    }
    return (
        <div className='wrap__list__products'>
            <div className='single__product'>
                <div className='single__product__img'>
                    <img src={test} alt="" />
                </div>
                <div className='single__product__content'>
                    <h1>Velvet Covvered</h1>
                    {/* <span> {showrating(e.rating)}</span> */}
                    {/* <span>{ showcolor()}</span> */}
                    <span>39$</span>
                </div>
                <div className='single__product__content__bottom'>
                    <i><AiOutlineHeart /></i>| <i><TbZoomIn /></i> | <i><BsBasket3 /></i>
                </div>
            </div>
            <div className='single__product'>
                <div className='single__product__img'>
                    <img src={test} alt="" />
                </div>
                <div className='single__product__content'>
                    <h1>Velvet Covvered</h1>
                    {/* <span> {showrating(e.rating)}</span> */}
                    {/* <span>{ showcolor()}</span> */}
                    <span>39$</span>
                </div>
                <div className='single__product__content__bottom'>
                    <i><AiOutlineHeart /></i>| <i><TbZoomIn /></i> | <i><BsBasket3 /></i>
                </div>
            </div>
            <div className='single__product'>
                <div className='single__product__img'>
                    <img src={test} alt="" />
                </div>
                <div className='single__product__content'>
                    <h1>Velvet Covvered</h1>
                    {/* <span> {showrating(e.rating)}</span> */}
                    {/* <span>{ showcolor()}</span> */}
                    <span>39$</span>
                </div>
                <div className='single__product__content__bottom'>
                    <i><AiOutlineHeart /></i>| <i><TbZoomIn /></i> | <i><BsBasket3 /></i>
                </div>
            </div>
            <div className='single__product'>
                <div className='single__product__img'>
                    <img src={test} alt="" />
                </div>
                <div className='single__product__content'>
                    <h1>Velvet Covvered</h1>
                    {/* <span> {showrating(e.rating)}</span> */}
                    {/* <span>{ showcolor()}</span> */}
                    <span>39$</span>
                </div>
                <div className='single__product__content__bottom'>
                    <i><AiOutlineHeart /></i>| <i><TbZoomIn /></i> | <i><BsBasket3 /></i>
                </div>
            </div>
        </div>
    )
}
