import React from "react";
import icon from './img/himani.jpg';
import NavBar from './NavBar';
import Footer from "./Footer";


const ContactUs = () => {
return (
	<div>
		<NavBar />
		<p class="text-center"> <p class= "h1">Himani Varshney</p></p>
		<img src={icon} alt="icon" class= "rounded-circle"/>
		<br></br>
		<p class="h5"> I am Himani Varshney. I am a CS graduate student at SFSU. I am leading the team 3 for Software Engineering Project. I am a backend developer with preferred language as Python.   I have 4 years of industy experience with companies like Rolls-Royce and IBM. I am passionate about developing AI based products. On the personal front, I like swimming and playing badminton. </p>
		<Footer />
	</div>
);
};

export default ContactUs;
