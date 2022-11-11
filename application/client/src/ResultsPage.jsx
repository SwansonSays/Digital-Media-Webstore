/* 
 * File: SearchTest.js
 * Author: Robert Swanson
 * Description: 
 */

import React from "react";
import NavBar from './NavBar'
import PostPage from "./PostPage";
import { useState } from 'react';

const ResultsPage = () => {
	const [searchResults, setSearchResults] = useState([]);
	return (
		<div>
			<NavBar setSearchResults={setSearchResults}></NavBar>
			<PostPage searchResults={searchResults} />
		</div>
	);
};

export default ResultsPage;
