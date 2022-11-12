/* 
 * File: SearchTest.js
 * Author: Robert Swanson
 * Description: 
 */

import React from "react";
import NavBar from './NavBar'
import PostPage from "./PostPage";
import { useLocation } from "react-router-dom"

const ResultsPage = () => {
	const location = useLocation();

	function test() {
		console.log(location.state);
		console.log(location.state.length);
    }
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
			<button onClick={ test } >Test</button>
			<PostPage results={location.state} />
		</div>
	);
};

export default ResultsPage;
