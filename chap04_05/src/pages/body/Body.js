import React from 'react'
import './body.css'
import { Restaurant_Data } from '../../config/Constant';
import RestrauntCart from '../../component/RestrauntCart';

//config driven UI ( which is build by Backend developer)

const swiggy_url = "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"

// console.log(Restaurant_Data)




function Body() {
    return (
        <div className='Body_main'>
            {
                Restaurant_Data?.map((restaurant) => <RestrauntCart key={restaurant?.data?.id} {...restaurant.data} />)
                //data pass as destructing form
            }



        </div>
    )
}

export default Body