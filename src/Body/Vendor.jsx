import React from 'react'
import vendor7 from '../image/vendor-7.jpg'
import vendor8 from '../image/vendor-8.jpg'
import vendor6 from '../image/vendor-6.jpg'
import vendor3 from '../image/vendor-3.jpg'
import vendor4 from '../image/vendor-4.jpg'
import vendor5 from '../image/vendor-5.jpg'

function Vendor() {
  return (
    
<div className="vendors">
    <div className="vendor">

        <img src={vendor3} alt="Avatar"/>


    </div>
    <div className="vendor">

        <img src={vendor4} alt="Avatar"/>


    </div>
    <div className="vendor">

        <img src={vendor5} alt="Avatar"/>


    </div>
    <div className="vendor">

        <img src={vendor6} alt="Avatar"/>


    </div>
    <div className="vendor">

        <img src={vendor7} alt="Avatar"/>


    </div>
    <div className="vendor">

        <img src={vendor8} alt="Avatar"/>


    </div>


</div>

  )
}

export default Vendor