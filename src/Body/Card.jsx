import React from 'react'
import Image1 from '../image/cat-1.jpg'
import Image2 from '../image/cat-2.jpg'
import Image3 from '../image/cat-3.jpg'
import Image4 from '../image/cat-4.jpg'
import Image5 from '../image/cat-5.jpg'
import Image6 from '../image/cat-6.jpg'
const data = [{
    products: "15",
    img: Image1,
    title: "Men's Dresses",
},
{
    products: "15",
    img: Image2,
    title: "Women's Dresses",
},
{
    products: "15",
    img: Image3,
    title: "Baby's Dresses",
},
{
    products: "15",
    img: Image4,
    title: "Accessories",
},
{
    products: "15",
    img: Image5,
    title: "Bags",
},
{
    products: "15",
    img: Image6,
    title: "Shoes",
},

]
const Card = () => {
    return (
        <div>
            <div className='cards'>
                <div className="card">
                    <h5>{data[0].products} Products</h5>
                    <img src={data[0].img} alt="Avatar" />
                    <div className="container">
                        <h4><b>{data[0].title}</b></h4>

                    </div>
                </div>
                <div className="card">
                    <h5>{data[1].products} Products</h5>
                    <img src={data[1].img} alt="Avatar" />
                    <div className="container">
                        <h4><b>{data[1].title}</b></h4>

                    </div>
                </div>
                <div className="card">
                    <h5>{data[2].products} Products</h5>
                    <img src={data[2].img} alt="Avatar" />
                    <div className="container">
                        <h4><b>{data[2].title}</b></h4>

                    </div>
                </div>


            </div>
            <div className="cards">
            <div className="card">
                <h5>{data[3].products} Products</h5>
                <img src={data[3].img} alt="Avatar" />
                <div className="container">
                    <h4><b>{data[3].title}</b></h4>

                </div>
            </div>
            <div className="card">
                <h5>{data[4].products} Products</h5>
                <img src={data[4].img} alt="Avatar" />
                <div className="container">
                    <h4><b>{data[4].title}</b></h4>

                </div>
            </div>
            <div className="card">
                <h5>{data[5].products} Products</h5>
                <img src={data[5].img} alt="Avatar" />
                <div className="container">
                    <h4><b>{data[5].title}</b></h4>

                </div>
            </div>
            </div>
        </div>
    )
}

export default Card 