import React from 'react'
import test from "../../../Assess/Images/chair.png"
import { BiStar } from 'react-icons/bi';
import { TbZoomIn } from "react-icons/tb";
import { AiOutlineShopping, AiOutlineUser, AiOutlineSearch, AiOutlineHeart } from "react-icons/ai";
import { BsBasket3 } from "react-icons/bs";
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';
import ColorProducts from '../../ColorProducts';
import { TbPlayerTrackNext, TbPlayerTrackPrev } from "react-icons/tb";
export default function ListProducts() {
    const dataProducts = useSelector((data) => data.data);
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


    const hihi = 0
    const [imgColor, setImgColor] = useState(0)
    const [productID, setProductID] = useState(null)
    const [numberPage, setNumberPage] = useState(1)
    let perpage = 12
    const [end, setEnd] = useState(12)
    const [start, setStart] = useState(0)
    const sumPage = Math.round(dataProducts.data.length / 12)
    const [dataPage, setDataPage] = useState([])


    const showNumberPage = () => {
        const arr = []
        for (var i = 1; i <= sumPage; i++) {
            arr.push(i)
        }
        return arr.map((e, index) =>
            <i className={e === numberPage ? "numberPageActive" : ""} onClick={() => setNumberPage(e)} key={index}>{e}</i>
        )
    }
    useEffect(() => {
        const dataSlice = dataProducts.data.slice(start, end)
        setDataPage(dataSlice)
    }, [start])
    useEffect(() => {
        setStart((numberPage - 1) * perpage)
        setEnd(numberPage * perpage)
    }, [numberPage])

    return (
        <>
            <div className='wrap__list__products'>
                {dataPage.map((e, index) =>
                    <>
                        <div key={index} className='single__product'>
                            <div className='single__product__img'>
                                {
                                    e.id === productID ? <img src={e ? e.url[imgColor].src : ""} alt="" /> : <img src={e ? e.url[hihi].src : ""} alt="" />
                                }
                            </div>
                            <div className='single__product__content'>
                                <h1>{e.name}</h1>
                                <span> {showrating(e.rating)}</span>
                                <div className='list__color__product'>
                                    {e.url.map((el, index) =>
                                        <i key={index} onClick={() => {
                                            setImgColor(index)
                                            setProductID(e.id)
                                        }}>
                                            <ColorProducts color={el.color} />
                                        </i>
                                    )}
                                </div>
                                <span>{e.cost}$</span>
                            </div>
                            <div className='single__product__content__bottom'>
                                <i><AiOutlineHeart /></i>| <i><TbZoomIn /></i> | <i><BsBasket3 /></i>
                            </div>
                        </div>
                    </>
                )}
            </div>
            <div className='wrap__pagination'>
                <div className='wrap__pagination__list__number'>
                    {numberPage > 1 ? <span onClick={() => setNumberPage(numberPage - 1)}><TbPlayerTrackPrev /></span> : ""}
                    <div>
                        {showNumberPage()}
                    </div>
                    {numberPage === sumPage ? "" : <span onClick={() => setNumberPage(numberPage + 1)} ><TbPlayerTrackNext /></span>}
                </div>
            </div>
        </>
    )
}
