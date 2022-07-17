import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { DATA_COLOR_TOP_STORE } from './data_color_topStore';
import SingleColor from "./SingleColor/index"
export default function Topstore() {
    const [showCategory, setShowCategory] = useState(false)
    const [showPrice, setShowPrice] = useState(false)
    const [showColor, setShowColor] = useState(false)
    const dataProducts = useSelector((data) => data.data);
    let hihi = []
    return (
        <div className='wrap__store__top'>
            <div className='wrap__store__top__left'>
                <div id="category">
                    <button onClick={() => {
                        setShowCategory(!showCategory)
                        setShowPrice(false)
                        setShowColor(false)
                    }}>Category</button>
                    {showCategory === true ? <div className='wap__category__list'>
                        <p >- Chair</p>
                        <p>- Vase</p>
                        <p>- Brands</p>
                    </div> : ""}
                </div>
                <div id="price">
                    <button onClick={() => {
                        setShowCategory(false)
                        setShowPrice(!showPrice)
                        setShowColor(false)
                    }}>Price</button>
                    {showPrice === true ? <div className='wrap__price__list'>
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
                    </div> : ""}
                </div>
                <div id="color">
                    <button onClick={() => {
                        setShowCategory(false)
                        setShowPrice(false)
                        setShowColor(!showColor)
                    }}>Color</button>
                    {showColor == true ? <div className='wrap__color__list'>
                        {DATA_COLOR_TOP_STORE.map((e, index) =>
                            <SingleColor key={index} color={e.color} name={e.name} />
                        )}
                    </div> : ""}
                </div>
            </div>
        </div>
    )
}
