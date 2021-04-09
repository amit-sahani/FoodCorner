import '../css/Header.css';
import React, {useState, useEffect} from 'react'

 const Header=()=> {
    const [backgroundColor, setBackgroundColor] = useState("")

    useEffect(()=>{
        document.addEventListener("scroll", () => {
            const backgroundcolor = window.scrollY < 100 ? "" : "#191a19";
      
            setBackgroundColor(backgroundcolor);
          });
    },[])

    return (
        <header id="header"style={{backgroundColor}}>
            <nav className="nav-bar">
                <div className="logo-text">
                    <h2>Food Corner</h2>
                </div>
                <div className="nav-menu" style={{marginTop:"20px"}}>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact Us</li>
                        <li>Login</li>
                        <li>Signup</li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header;