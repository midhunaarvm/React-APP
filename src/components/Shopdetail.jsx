import React from 'react'
import Cat1 from '../image/cat-1.jpg'
import Cat2 from '../image/cat-2.jpg'
import '../Shopdetail.css'
import Description from './Description'
import Products from '../Body/Products'

import Stayupdate from '../Body/Stayupdate'


const Shopdetail = () => {
    return (
        <div>
            <div className="shopbox">
                <h1>SHOP DETAIL</h1>
                <div className="shopboxinner">
                    <div className="shopboxhome1">Home</div>
                    <hr />
                    <div className="shopboxhome2">Shop Detail</div>
                </div>

            </div>

            <div className="shopDetailContent">
                <div className="shopdetailcontentLeft">
                <div className="carousel1">
                    <div className="carousel-inner1">
                        <input className="carousel-open1" type="radio" id="carousel-1" name="carousel" aria-hidden="true"
                            hidden checked="checked" />
                    </div>
                    <div className="carousel-item">
                        <ul> <img src={Cat1} />


                        </ul>


                    </div>
                    <input className="carousel-open" type="radio" id="carousel-2" name="carousel" aria-hidden="true"
                        hidden />
                    <div className="carousel-item">
                        <img src={Cat2} alt=" " />
                    </div>
                    <input className="carousel-open" type="radio" id="carousel-1" name="carousel" aria-hidden="true"
                        hidden checked="checked" />
                    <div className="carousel-item">
                        <img src={Cat1} alt=" " />


                    </div>
                    <div className="carousel-item">
                        <img src={Cat2} alt=" " />


                    </div>
                    <input className="carousel-open" type="radio" id="carousel-3" name="carousel" aria-hidden="true"
                        hidden />
                    
                </div>
                </div>
                <div className="shopdetailcontentRight">
                <div className="shopdetailtext">
                <h2>Colorfull stylish shirts</h2>
                <div className="star">
                    <div className="star1">
                        <i className="fa-solid fa-star"></i>
                    </div>
                    <div className="star1">
                        <i className="fa-solid fa-star"></i>
                    </div>
                    <div className="star1">
                        <i className="fa-solid fa-star"></i>
                    </div>
                    <div className="star4">
                        <i className="fa-solid fa-star"></i>
                    </div>
                    <div className="star5">
                        <i className="fa-solid fa-star"></i>
                    </div>

                </div>
                <div className="tstartext">
                    <h6>(60 reviews)</h6>
                </div>
                <h2 className="dollar">$150.00</h2>
                <p className="loremtext" />Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,<br />
                molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum <br />
                numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium <br />
                optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis

                <div className="shopdetailcheckbox">
                    <label for="size">size:&nbsp;&nbsp;</label>
                    <input type="checkbox" className="checkbox-round" />&nbsp; XS

                    <input type="checkbox" className="checkbox-round" />&nbsp; S

                    <input type="checkbox" className="checkbox-round" />&nbsp; M

                    <input type="checkbox" className="checkbox-round" />&nbsp; L

                    <input type="checkbox" className="checkbox-round" />&nbsp; XL
                </div>

                <div className="shopdetailcolorbox">
                    <label for="size">Colors:&nbsp;&nbsp;</label>
                    <input type="checkbox" className="checkbox-round" />&nbsp; Black

                    <input type="checkbox" className="checkbox-round" />&nbsp; White

                    <input type="checkbox" className="checkbox-round" />&nbsp; Red

                    <input type="checkbox" className="checkbox-round" />&nbsp; Blue

                    <input type="checkbox" className="checkbox-round" />&nbsp; Green
                </div>
            </div>
            <div className="quantityButtons">
                <div className="decrementbuttons">
                    <button className="shopincrement">-</button>
                    <button style={{ background: "aliceblue" ,width:"60px",height:"40px",border:"none"}}>1</button>
                    <button className="shopincrement">+</button>
                </div>
                <div className="shopingcart">

                    <button className="cartbutton"><a href=""><i className="fa-solid fa-cart-shopping"></i></a>Add to cart</button>
                </div>

            </div>
                </div>
            </div>
            <div className='review'>
                <button className='Description'>Description</button>
                <button className='Information'>Information</button>
                <button className='Review'>Review(0)</button>
            </div>
            <Description/>
            <Products/>
            <Stayupdate/>
        </div>

    )
}

export default Shopdetail