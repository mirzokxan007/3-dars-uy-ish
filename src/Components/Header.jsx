import React from "react";
import "../Components/css/header.css";
import logo from "../../public/logotip.png";
import {Link} from "react-router-dom";
import { useLocation } from "react-router-dom";


const Header = () =>{
    const {pathname} = useLocation()

   

    return <nav className=" nav py-3">
        <header className="container ">
            <div className="top_section flexs">
                <div className="email d-flex ">
                  <i className="fa-regular fa-envelope pt-1  px-3"></i>
                  <p className="m-0 p">Info@youremail.com</p>
                  <i className="fa-solid px-3 py-1 fa-phone"></i>
                  <p className="p">(480) 555-0103</p>
                </div>
                <div className="logo_section">
                    <div className="logos">
                    <i className="fa-brands px-3 fa-facebook-f"></i>
                    <i className="fa-brands px-3 fa-instagram"></i>
                    <i className="fa-brands px-3 fa-twitter"></i>
                    <i className="fa-brands px-3 fa-youtube"></i>
                    </div>
                </div>
               
            </div>
            <div className="level_1 d-flex justify-content-between ">
                <ul className="first_staff bg-light d-flex my-5">
                    <li className="header_lis py-2 mx-3">
                        <Link className={`text-decoration-none text-${pathname === "/" ? "primary" : "reset"}`} a to="/">HOME</Link>    
                    </li>
                    <li className="header_lis py-2 mx-3" >
                        <Link className={`text-decoration-none text-${pathname === "/about" ? "primary" : "reset"}`} a to="/about" >ABOUT</Link>
                    </li>
                    <li className="header_lis py-2 mx-3">
                        <Link className={`text-decoration-none text-${pathname === "/features" ? "primary" : "reset"}`} a to="/features">FEATURES</Link>
                    </li>
                </ul>
                <div className="top_satff">
                    <img src={logo} alt="" />
                </div>
                <ul className="second_staff bg-light d-flex my-5">
                    <li className="header_lis py-2 mx-3">
                        <Link className={`text-decoration-none text-${pathname === "/screenshot" ? "primary" : "reset"}`} a to="/screenshot">SCREENSHOT</Link>
                    </li>
                    <li className="header_lis py-2 mx-3">
                        <Link className={`text-decoration-none text-${pathname === "/blog" ? "primary" : "reset"}`} a to="/blog">BLOG</Link>
                    </li>
                    <li className="header_lis py-2 mx-3">
                        <Link className={`text-decoration-none text-${pathname === "/dawnload" ? "primary" : "reset"}`} a to="/dawnload">DOWNLOAD</Link>
                    </li>
                </ul>
            </div>
            

        </header>
    </nav>
}


export default Header;