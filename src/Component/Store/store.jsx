import React from 'react'
import BreadCrumb from "../Breadcrumb/index"
import Topstore from './TopStore/topstore'
import ListProducts from './ListProducts/listProducts'
export default function Store() {
    return (
        <>
            <BreadCrumb />
            <div className='wrap__store'>
                <div className='container'>
                    <Topstore />
                    <ListProducts />
                </div>
            </div>
        </>
    )
}
