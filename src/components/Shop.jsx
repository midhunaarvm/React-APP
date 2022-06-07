import React from 'react'

import Shopproducts from '../Body/Shopproducts'
import Stayupdate from '../Body/Stayupdate'
function Shop() {
  return (
    <div>
      <div className="shopbox">
        <h1>OUR SHOP</h1>
        <div className="shopboxinner">
          <div className="shopboxhome1">Home</div>
          <hr />
          <div className="shopboxhome2">Shop</div>
        </div>


      </div>
      <div className="shopmain">
                <div className="shopfilter">
                    <div className="shopfiltertop">
                        <h3>Filter by Price</h3>
                        <div className="shopfiltercheckbox">
                            <div className="tick">
                                <input type="checkbox"/>
                                <p> All Price </p>
                            </div>

                            <button>1000</button>
                        </div>
                        <div className="shopfiltercheckbox">
                            <div className="tick">
                                <input type="checkbox"/>
                                <p>$0-$100</p>
                            </div>

                            <button>150</button>
                        </div>
                        <div className="shopfiltercheckbox">
                            <div className="tick">
                                <input type="checkbox"/>
                                <p> $100-$200 </p>
                            </div>

                            <button>295</button>
                        </div>
                        <div className="shopfiltercheckbox">
                            <div className="tick">
                                <input type="checkbox"/>
                                <p>$200-$300 </p>
                            </div>

                            <button>246</button>
                        </div>
                        <div className="shopfiltercheckbox">
                            <div className="tick">
                                <input type="checkbox"/>
                                <p>$300-$400</p>
                            </div>

                            <button>146</button>
                        </div>
                        <div className="shopfiltercheckbox">
                            <div className="tick">
                                <input type="checkbox"/>
                                <p> $400-$500 </p>
                            </div>

                            <button>168</button>
                        </div>


                    </div>
                    <hr/>
                    <div className="shopfiltertop">
                        <h3>Filter by color</h3>
                        <div className="shopfiltercheckbox">
                            <div className="tick">
                                <input type="checkbox"/>
                                <p> All Color </p>
                            </div>

                            <button>1000</button>
                        </div>
                        <div className="shopfiltercheckbox">
                            <div className="tick">
                                <input type="checkbox"/>
                                <p>Black</p>
                            </div>

                            <button>150</button>
                        </div>
                        <div className="shopfiltercheckbox">
                            <div className="tick">
                                <input type="checkbox"/>
                                <p> White</p>
                            </div>

                            <button>295</button>
                        </div>
                        <div className="shopfiltercheckbox">
                            <div className="tick">
                                <input type="checkbox"/>
                                <p>Red </p>
                            </div>

                            <button>246</button>
                        </div>
                        <div className="shopfiltercheckbox">
                            <div className="tick">
                                <input type="checkbox"/>
                                <p>Blue</p>
                            </div>

                            <button>146</button>
                        </div>
                        <div className="shopfiltercheckbox">
                            <div className="tick">
                                <input type="checkbox"/>
                                <p> Green </p>
                            </div>

                            <button>168</button>
                        </div>


                    </div>
                    <hr/>
                    <div className="shopfiltertop">
                        <h3>Filter by Price</h3>
                        <div className="shopfiltercheckbox">
                            <div className="tick">
                                <input type="checkbox"/>
                                <p> All Size </p>
                            </div>

                            <button>1000</button>
                        </div>
                        <div className="shopfiltercheckbox">
                            <div className="tick">
                                <input type="checkbox"/>
                                <p>XS</p>
                            </div>

                            <button>150</button>
                        </div>
                        <div className="shopfiltercheckbox">
                            <div className="tick">
                                <input type="checkbox"/>
                                <p> S </p>
                            </div>

                            <button>295</button>
                        </div>
                        <div className="shopfiltercheckbox">
                            <div className="tick">
                                <input type="checkbox"/>
                                <p>M </p>
                            </div>

                            <button>246</button>
                        </div>
                        <div className="shopfiltercheckbox">
                            <div className="tick">
                                <input type="checkbox"/>
                                <p>L</p>
                            </div>

                            <button>146</button>
                        </div>
                        <div className="shopfiltercheckbox">
                            <div className="tick">
                                <input type="checkbox"/>
                                <p> XL </p>
                            </div>

                            <button>168</button>
                        </div>


                    </div>
                </div>
                <div className="shopmaincard">
                    <div className="shopcardheading">
                        <div className="shopcardsearch">
                            <input type="text" name="" id="" placeholder="search by name"/>
                            <a href=""><i className="fa-solid fa-magnifying-glass " ></i></a>
                        </div>
                        <div className="shopcardsort">
                            <select name="sort" id="">
                                <option value="">sort by</option>

                            </select>
                        </div>
                        <Shopproducts/>
                    </div>
                    
                </div>
                
            </div>
            <Stayupdate/>
    </div>
  )
}

export default Shop