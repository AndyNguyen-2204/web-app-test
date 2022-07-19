import Breadcrumb from '../Breadcrumb/index'
import React, { useEffect, useState } from 'react'
import { DATA_CATEGORY_PRODUCTS_PAGE } from './DataProductsPage/datacategory'
import { DATA_COLOR_TOP_STORE } from '../Store/TopStore/data_color_topStore'
import SingleColor from '../Store/TopStore/SingleColor/index'
import { useSelector } from 'react-redux'
import SingleProduct from "../Store/ListProducts/SingleProduct/index"
import { TbPlayerTrackNext, TbPlayerTrackPrev } from "react-icons/tb";
export default function Index() {
    const [color, setColor] = useState()
    const dataProducts = useSelector((data) => data.data);
    const [numberPage, setNumberPage] = useState(1)
    let perpage = 6
    const [end, setEnd] = useState(6)
    const [start, setStart] = useState(0)
    const sumPage = Math.round(dataProducts.data.length / 6)
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
        <div className='wrap__products__page'>
            <div><Breadcrumb /></div>
            <div className='container'>
                <div className='wrap__content__left'>
                    <div className='wrap__content__left__category'>
                        <div className='wrap__content__left__category__section'>Category</div>
                        {DATA_CATEGORY_PRODUCTS_PAGE.map((e, index) =>
                            <p key={index}>- {e.name}</p>
                        )}
                    </div>
                    <div className='wrap__content__left__color'>
                        <div className='wrap__content__left__color__section'>Color</div>
                        <div className='wrap__content__left__color__list'>
                            {DATA_COLOR_TOP_STORE.map((e, index) =>
                                <b onClick={() => setColor(index)}><SingleColor name={e.name} height={20} width={20} color={e.color} index={index} chooseColor={color} /></b>
                            )}
                        </div>
                    </div>
                    <div className='wrap__content__left__price'>
                        <div className='wrap__content__left__price__section'>Price</div>
                        <div className='wrap__price__list'>
                            <div class="squaredcheck">
                                <input type="radio" value="1" class="radio" name="check" />
                                <label for="squaredcheck"><span>0$ – 40$</span></label>
                            </div>
                            <div class="squaredcheck">
                                <input type="radio" value="2" class="radio" name="check" />
                                <label for="squaredcheck"><span>40$ – 100$</span></label>
                            </div>
                            <div class="squaredcheck">
                                <input type="radio" value="3" class="radio" name="check" />
                                <label for="squaredcheck"><span>100$ – 150$</span></label>
                            </div>
                            <div class="squaredcheck">
                                <input type="radio" value="4" class="radio" name="check" />
                                <label for="squaredcheck"><span>150$ – 175$</span></label>
                            </div>
                            <div class="squaredcheck">
                                <input type="radio" value="4" class="radio" name="check" />
                                <label for="squaredcheck"><span>175$ – 250$</span></label>
                            </div>
                            <div class="squaredcheck">
                                <input type="radio" value="6" class="radio" name="check" />
                                <label for="squaredcheck"><span>250$ – 350$</span></label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='wrap__content__right'>
                    <div className='wrap__list__products'>
                        {dataPage.map((e, index) =>
                            <SingleProduct e={e} index={index} numberPage={numberPage} width={31} />
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
                </div>
            </div>
        </div>
    )
}
