import React from 'react'
import product1 from '../image/product-1.jpg'
import product2 from '../image/product-2.jpg'
import product3 from '../image/product-3.jpg'
import product4 from '../image/product-4.jpg'
import product5 from '../image/product-5.jpg'
import product6 from '../image/product-6.jpg'
import product7 from '../image/product-7.jpg'
import product8 from '../image/product-8.jpg'

const products = [{
   
    img: product1,
    title: "Colorfull Stylish Shirts",
    price:"$123",

},
{
    
    img: product2,
    title: "Colorfull Stylish Shirts",
    price:"$123",
},
{
    img: product3,
    title: "Colorfull Stylish Shirts",
    price:"$123",
},
{
    img: product4,
    title: "Colorfull Stylish Shirts",
    price:"$123",
},
{
    img: product5,
    title: "Colorfull Stylish Shirts",
    price:"$123",
},
{
    img: product6,
    title: "Colorfull Stylish Shirts",
    price:"$123",
},
{
    img: product7,
    title: "Colorfull Stylish Shirts",
    price:"$123",
},
{
    img: product8,
    title: "Colorfull Stylish Shirts",
    price:"$123",
},

]
const Products = () => {
  return (
    <div>
        <div className="Trandycards">
                <div className="Trandycard">

                    <img src={products[0].img} alt="Avatar"/>
                    <hr/>
                    <div className="container">
                        <h6>{products[0].title}
                        </h6>
                        <h6>{products[0].price} <span>123.00</span></h6>
                    </div>
                    <hr/>
                    <div className="TrandycardShopping">
                        <div className="left">
                            <a className="icon" href=""> <i className="fa-solid fa-eye"></i></a>
                            <p className="viewDetails">View Detail</p>
                        </div>
                        <div className="right">
                            <a className="icon" href=""><i className="fa-solid fa-cart-shopping"></i></a>
                            <p className="viewDetails">Add to cart</p>
                        </div>
                    </div>
                </div>

                <div className="Trandycard">

                <img src={products[1].img} alt="Avatar"/>
                    <hr/>
                    <div className="container">
                        <h6>{products[1].title}
                        </h6>
                        <h6>{products[1].price} <span>123.00</span></h6>
                    </div>
                    <hr/>
                    <div className="TrandycardShopping">
                        <div className="left">
                            <a className="icon" href=""> <i className="fa-solid fa-eye"></i></a>
                            <p className="viewDetails">View Detail</p>
                        </div>
                        <div className="right">
                            <a className="icon" href=""><i className="fa-solid fa-cart-shopping"></i></a>
                            <p className="viewDetails">Add to cart</p>
                        </div>
                    </div>
                </div>
                <div className="Trandycard">

                <img src={products[2].img} alt="Avatar"/>
                    <hr/>
                    <div className="container">
                        <h6>{products[2].title}
                        </h6>
                        <h6>{products[2].price} <span>123.00</span></h6>
                    </div>
                    <hr/>
                    <div className="TrandycardShopping">
                        <div className="left">
                            <a className="icon" href=""> <i className="fa-solid fa-eye"></i></a>
                            <p className="viewDetails">View Detail</p>
                        </div>
                        <div className="right">
                            <a className="icon" href=""><i className="fa-solid fa-cart-shopping"></i></a>
                            <p className="viewDetails">Add to cart</p>
                        </div>
                    </div>
                </div>
                <div className="Trandycard">

                <img src={products[3].img} alt="Avatar"/>
                    <hr/>
                    <div className="container">
                        <h6>{products[3].title}
                        </h6>
                        <h6>{products[3].price} <span>123.00</span></h6>
                    </div>
                    <hr/>
                    <div className="TrandycardShopping">
                        <div className="left">
                            <a className="icon" href=""> <i className="fa-solid fa-eye"></i></a>
                            <p className="viewDetails">View Detail</p>
                        </div>
                        <div className="right">
                            <a className="icon" href=""><i className="fa-solid fa-cart-shopping"></i></a>
                            <p className="viewDetails">Add to cart</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Trandycards2">
                <div className="Trandycard">

                <img src={products[4].img} alt="Avatar"/>
                    <hr/>
                    <div className="container">
                        <h6>{products[4].title}
                        </h6>
                        <h6>{products[4].price} <span>123.00</span></h6>
                    </div>
                    <hr/>
                    <div className="TrandycardShopping">
                        <div className="left">
                            <a className="icon" href=""> <i className="fa-solid fa-eye"></i></a>
                            <p className="viewDetails">View Detail</p>
                        </div>
                        <div className="right">
                            <a className="icon" href=""><i className="fa-solid fa-cart-shopping"></i></a>
                            <p className="viewDetails">Add to cart</p>
                        </div>
                    </div>
                </div>

                <div className="Trandycard">

                <img src={products[5].img} alt="Avatar"/>
                    <hr/>
                    <div className="container">
                        <h6>{products[5].title}
                        </h6>
                        <h6>{products[5].price} <span>123.00</span></h6>
                    </div>
                    <hr/>
                    <div className="TrandycardShopping">
                        <div className="left">
                            <a className="icon" href=""> <i className="fa-solid fa-eye"></i></a>
                            <p className="viewDetails">View Detail</p>
                        </div>
                        <div className="right">
                            <a className="icon" href=""><i className="fa-solid fa-cart-shopping"></i></a>
                            <p className="viewDetails">Add to cart</p>
                        </div>
                    </div>
                </div>
                <div className="Trandycard">

                <img src={products[6].img} alt="Avatar"/>
                    <hr/>
                    <div className="container">
                        <h6>{products[6].title}
                        </h6>
                        <h6>{products[6].price} <span>123.00</span></h6>
                    </div>
                    <hr/>
                    <div className="TrandycardShopping">
                        <div className="left">
                            <a className="icon" href=""> <i className="fa-solid fa-eye"></i></a>
                            <p className="viewDetails">View Detail</p>
                        </div>
                        <div className="right">
                            <a className="icon" href=""><i className="fa-solid fa-cart-shopping"></i></a>
                            <p className="viewDetails">Add to cart</p>
                        </div>
                    </div>
                </div>
                <div className="Trandycard">

                <img src={products[7].img} alt="Avatar"/>
                    <hr/>
                    <div className="container">
                        <h6>{products[7].title}
                        </h6>
                        <h6>{products[7].price} <span>123.00</span></h6>
                    </div>
                    <hr/>
                    <div className="TrandycardShopping">
                        <div className="left">
                            <a className="icon" href=""> <i className="fa-solid fa-eye"></i></a>
                            <p className="viewDetails">View Detail</p>
                        </div>
                        <div className="right">
                            <a className="icon" href=""><i className="fa-solid fa-cart-shopping"></i></a>
                            <p className="viewDetails">Add to cart</p>
                        </div>
                    </div>
                </div>
            </div>
            
    </div>
  )
}

export default Products