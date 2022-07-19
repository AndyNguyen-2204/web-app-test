import React from 'react'
import test from "../../../Assess/Images/chair.png"
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';
import SingleProduct from "./SingleProduct/index"
import { TbPlayerTrackNext, TbPlayerTrackPrev } from "react-icons/tb";
export default function ListProducts() {
    const dataProducts = useSelector((data) => data.data);
    const [numberPage, setNumberPage] = useState(1)
    let perpage = 12
    const [end, setEnd] = useState(12)
    const [start, setStart] = useState(0)
    const sumPage = Math.round(dataProducts.data.length / 12)
    const [dataPage, setDataPage] = useState([])
    const [allProducts, setAllProducts] = useState([])
    useEffect(() => {
        if (dataProducts?.data.length > 0) {
            setAllProducts(dataProducts.data)
        }
    }, [dataProducts.data])
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
        const dataSlice = allProducts.slice(start, end)
        setDataPage(dataSlice)
    }, [allProducts, start])
    useEffect(() => {
        setStart((numberPage - 1) * perpage)
        setEnd(numberPage * perpage)
    }, [numberPage])

    return (
        <>
            <div className='wrap__list__products'>
                {dataPage.map((e, index) =>
                    <SingleProduct e={e} index={index} numberPage={numberPage} width={23} />
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
