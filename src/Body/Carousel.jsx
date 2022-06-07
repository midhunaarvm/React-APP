import React from 'react'
import Carousel1 from '../image/carousel-1.jpg'
import Carousel2 from '../image/carousel-2.jpg'
function Carousel() {
    return (
        <div className='mainBody'>

            <div class="carousel">
                <div class="carousel-inner">
                    

                    <input class="carousel-open" type="radio" id="carousel-2" name="carousel" aria-hidden="true"
                        hidden/>
                    <div class="carousel-item">
                        <img src={Carousel1} alt="carousel1" />
                    </div>
                    <input class="carousel-open" type="radio" id="carousel-1" name="carousel" aria-hidden="true"
                        hidden checked="checked" />
                    <div class="carousel-item">
                        <img src=
                            {Carousel2} alt="carousel1" />

                        <div class="centered">&nbsp;&nbsp;10% OFF YOUR FIRST ORDER <br /><span
                            class="SecondLetter">Reasonable Price <br />
                            <span><button class="shopButton">shop now</button></span>
                        </span></div>
                    </div>
                    <input class="carousel-open" type="radio" id="carousel-3" name="carousel" aria-hidden="true"
                        hidden />
                    <label for="carousel-1" class="carousel-control prev control-2">‹</label>
                    <label for="carousel-2" class="carousel-control next control-1">›</label>
                    <label for="carousel-1" class="carousel-control next control-3">‹</label>
                    <label for="carousel-2" class="carousel-control prev control-3">›</label>


                </div>

            </div>
            
            <div class="tablesUnderBody">
                <div class="Quality" ><i class="fa-solid fa-check"></i><b >Quality
                        Product</b>
                </div>
                <div class="Quality"><i class="fa-solid fa-truck-fast"></i><b >Free
                        Shipping</b>
                </div>
                <div class="Quality" ><i class="fa-solid fa-arrow-right-arrow-left"></i><b
                       >14-Day
                        Return</b>
                </div>
                <div class="Quality" ><i class="fa-solid fa-phone"></i><b >14/7
                        Support</b>
                </div>
            </div>
        </div>
        
    )
}

export default Carousel