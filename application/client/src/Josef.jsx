import React from "react";
import icon from './img/picwork.jpg';
import NavBar from './NavBar';


const ContactUs = () => {
return (
	<div>
		<NavBar />
	<p class="text-center"> <p class= "h1">Josef Fiedler</p></p>
	<img src={icon} alt="icon" class= "rounded-circle"/>
	<br></br>
	<p class="h5">I am the team’s GitHub master and will usually be working on backend tasks. I used to work as an it technician, data scientist and most recently a python developer.
</p>

	</div>
);
};

export default ContactUs;
