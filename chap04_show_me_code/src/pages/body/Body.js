import React from 'react'
import './body.css'
import { Restaurant_Data } from '../../raw_data/Restaurant_Data'

//config driven UI ( which is build by Backend developer)

const swiggy_url = "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"

console.log(Restaurant_Data)
const RestrauntCart = ({ name, cuisines, lastMileTravelString, cloudinaryImageId }) => {
    return (
        < div className='card' >
            <div className="image">
                <img src={swiggy_url + cloudinaryImageId
                } alt="" />

            </div>
            <div className="item-detail">
                <h4>{name}</h4>
                <h5>{cuisines.join(", ")}</h5>
            </div>
            <div className="item-rating">
                <h4>{lastMileTravelString
                }</h4>
            </div>
        </div >)
}


function Body() {
    return (
        <div className='Body_main'>
            {
                Restaurant_Data?.map((restaurant) => <RestrauntCart key={restaurant?.data?.id} {...restaurant.data} />)
            }



        </div>
    )
}

export default Body