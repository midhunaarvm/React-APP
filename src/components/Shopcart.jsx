import React from 'react'
import Stayupdate from '../Body/Stayupdate'
import product1 from '../image/product-1.jpg'
import product2 from '../image/product-2.jpg'
import product3 from '../image/product-3.jpg'
import product4 from '../image/product-4.jpg'



const Shopcart = () => {
  return (
    <div>
      <div className="shopbox">
        <h1>SHOPPING CART</h1>
        <div className="shopboxinner">
          <div className="shopboxhome1">Home</div>
          <hr />
          <div className="shopboxhome2">Shop Cart</div>
        </div>

      </div>
      <div className="shoptablemain">
        <div className="shoptable">
          <table>
            <tr>
              <th>Products</th>
              <th>Price</th>
              <th>Quality</th>
              <th>Total</th>
              <th>Remove</th>
            </tr>
            <tr>
              <td><img src={product1} alt="products" /> Colorfull Stylish Shirt</td>
              <td>$150</td>
              <td><button className="tablebuttons" >-</button>
                <button style={{background : "aliceblue ",height:"30px",width:"30px",border:"none"}}>1</button>
                <button className="tablebuttons" >+</button></td>

              <td>$150</td>
              <td><button className="closebutton">X</button></td>
            </tr>
            <tr>
              <td><img src={product2} alt="products" /> Colorfull Stylish Shirt</td>
              <td>$150</td>
              <td><button className="tablebuttons" >-</button>
                <button style={{background : "aliceblue ",height:"30px",width:"30px",border:"none"}}>1</button>
                <button className="tablebuttons" >+</button></td>

              <td>$150</td>
              <td><button className="closebutton">X</button></td>
            </tr>
            <tr>
              <td><img src={product3} alt="products" /> Colorfull Stylish Shirt</td>
              <td>$150</td>
              <td><button className="tablebuttons" >-</button>
                <button style={{background : "aliceblue ",height:"30px",width:"30px",border:"none"}}>1</button>
                <button className="tablebuttons" >+</button></td>

              <td>$150</td>
              <td><button className="closebutton">X</button></td>
            </tr>
            <tr>
              <td><img src={product4} alt="products" /> Colorfull Stylish Shirt</td>
              <td>$150</td>
              <td><button className="tablebuttons" >-</button>
                <button style={{background : "aliceblue ",height:"30px",width:"30px",border:"none"}}>1</button>
                <button className="tablebuttons" >+</button></td>

              <td>$150</td>
              <td><button className="closebutton">X</button></td>
            </tr>
          </table>
        </div>
        <div className="shopform">
          <input type="text" placeholder="Coupon Code"  /><button>Apply Coupon</button>
          <div><p>Card Summary</p>
            <h5>Subtotal: <span >$150</span></h5>
            <h5>Shipping: <span >$10</span></h5>
            <h2>Total: <span >$160</span></h2>
            <button style={{width:"100%",margin:"0px 0px -10px 0px"}}>Proceed to CheckOut</button>
          </div>
        </div>
      </div>
      <Stayupdate/>
      </div>

      )
}

      export default Shopcart