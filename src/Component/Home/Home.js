import React from 'react'
import Banner from './Banner/Banner'
import ListProducts from './ListProducts/listProducts'
import SubBanner from './SubBanner/SubBanner'
import TopRating from './TopRating/TopRating'
import TopFooter from "./TopFooter/topFooter"
export default function Home() {
    return (
        <>
            <Banner />
            <ListProducts />
            <SubBanner />
            <TopRating />
            <TopFooter />
        </>
    )
}
