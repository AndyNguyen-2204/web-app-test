import React from 'react'

import { FaEnvelope } from "react-icons/fa";
export default function topFooter() {
    return (
        <div className='wrap__top__footer'>
            <div className='container'>
                <div className='wrap__top__footer__content'>
                    <h1>
                        SING UP FOR THE NEWSLETTER
                    </h1>
                    <span>Subscribe for the latest stories and promotions</span>
                </div>
                <div className='wrap__top__footer__input'>
                    <input type="text" placeholder='Enter your e-mail address' />
                    <button><i><FaEnvelope /></i></button>
                </div>
            </div>
        </div>
    )
}
