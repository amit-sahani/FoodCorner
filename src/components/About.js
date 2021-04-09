import React from 'react'
import '../css/About.css'
import chef from '../images/about-chef.jpg'
import customer from '../images/about-customer.jpg'


const About=()=> {
    return (<>
        <div className="about-us"  style={{height:"300px", backgroundColor:"white"}}>
            {/* <h2 className="about-head">About Us</h2> */}
            <div>
                <div id="image-chef">
                    <img src ={chef} alt="chef " style={{borderRadius:"3px"}} width="100%" height="100%"/>
                </div>
                <div id="image-customer">
                    <img src={customer} alt="customer" style={{borderRadius:"3px"}} width="100%" height="100%"/>
                </div>
            </div>
            <div id="about-content">
                <h1 id="about-heading">About Us</h1>
                <p>“At noma, we wish to offer our personal rendition of Nordic gourmet cuisine with an innovative gastronomic take on traditional cooking methods, fine Nordic produce and the legacy of our shared food heritage.”</p>
                <p>“Everything we do is about you. From chefs who create exciting new flavors, to crew members who know exactly how you want your drink – we prioritize what you need to get you on your way. We strive to keep you at your best, and we remain loyal to you, your tastes and your time. That’s what America runs on.”</p>
                <p>“Stiff drinks, hearty food and a convivial place to gather and debate the news of the day.”</p>
            </div>
        </div>
        <br/>
        <br />
        </>
    )
}

export default  About