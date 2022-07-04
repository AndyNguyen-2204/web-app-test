import React from 'react'
import img_banner from "../../../Assess/Images/img_banner.png"
import Chair from "../../../Assess/Images/chair.png"
import Vase from "../../../Assess/Images/vase.png"
export default function Banner() {
    return (
        <>
            <div className='wrap__banner__big'>
                <div className='container'>
                    <div className='banner__inner'>
                        <div className='banner__inner__img'>
                            <img src={img_banner} alt='' />
                        </div>
                        <div className='banner__inner__content'>
                            <h1>HOT DEALS THIS WEEK</h1>
                            <p>SALE UP 50% <br /> MODERN FURNITURE</p>
                            <button>view now</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='wrap__banner__small'>
                <div className='container'>
                    <div className='wrap__banner__small__inner'>
                        <div className='wrap__banner__small__inner__img'>
                            <img src={Chair} alt="" />
                        </div>
                        <div className='wrap__banner__small__inner__content'>
                            <p>INY VINTAGE CHAIR</p>
                            <button>VIEW DETAILS</button>
                        </div>
                    </div>
                    <div className='wrap__banner__small__inner'>
                        <div className='wrap__banner__small__inner__img'>
                            <img src={Vase} alt="" />
                        </div>
                        <div className='wrap__banner__small__inner__content'>
                            <p>LARGE TERRACOTA VASE</p>
                            <button>VIEW DETAILS</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
