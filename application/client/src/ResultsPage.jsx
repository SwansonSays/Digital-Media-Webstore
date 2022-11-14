/* 
 * File: SearchTest.js
 * Author: Robert Swanson
 * Description: 
 */

import React from "react";
import NavBar from './NavBar'
import PostPage from "./PostPage";
import { useLocation } from "react-router-dom"
import Footer from "./Footer";

const ResultsPage = () => {
	const location = useLocation();

	return (
		<div>
			<NavBar ></NavBar>
			<div className="resultsInfo">
				<div className="resultsNumber">{location.state.length} results found</div>
				<select className="sortBy">
					<option>Sort By</option>
					<option>Price &#8593;</option>
					<option>Price &#8595;</option>
				</select>
			</div>
			<PostPage results={location.state} />
			<Footer />
		</div>
	);
};

export default ResultsPage;
