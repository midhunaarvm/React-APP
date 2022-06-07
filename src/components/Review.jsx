import React from 'react'

function Review() {
  return (
    <div>
        <div class="productdescription">
            <div class="productdes">
                
                <div class="productreview">
                    <h2>1 review for "Colorfull stylish shirt"</h2>
                    <img src="img/cat-1.jpg" alt=""/>
                    <h4>Jhon doe </h4>
                 
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                       </p>
                   </div>
            </div>
            <div class="reviewform">
                <h2>Leave a review</h2>
                <h6>Your email address will not be published ,required feilds are marked*</h6>
                <h6>Your Rating *:</h6><a href=""></a>
                <h2>Your Review *:</h2>
                <input type="text" class="review"/>
                <h2>Your Name *:</h2>
                <input type="text" style="width: 85%;"/>
                <h2>Your Mail *:</h2>
                <input type="text" style="width: 85%;"/>
                <button >Leave Your Review</button>
            </div>
         
        </div>
    </div>
  )
}

export default Review