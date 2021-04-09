import React from 'react'
import contact from '../images/contact-us.jpg'
import '../css/Contact.css'

const Contact=()=> {
    return (
        <div>
            <div className="contact-container">
                <div id="contact-left">
                <h1 id="about-heading">Contact Us</h1>
                    <form id="contact-form">
                        <label>Name<br/>
                        <input type="text" />
                        </label>
                        <br/>
                        <label>Email<br/>
                        <input type="email" />
                        </label>
                        <br/>
                        <label>Message<br/>
                        <textarea />
                        </label>
                        <br/>
                        <button>Send</button>
                    </form>
                </div>
                <div id="contact-right">
                    <img src={contact}/>
                </div>
            </div>
        </div>
    )
}

export default Contact
