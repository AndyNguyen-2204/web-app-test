import React from 'react'
import ProductsRecommend from "./productRecommend/index"
import test1 from "../../../Assess/Images/Rectangle 5.png"
import test2 from "../../../Assess/Images/Rectangle 9.png"
import Product from './product/product'
import { DATA_PRODUCTS } from './productRecommend/data_products'
export default function ListProducts() {
  return (
    <>
      <div className='wrap__products__list'>
        <div className='container'>
          <ProductsRecommend tittle="DECOR" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." img={test1} />
          {
            DATA_PRODUCTS.map((e, index) =>
              <Product key={index} rating={e.rating} title={e.title} img={e.img} cost={e.cost} />
            )
          }
          <ProductsRecommend tittle="BOHO CHIC" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." img={test2} />
        </div>
      </div>
    </>
  )
}
