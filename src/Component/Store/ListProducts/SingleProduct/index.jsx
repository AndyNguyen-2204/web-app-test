import React, { useEffect, useState } from 'react'
import { AiOutlineShopping, AiOutlineUser, AiOutlineSearch, AiOutlineHeart } from "react-icons/ai";
import { BsBasket3 } from "react-icons/bs";
import { TbZoomIn } from "react-icons/tb";
import ColorProducts from '../../../ColorProducts/index';
import { BiStar } from 'react-icons/bi';
export default function Index({ e, index, numberPage }) {
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
    const [imgColor, setImgColor] = useState(0)
    useEffect(() => {
        setImgColor(0)
    }, [numberPage])
    return (
        <div key={index} className='single__product'>
            <div className='single__product__img'>
                {
                    <img src={e ? e.url[imgColor].src : ""} alt="" />
                }
            </div>
            <div className='single__product__content'>
                <h1>{e.name}</h1>
                <span> {showrating(e.rating)}</span>
                <div className='list__color__product'>
                    {e.url.map((el, index) =>
                        <i key={index} onClick={() => {
                            setImgColor(index)
                        }}>
                            <ColorProducts color={el.color} index={index} imgColor={imgColor} />
                        </i>
                    )}
                </div>
                <span>{e.cost}$</span>
            </div>
            <div className='single__product__content__bottom'>
                <i><AiOutlineHeart /></i>| <i><TbZoomIn /></i> | <i><BsBasket3 /></i>
            </div>
        </div>
    )
}

