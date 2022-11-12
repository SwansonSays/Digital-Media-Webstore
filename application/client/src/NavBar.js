import { Link, useNavigate } from "react-router-dom"
import { useState, useEffect } from 'react';

const NavBar = () => {
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
            //setSearchResults(parsedResponse);
            navigate('/ResultsPage', { state: parsedResponse });
        } catch (error) {
            console.error(error)
        }
        */
        //array for search results to be displayed
        const resultsArray = [{ "title": "TestTitle", "description": "testbody", "author": "robby", "path": "/halloween.jpeg", "price": "free", "category": "image" }, { "title": "Test 2 Title", "body": "testbody 2", "path": "/gator.jpeg" }]; //Hard coded search results to test post and postpage

        navigate('/ResultsPage', { state: resultsArray });
    }


    function handleChange(event) {
        setCategory(event.target.value);
    }

    return (
        <nav className="navbar navbar-sticky-top py-0 bg-white border border-dark">
            <h1 href="/"><Link className="brand" to="/">Media Store</Link></h1>
            <Link className="btn btn-lg btn-block nav-link bg-white postButton" to="/AboutUs">About Us</Link>
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
            <Link className="btn btn-lg btn-block nav-link bg-white postButton" to="/Upload">Post</Link>
            <Link className="btn btn-lg btn-block nav-link bg-white logInButton" to="/">Sign in/Register</Link>
        </nav>
    )
}
export default NavBar