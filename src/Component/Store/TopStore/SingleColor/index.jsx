import React from 'react'

export default function Index({ name, color, height, width, chooseColor, index }) {
    const divStyle = {
        height: `${height}px`,
        width: `${width}px`,
        background: `${color}`,
        padding: "0"
    }
    return (
        <div>
            <div>
                <div className={index === chooseColor ? "color_active" : "color"} style={divStyle}></div>
                <i>{name}</i>
            </div>
            <span>12</span>
        </div>
    )
}
