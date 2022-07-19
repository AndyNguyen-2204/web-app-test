import React from 'react'
import backGround from "../../../Assess/Images/img_subBanner.png"
export default function SubBanner() {
    return (
        <div className='wrap__subBanner'>
            <div className='wrap__subBanner__background'>
                <img src={backGround} alt='' />
            </div>
            <div className='wrap__subBanner__box'>
                <div className='wrap__subBanner__box__content'>
                    <b>BEDSHEET SETS</b>
                    <div className='wrap__subBanner__box__content__cost'>
                        <span>$50.00</span>
                        <span>$220.00</span>
                    </div>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</span>
                    <button>VIEW DETAILS</button>
                </div>
            </div>
        </div>
    )
}
