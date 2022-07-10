import React, { useState } from 'react'

export default function Topstore() {
    const [showCategory, setShowCategory] = useState(false)
    const [showPrice, setShowPrice] = useState(false)
    const [showColor, setShowColor] = useState(false)
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
                        <p>- Accessories</p>
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
                        <div className='id1'>
                            <div>
                                <div></div>
                                <span>LightSalmon</span>
                            </div>
                            <span>12</span>
                        </div>
                        <div className='id2'>
                            <div>
                                <div></div>
                                <span>Dark Salmon</span>
                            </div>
                            <span>20</span>
                        </div>
                        <div className='id3'>
                            <div>
                                <div></div>
                                <span>Tomato</span>
                            </div>
                            <span>59</span>
                        </div>
                        <div className='id4'>
                            <div><div></div>
                                <span>Deep Sky Blue</span></div>
                            <span>45</span>
                        </div>
                        <div className='id5'>
                            <div> <div></div>
                                <span>Electric Purple</span></div>
                            <span>78</span>
                        </div>
                        <div className='id6'>
                            <div><div></div>
                                <span>Atlantis</span></div>
                            <span>10</span>
                        </div>
                        <div className='id7'>
                            <div><div></div>
                                <span>Deep Lilac</span></div>
                            <span>15</span>
                        </div>
                    </div> : ""}
                </div>
            </div>
        </div>
    )
}
