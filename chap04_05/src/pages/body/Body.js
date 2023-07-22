import React, { useState } from 'react'
import './body.css'
import { Restaurant_Data } from '../../config/Constant';
import RestrauntCart from '../../component/RestrauntCart';


//config driven UI ( which is build by Backend developer)



// console.log(Restaurant_Data)



const filerData = (searchTxt, restrauList) => {
  
    return restrauList?.filter((restrau) => restrau?.data?.name?.includes(searchTxt))


}

function Body() {
    let keysearch = "hello test" // writing  local variable in JS 

    // creating the local state variable in React using useState hooks ( which is nothing but the Normal JS function which provide specific functionality.)

    const [searchTxt, setSearchTxt] = useState('');
    const [restrau_data, setRestrau_data] = useState(Restaurant_Data)

    return (
        <>
            <div className="search_bar">
                <input type="text" className='search-input' placeholder='search' value={searchTxt}
                    onChange={(e) => {
                        setSearchTxt(e.target.value)

                    }
                    }
                />
                <button className="search-btn" onClick={() => {
                    // need filter data , and pass into updated restrau list
                    const data = filerData(searchTxt, Restaurant_Data)
                    console.log(data)
                    setRestrau_data(data)
                }}

                >search</button>
            </div>
            <div className='Body_main'>


                {
                    // Restaurant_Data?.filter((restrau) => restrau?.data?.name?.toLowerCase().includes(searchTxt.toLowerCase()))?.map((restaurant) 
                    restrau_data.map((restaurant) => <RestrauntCart key={restaurant?.data?.id} {...restaurant.data} />)



                    //data pass as destructing form
                }



            </div>
        </>

    )
}

export default Body