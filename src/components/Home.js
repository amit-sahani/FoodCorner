import React from 'react'
import home from '../images/home.jpg'
import '../css/Home.css'

const Home =() =>{
    return (
        <div id="home-container">
            <img src={home} width="100%" style={{height:"100vh"}} />
            <div className="centered">
                <h1>Let Explore the Real Taste With Us!</h1>
            </div>
        </div>
    )
}

export default  Home