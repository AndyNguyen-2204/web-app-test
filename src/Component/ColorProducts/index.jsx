import React from 'react'
import "./styles.scss"
export default function ({ color }) {
    const divstyles = {
        height: "25px",
        width: "25px",
        background: `${color}`,

    }
    return (
        <div className='color__product' style={divstyles}></div>
    )
}
