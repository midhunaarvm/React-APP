import React from 'react'

const Checkout = () => {
  return (
    <div>
      <div class="shopbox">
                <h1>CheckOut</h1>
                <div class="shopboxinner">
                    <div class="shopboxhome1">Home</div>
                    <hr/>
                    <div class="shopboxhome2">CheckOut</div>
                </div>


      </div>
      <div class="checkoutcontainer">
            <div class="checkoutform1">
                <form action="">
                    <h2>Billing Address</h2>
                    <label for="fname">First name:</label><br/>
                    <input type="text" id="fname" name="fname" value="John"/><br/>
                    <label for="fname">Email</label><br/>
                    <input type="email" id="fname" name="fname" value="John@gmail.com"/><br/>
                    <label for="fname">Address Line1</label><br/>
                    <input type="text" id="fname" name="fname" value="123 Street"/><br/>
                    <label for="fname">Country</label><br/>
                    <input type="text" id="fname" name="fname" value="United States"/><br/>
                    <label for="fname">State</label><br/>
                    <input type="text" id="fname" name="fname" value="Newyork"/><br/>
                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" className='checkboxinput'/>
                    <label for="vehicle1 " > Create an account </label><br/>
                    <input type="checkbox" id="vehicle2" name="vehicle2" value="Car"  className='checkboxinput'/>
                    <label for="vehicle2"  >Ship to different address</label><br/>
                   
                  </form> 
            </div>
            <div class="checkoutform2">
                <form action="">
                    <label for="lname">Last name:</label><br/>
                    <input type="text" id="lname" name="lname" value="Doe"/><br/>
                    <label for="fname">Mobile No</label><br/>
                    <input type="tel" id="fname" name="fname" value="123 Street"/><br/>
                    <label for="fname">Address Line 2</label><br/>
                    <input type="text" id="fname" name="fname" value="United States"/><br/>
                    <label for="fname">City</label><br/>
                    <input type="text" id="fname" name="fname" value="Newyork"/><br/>
                    <label for="fname">Zip Code</label><br/>
                    <input type="text" id="fname" name="fname" value="Newyork"/><br/>
                </form>
            </div>
            <div class="ordertotal">
                <div class="checkoutorder">
                    <div class="shopform">
                        
                       <div class="checkoutorderform"><p>Order Total</p>
                        <h2>Products</h2>
                        <h3>colorfull stylish shirt1  <span >$150</span></h3>
                        <h3>colorfull stylish shirt2 <span >$150</span></h3>
                        <h3>colorfull stylish shirt3  <span >$150</span></h3>
                        <hr/>
                    <h5>Subtotal: <span >$150</span></h5>
                    <h5>Shipping: <span >$10</span></h5>
                    <h2>Total: <span >$160</span></h2>
             
                </div>

    
                </div>
                <div class="shopform">
                        
                    <div class="checkoutorderform"><p>Payment</p>
                    <input type="checkbox" style={{width:"10px",height:"10px"}}/> Paypal <br/>
                    <input type="checkbox"  style={{width:"10px",height:"10px"}}/> Direct Check <br/>
                    <input type="checkbox"  style={{width:"10px",height:"10px"}}/> Bank Transfer
                     <hr/>
                
                 
             <button ><h3>Place Order</h3></button>
             </div>
             
 
             </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Checkout