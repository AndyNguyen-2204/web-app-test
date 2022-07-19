import React from 'react'
import "./styles.scss"
export default function ({ color, index, imgColor }) {
    const divstyles = {
        height: "25px",
        width: "25px",
        background: `${color}`,

    }
    return (
        <div className={index === imgColor ? "color__product atv" : "color__product"} style={divstyles}></div>
    )
}
