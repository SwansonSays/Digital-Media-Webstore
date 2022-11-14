import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className= "footer py-0 bg-white border border-dark fixed-bottom">
            <Link className="btn btn-lg btn-block nav-link bg-white footer-contact" to="/">Contact Us</Link>
            <Link className="btn btn-lg btn-block nav-link bg-white footer-policy" to="/">Policy</Link>
            <h3 className="brand footer-brand" href="/"><Link className="brand" to="/">Media Store</Link></h3>
        </footer>
    );
};

export default Footer;