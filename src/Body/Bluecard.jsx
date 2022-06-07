 import React from 'react'
 import offer1 from '../image/offer-1.png'
 import offer2 from '../image/offer-2.png'
 const Bluecard = () => {
   return (
    <div>
        <div className="violet-card">
                <div className="violet-card1">
                    <img src={offer1} alt="offer"/>
                    <h3>20% OFF THE ALL ORDER</h3>
                            <h1>Spring Collection </h1>
                            <button className="shopNow1">Shop Now</button>

                </div>
                <div className="violet-card2">
                    <h3>20% OFF THE ALL ORDER</h3>
                            <h1>Winter Collection </h1>
                            <img src={offer2} alt=""/>
                            <button className="shopNow2">Shop Now</button>
                </div>
    </div>
    <div className='Trandy'>
                    <hr/>
                    <h2 className="stayUpdated">Trendy Products</h2>
                    <hr/>
    </div>
    </div>
   )
 }
 
 export default Bluecard