import React from 'react'

export default function Index({ name, color }) {
    const divStyle = {
        height: "13px",
        width: "13px",
        background: `${color}`,
        padding: "0"
    }
    return (
        <div>
            <div>
                <div style={divStyle}></div>
                <i>{name}</i>
            </div>
            <span>12</span>
        </div>
    )
}
