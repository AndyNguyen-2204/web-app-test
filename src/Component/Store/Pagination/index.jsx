import React, { useState } from 'react'

import { TbPlayerTrackNext, TbPlayerTrackPrev } from "react-icons/tb";
export default function Index() {
    const [numberPage, setNumberPage] = useState(0)
    const showNumberPage = () => {
        const sumPage = 5
        const arr = []
        for (var i = 1; i <= sumPage; i++) {
            arr.push(i)
        }
        return arr.map((e, index) =>
            <i className={index == numberPage ? "numberPageActive" : ""} onClick={() => setNumberPage(index)} key={index}>{e}</i>
        )
    }
    return (
        <div className='wrap__pagination'>
            <div className='wrap__pagination__list__number'>
                <span><TbPlayerTrackPrev /></span>
                <div>
                    {showNumberPage()}
                </div>
                <span><TbPlayerTrackNext /></span>
            </div>
        </div>
    )
}
