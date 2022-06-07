import React from 'react'
import Bluecard from '../Body/Bluecard'
//import IMAGES from '../image/index.js'
import Card from '../Body/Card'
import Carousel from '../Body/Carousel'
import Products from '../Body/Products'
import Stayupdate from '../Body/Stayupdate'

import Vendor from '../Body/Vendor'



function Home() {
  return (
  <div>
     <div><Carousel/>
   <Card/>
   <Bluecard/>
   <Products/>
   <Stayupdate/>
   <div className="just">
    <div className="stay">
        <hr/>
        <h2 className="stayUpdated">Just Arrived</h2>
        <hr/>
    </div>
    </div>
<Products/>
   <Vendor/>
   <Stayupdate/>
  </div>
 
  </div>
  
  )
}

export default Home