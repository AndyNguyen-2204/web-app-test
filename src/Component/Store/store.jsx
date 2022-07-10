import React from 'react'
import BreadCrumb from "../Breadcrumb/index"
import Topstore from './TopStore/topstore'
import ListProducts from './ListProducts/listProducts'
import Pagination from "./Pagination/index"
export default function Store() {
    return (
        <>
            <BreadCrumb />
            <div className='wrap__store'>
                <div className='container'>
                    <Topstore />
                    <ListProducts />
                    <Pagination />
                </div>
            </div>
        </>
    )
}
