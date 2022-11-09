/* 
 * File: SearchBar.js
 * Author: Robert Swanson
 * Description: Search bar component with category pulldown menu
 */

import React, { useEffect, useState } from 'react';


const SearchBar = ({ setSearchResults }) => {
    const [category, setCategory] = useState("all");


    function setCategories() {
        //Categories return from DB goes here
        const categories = { 'categories': ['Audio', 'Video', 'Class'] }; //Hard coded for testing

        const options = []; //Array of <option> to be returned to dropdown

        //Populates options array for each category returned by DB
        for (let i = 0; i <= categories.categories.length - 1; i++) {
            options.push(<option value={categories.categories[i]}>{categories.categories[i]}</option>);
        }
        
        return options;
    }

    //Calls setCatergories() on page load
    useEffect(() => {
        setCategories();
    }, [])

    async function handleSubmit(event) {
        event.preventDefault();
        // prints search value and seletected category to console
        console.log("searched " + event.target.searchData.value + " in category " + category);
        try {
            const response = await fetch('http://localhost:5000/search', {
                method  : 'POST',
                body : JSON.stringify({"book":event.target.searchData.value,"Category":category}),
                headers: { 'Content-Type': 'application/json' }

            })
            //console.log(response)
            const parsedResponse = await response.json();
            console.log(parsedResponse)
            setSearchResults(parsedResponse);
        } catch (error) {
            console.error(error)
        }

        /*
         * TODO: Call to function to search database with "event.target.searchData.value" as the searched text
         *       and "category" as the search category. Search results get saved in "resultsArray" below.
         */


        //array for search results to be displayed
        //const resultsArray = parsedResponse
        //[{"title": "TestTitle", "description": "testbody", "author": "robby", "path": "", "price": "free", "category": "image" }, {"title": "Test 2 Title", "body": "testbody 2", "path": "" }]; //Hard coded search results to test post and postpage

        
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
                    {setCategories()}
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