import { Link, useNavigate } from "react-router-dom"
import { useState, useEffect } from 'react';

const NavBar = ({ setSearchResults }) => {
    //const [searchResults, setSearchResults] = useState([]);
    const [category, setCategory] = useState("all");
    const navigate = useNavigate();

    function setCategories() {
        //Categories return from DB goes here
        const categories = { 'categories': ['Audio', 'Video', 'Class'] }; //Hard coded for testing

        const options = []; //Array of <option> to be returned to dropdown

        //Populates options array for each category returned by DB
        for (let i = 0; i <= categories.categories.length - 1; i++) {
            options.push(<option key={i} value={categories.categories[i]}>{categories.categories[i]}</option>);
        }

        return options;
    }

    //Calls setCatergories() on page load
    useEffect(() => {
        setCategories();
    })

    async function handleSubmit(event) {
        event.preventDefault();


        console.log("search term in handlesubmit !" + event.target.searchData.value + "!");
        navigate('/ResultsPage');

        console.log("search term in handlesubmit !" + event.target.searchData.value + "!");
        // prints search value and seletected category to console
        console.log("searched " + event.target.searchData.value + " in category " + category);
        /*
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
        */
        /*
         * TODO: Call to function to search database with "event.target.searchData.value" as the searched text
         *       and "category" as the search category. Search results get saved in "resultsArray" below.
         */


        //array for search results to be displayed
        const resultsArray = [{ "title": "TestTitle", "description": "testbody", "author": "robby", "path": "", "price": "free", "category": "image" }, { "title": "Test 2 Title", "body": "testbody 2", "path": "" }]; //Hard coded search results to test post and postpage

        setSearchResults(resultsArray);
    }


    function handleChange(event) {
        setCategory(event.target.value);
    }
    return (
        <nav className="navbar navbar-sticky-top py-0 bg-white border border-dark">
            <h1 href="/"><Link className="brand" to="/">Media Store</Link></h1>
            <button className="btn btn-lg btn-block nav-link bg-white">About Us</button>
            <form className="searchForm" onSubmit={handleSubmit}>
                <select className="dropdown" onChange={handleChange}>
                    <option value="all">All</option>
                    {setCategories()}
                </select>
                <input
                    type="text"
                    id="search"
                    placeholder="Search..."
                    name="searchData"
                    className="searchBar"
                />
                <button className="searchButton">Search</button>
            </form>
            <Link className="btn btn-lg btn-block nav-link bg-white postButton" to="/">Post</Link>
            <Link className="btn btn-lg btn-block nav-link bg-white logInButton" to="/">Sign in/Register</Link>
        </nav>
    )
}
export default NavBar