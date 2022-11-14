import React from "react";
import icon from './img/yasi_img.JPG';
import NavBar from './NavBar';
import Footer from "./Footer";

const ContactUs = () => {
    return (
        <div>
            <NavBar />
            <p class="text-center"> <p class= "h1">Yasaman Pakdel</p></p>
            <img src={icon} alt="icon" class= "rounded-circle"/>
            <br></br>
            <p class="h5">
                My name is Yasaman Pakdel, I'm a computer science master's student at San Francisco State University.
                In our team for developing this website I have a role in the front end team. </p>
            <Footer />
        </div>
    );
};
    
export default ContactUs;
    