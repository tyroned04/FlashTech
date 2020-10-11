import React from "react";
import "./css/App.css";

import logo from "./assets/logo.png";

class Footer extends React.Component {
    render() {
        return(
            <footer>
                <div className="footer_logo">
                <img className="logo" src={logo} alt="logo" />
                <p>&copy; All rights reserved</p>
                </div>

                <div className="footer_menu">
                <h3>Menu</h3>
                <ul className="footer_ul">
                    <li>About</li>
                    <li>Services</li>
                    <li>Products</li>
                    <li>Careers</li>
                </ul>
                </div>

                <div className="footer_spacing"></div>

                <div className="contact">
                <h3>Contact</h3>
                <ul className="footer_ul">
                    <li>635 Ivan Allen Jr Blvd NW, Atlanta, GA</li>
                    <li>Atlanta, GA 30303</li>
                    <li><a href="mailto:info.flashtechsolutions@gmail.com">info@flashtech.com</a></li>
                </ul>
                </div>
            </footer>
        );
    }
}

export default Footer;