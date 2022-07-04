import React from 'react'
import test1 from "../../../../Assess/Images/Rectangle 5.png"
import background from "../../../../Assess/Images/Rectangle 40.png"
export default function Index({ tittle, description, img }) {
    return (
        <>
            <div className='wrap__productsRecommend'>
                <div className='wrap__productsRecommend__img'>
                    <img src={img} alt='' />
                </div>
                <div className='wrap__productsRecommend__background'>
                    <img src={background} alt='' />
                </div>
                <div className='wrap__productsRecommend__content'>
                    <h1>{tittle}</h1>
                    <p>{description}</p>
                    <button>VIEW ALL</button>
                </div>
            </div>
        </>
    )
}
