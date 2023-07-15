import React from "react";
import { IMG_URL } from '../config/Constant';
const RestrauntCart = ({ name, cuisines, lastMileTravelString, cloudinaryImageId }) => {
    return (
        < div className='card' >
            <div className="image">
                <img src={IMG_URL + cloudinaryImageId
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

export default RestrauntCart;