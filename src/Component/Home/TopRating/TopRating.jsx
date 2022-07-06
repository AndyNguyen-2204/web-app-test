import React from 'react'
import { BiStar } from 'react-icons/bi';
import test from "../../../Assess/Images/Rectangle 26.png"
import { DATA_TOP_RATING } from './fake_data';
export default function TopRating() {
    const showrating = (rating) => {
        const result = [];
        for (var i = 1; i <= rating; i++) {
            result.push(<i className='star_yl'><BiStar /></i>)
        }
        for (var j = 1; j <= (5 - rating); j++) {
            result.push(<i className='star_gr'><BiStar /></i>)
        }
        return result;
    }
    return (
        <div className="wrap__top__rating">
            <div className='container'>
                <h1>Top rating</h1>
                <div className='list__top__rating'>
                    {DATA_TOP_RATING.map((e, index) =>
                        <div className='product_top_rating'>
                            <div className='product_top_rating__img'>
                                <img src={e.img} alt="" />
                            </div>
                            <div className='product_top_rating__content'>
                                <p>{e.name}</p>
                                <span>
                                    {showrating(e.rating)}
                                </span>
                                <span>{e.cost}$</span>
                            </div>
                        </div>
                    )}

                </div>
                <div className='button_load_more'>
                    <button>load more products</button>
                </div>
            </div>
        </div>
    )
}
