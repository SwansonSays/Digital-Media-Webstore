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
        const resultsArray = [{ "id": "1", "title": "TestTitle", "body": "testbody" }, { "id": "2", "title": "Test 2 Title", "body": "testbody 2" }]; //Hard coded search results to test post and postpage

        setSearchResults(resultsArray);
    }

    function handleChange(event) {
        setCategory(event.target.value);
    }

    return (
        <header>
            <form className="search" onSubmit={handleSubmit}>
                <select onChange={handleChange}>
                    <option value="all">All</option>
                    <option value="photo">Photos</option>
                    <option value="music">Music</option>
                    <option value="class">Classes</option>
                    <option value="ebook">eBooks</option>
                </select>
                <input
                    type="text"
                    id="search"
                    placeholder="Search..."
                    name="searchData"
                />
                <button className="searchButton">Search</button>
            </form>
        </header>
        )
}

export default SearchBar