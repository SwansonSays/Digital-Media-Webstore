import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className = "navbar py-0 bg-white border border-dark">
            <Link className="btn btn-lg btn-block nav-link bg-white footer-contact" to="/">Contact Us</Link>
            <Link className="btn btn-lg btn-block nav-link bg-white footer-policy" to="/">Policy</Link>
            <h1 href="/"><Link className="brand footer-brand" to="/">Media Store</Link></h1>
        </footer>
    );
};

export default Footer;