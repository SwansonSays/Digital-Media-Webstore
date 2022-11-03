/* 
 * File: SearchBar.js
 * Author: Robert Swanson
 * Description: Search bar component with category pulldown menu
 */

import React, { useState } from 'react';

const SearchBar = ({ setSearchResults }) => {
    const [category, setCategory] = useState("all");

    function handleSubmit(event) {
        event.preventDefault();
        // prints search value and seletected category to console
        console.log("searched " + event.target.searchData.value + " in category " + category);

        /*
         * TODO: Call to function to search database with "event.target.searchData.value" as the searched text
         *       and "category" as the search category. Search results get saved in "resultsArray" below.
         */


        //array for search results to be displayed
        const resultsArray = [{"title": "TestTitle", "description": "testbody", "author": "robby", "path": "", "price": "free", "category": "image" }, {"title": "Test 2 Title", "body": "testbody 2", "path": "" }]; //Hard coded search results to test post and postpage

        setSearchResults(resultsArray);
    }

    function handleChange(event) {
        setCategory(event.target.value);
    }

    return (

        <header>
            <div class="search">
            <form class="searchForm"className="search" onSubmit={handleSubmit}>
                <select class="dropdown" onChange={handleChange}>
                    <option value="all">All</option>
                    <option value="image">Image</option>
                    <option value="video">Video</option>
                    <option value="class">Class</option>
                </select>
                <input
                    type="text"
                    id="search"
                    placeholder="Search..."
                    name="searchData"
                    class="searchBar"
                />
                <button class='searchButton' className="searchButton">Search</button>
            </form>
            </div>

        
        </header>
        )
}

export default SearchBar