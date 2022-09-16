import "./css/App.css";
// importing components from react-router-dom package
import {
BrowserRouter as Router,
Routes,
Route,
} from "react-router-dom";

// import Home component
import Home from "./Home";

// To do add your import once you made your about me page
import Olimpia from "./Olimpia";
import Robert from "./Robert";
import Josef from "./Josef";


function App() {
return (
	<>
  
	{/* This is the alias of BrowserRouter i.e. Router */}
	<Router>
		<Routes>
		{/* This route is for home component
		with exact path "/", in component props
		we passes the imported component*/}
		<Route  path="/" element={<Home/>} />
			
		{/* This route is for about component
		with exact path "/about", in component
		props we passes the imported component*/}


		{/* To do write your own path using your own name */}

		<Route path="/olimpia" element={<Olimpia/>} />
		<Route path="/robert" element={<Robert />} />
		<Route path="/josef" element={<Josef/>} />
    
		</Routes>
	</Router>
	</>
);
}

export default App;
