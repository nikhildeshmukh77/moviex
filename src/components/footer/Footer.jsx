import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                </ul>
                <div className="infoText">
                    Discover your next favorite film with Moviex, your ultimate destination for personalized 
                    movie recommendations and reviews. Connect with us on social media to stay updated on the 
                    latest releases and hidden gems. Have questions or need support? Reach out to us anytime at
                     support@Moviex.com. Dive into the world of cinema with confidence and enjoyment!
                </div>
                <div className="socialIcons">
                    <span className="icon">
                        <a href="https://facebook.com/" target="_blank">
                            <FaFacebookF />
                        </a>
                    </span>
                    <span className="icon">
                        <a href="https://instagram.com/nikhil_20d" target="_blank">
                            <FaInstagram />
                        </a>
                    </span>
                    <span className="icon">
                        <a href="https://twitter.com/NikhilD52316330" target="_blank">
                            <FaTwitter />
                        </a>
                    </span>
                    <span className="icon">
                        <a href="https://www.linkedin.com/in/nikhildeshmukh22/" target="_blank">
                            <FaLinkedin />
                        </a>
                    </span>
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;
