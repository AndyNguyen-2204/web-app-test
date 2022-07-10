import React from 'react'
import backgroundBr from "../../Assess/Images/1.jpg"
export default function index() {
    return (
        <div className='wrap__breadCrumb'>
            <div className='wrap__breadCrumb__img'>
                <img src={backgroundBr} alt="" />
            </div>
            <div className='wrap__breadCrumb__list'>
                <div className='container'>
                    <a href="/">HomePage</a>
                </div>
            </div>
        </div>
    )
}
