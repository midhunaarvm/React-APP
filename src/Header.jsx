import React from 'react'
import { NavLink } from 'react-router-dom'
const Header= () => {
  return (
    <div className='Navbar'>
      <div className="topbar">
        <p>FAQs&nbsp;|&nbsp;Help&nbsp;|&nbsp;Support&nbsp;
          <span className="socialmedia">
           <i className="fa-brands fa-facebook-f"></i>
             <i className="fa-brands fa-twitter"></i> 
             <i className="fa-brands fa-linkedin-in"></i> 
             <i className="fa-brands fa-instagram"></i> 
             <i className="fa-brands fa-youtube"></i> 

          </span>
        </p>

      </div>
      <div className="navbar">
        <div className="logo"><span className="E">E</span>&nbsp;&nbsp; Shopper
          <span className="searchbar"><input type="text" placeholder="Search for products "
            className="searchforproducts"  />
             <i className="fa-solid fa-magnifying-glass " ></i> 
            <span className="symbols"><i className="fa-solid fa-heart" ></i></span><label
              for="number" className="number">0</label>
            <i className="fa-solid fa-cart-shopping" ></i>
            <label for="number" className="number">0</label>
          </span>
        </div>



      </div>
      <div className="bodyPart">
                <select className="dropdown">
                    <option value="actual value 1">Catagories</option>
                    

                </select>

                <NavLink to ='/' ><span className="home" >Home</span></NavLink>
                
         
                <NavLink to ='/shop' ><span className="text" >Shop</span></NavLink>
                <NavLink to ='/shopdetail' ><span className="text" >Shop Detail</span></NavLink>
                
                <NavLink to ='/shopcart' ><span className="text" >Page</span></NavLink>
                    
            
                <NavLink to ='/contact' ><span className="text" >Contacts</span></NavLink>
                <NavLink to ='/login' ><span className="login" >Login</span></NavLink>
                <NavLink to ='/register' ><span className="login1">Register</span></NavLink>
                <select className="Dressesdropdown">
                    <option value="actual value 1" className="Dressesdropdown" fixed>Dresses</option>
                    <option value="actual value 1" className="Dressesdropdown">Shirts</option>
                    <option value="actual value 1" className="Dressesdropdown">Jeans</option>
                    <option value="actual value 1" className="Dressesdropdown">Swimwear</option>
                    <option value="actual value 1" className="Dressesdropdown">Sleepwear</option>
                    <option value="actual value 1" className="Dressesdropdown">Sportswear</option>
                    <option value="actual value 1" className="Dressesdropdown">Jumpsuits</option>
                    <option value="actual value 1" className="Dressesdropdown">Blazers</option>
                    <option value="actual value 1" className="Dressesdropdown">Jackets</option>
                    <option value="actual value 1" className="Dressesdropdown">Shoes</option>

                </select>
            </div>

    </div>
  )
}

export default Header