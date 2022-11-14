import React from "react";
import { Link } from "react-router-dom"

const Home = () => {
return (
	<div>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <p class="text-center"> <p class= "h1">CSC 648-03 Software Engineering</p></p>
    <p class= "text-center"> <p class= "h2">Fall, 2022</p></p>
    <p class= "text-center"> <p class= "h3">Team 3</p></p>
    <br />
    <br />
    <ul>
    <ul class="list-inline text-center d-flex justify-content-center align-items-center">
    <ul class="list-group list-group-horizontal">
  <li class="list-group-item"><Link to="/freepost">FreePost</Link></li>
  <li class="list-group-item"><Link to="/contactpost">ContactPost</Link></li>
  <li class="list-group-item"><Link to="/login">Login</Link></li>
  <li class="list-group-item"><Link to="/signup">Signup</Link></li>
</ul>
    </ul>
    </ul>
    </div>
    
);
};

export default Home;
