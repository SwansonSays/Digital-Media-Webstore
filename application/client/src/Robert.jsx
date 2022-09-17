import React from "react";
import icon from './img/avatarPlaceHolder.jpg';



const ContactUs = () => {
	return (
		<div>
			<p class="text-center"> <p class="h1">Robert Swanson</p></p>
			<img src={icon} alt="icon" class="rounded-circle" />
			<br></br>
			<p class="h5"> I am a senior at San Francisco State University studying computer science. I am on the front end team.
				I am from Southern California originally but have lived in the Bay for the last seven years. </p>

		</div>
	);
};

export default ContactUs;