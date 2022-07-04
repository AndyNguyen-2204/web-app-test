import React from 'react'
import { BiStar } from "react-icons/bi";
import test from "../../../../Assess/Images/img_products.png"
import { AiOutlineShopping, AiOutlineUser, AiOutlineSearch, AiOutlineHeart } from "react-icons/ai";
import { BsBasket3 } from "react-icons/bs";
export default function product({ rating, cost, title, img }) {
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
        <div className='wrap__product'>
            <div className='wrap__product__img'>
                <img src={img} alt='' />
                <div className='add__to__cart'>
                    <span><BsBasket3 /></span>
                    <span>|</span>
                    <span><AiOutlineHeart /></span>
                </div>
            </div>
            <div className='wrap__product__content'>
                <h1>{title}</h1>
                <li>
                    {showrating(rating)}
                </li>
                <span>{cost}$</span>
            </div>
        </div>
    )
}
