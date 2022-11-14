import React from "react";
import NavBar from './NavBar';
import { Link } from "react-router-dom";
import Footer from "./Footer";

const AboutUs = () => {
	return (
		<div>
			<NavBar ></NavBar>
			<br />
			<p class="text-center"> <p class="h1">CSC 648-03 Software Engineering</p></p>
			<p class="text-center"> <p class="h2">Fall, 2022</p></p>
			<p class="text-center"> <p class="h3">Team 3</p></p>
			<br />
			<ul class="list-inline text-center d-flex justify-content-center align-items-center">
				<ul class="list-group list-group-horizontal">
					<li class="list-group-item"> <Link to="/himani">Himani</Link></li>
					<li class="list-group-item"><Link to="/josef">Josef</Link></li>
					<li class="list-group-item"><Link to="/olimpia">Olimpia</Link></li>
					<li class="list-group-item"><Link to="/donnovan">Donnovan</Link></li>
					<li class="list-group-item"><Link to="/Yasi">Yasi</Link></li>
					<li class="list-group-item"><Link to="/robert">Robert</Link></li>
				</ul>
			</ul>
			<Footer />
		</div>
	);
};

export default AboutUs;
