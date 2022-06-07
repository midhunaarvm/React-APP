import React from 'react'
import Stayupdate from '../Body/Stayupdate'
import Checkout from './Checkout'


const Contact = () => {
  return (
    <div>
       <div className="shopbox">
        <h1>CONTACT US</h1>
        <div className="shopboxinner">
          <div className="shopboxhome1">Home</div>
          <hr />
          <div className="shopboxhome2">Contact</div>
        </div>

      </div>
      <div className="just">
    <div className="stay">
        <hr/>
        <h2 className="stayUpdated">Contact Us for Details</h2>
        <hr/>
    </div>
    </div>
    <div className="contactBody">
            <div className="contactform1">
                <form action="">
                   
                    <input type="text" id="fname" name="fname" value="Your Name"/><br/><br/>
                    
                    <input type="text" id="lname" name="lname" value="Your Email"/><br/><br/>

                    <input type="text" id="lname" name="lname" value="Subject"/><br/><br/>
                    <input type="text" id="lname" name="lname" value="Message" className="messagebox"/><br/><br/>
                    
                    <button>Send Message</button>
                  </form>
            </div>
            <div className="contactform2">
                <h2>Get in Touch</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,<br/>
                    molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                   </p>
                   <h2>Store 1</h2>
                   <i className="fa-solid fa-location-dot"></i>
                   <p className="address">123 street,Newyork,USA</p>

                   <i className="fa-solid fa-envelope"></i>
                   <p className="address">info@example.com</p>
                    <i className="fa-solid fa-phone"></i>
                   <p className="address">+01234 456789</p>

                   <h2>Store 2</h2>
                  <i className="fa-solid fa-location-dot"></i>
                   <p className="address">123 street,Newyork,USA</p>

                   <i className="fa-solid fa-envelope"></i>
                   <p className="address">info@example.com</p>

                   <i className="fa-solid fa-phone"></i>
                   <p className="address">+01234 456789</p>
                   
            </div>
        </div>
        <Checkout/>
        <Stayupdate/>
    </div>
  )
}

export default Contact