import "./App.css";
// importing components from react-router-dom package
import {
BrowserRouter as Router,
Routes,
Route,
} from "react-router-dom";

// import Home component
import Home from "./Home";

// To do add your import once you made your about me page
import FreePost from "./components/free.component"

import ContactPost from "./components/contact.component"

import Login from "./components/login.component"
import Signup from "./components/signup.component";
import Password from "./components/password.component";
import Message from "./components/message.component";

function App() {
return (
	<>
  
	{/* This is the alias of BrowserRouter i.e. Router */}
	<Router>
		<Routes>
			
		{/* This route is for home component
		with exact path "/", in component props
		we passes the imported component */}
		<Route  path="/" element={<Home/>} />
			
		{/* This route is for about component
		with exact path "/about", in component
		props we passes the imported component*/}


		{/* To do write your own path using your own name */}

		<Route path="/FreePost" element={<FreePost/>} />

		<Route path = "/ContactPost" element={<ContactPost/>}/>

		<Route path ="/Login" element={<Login/>}/>

		<Route path ="/Signup" element={<Signup/>}/>

		<Route path="/Password" element={<Password/>}/>

		<Route path="/Message" element={<Message/>}/>
	
	
		</Routes>
	</Router>
	</>
);
}

export default App;
