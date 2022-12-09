/* 
 * File: NavBar.js
 * Author: Robert Swanson
 * Description: NavBar for webapp with search functionality and links to About Us, Post,
 *              Dashboard, Sign in, and register. And contains disclaimer that this is student
 *              project
 */
import { Link, useNavigate } from "react-router-dom"
import { useEffect,useState } from 'react';

const NavBar = () => {
    const [category, setCategory] = useState("all");
    const navigate = useNavigate();
/*
    function setCategories() {
        //Categories return from DB goes here
        const categories = { 'cat': ['Audio', 'Video','Image', 'Class'] }; //Hard coded for testing
        /*
        const options = []; //Array of <option> to be returned to dropdown

        //Populates options array for each category returned by DB
        for (let i = 0; i <= categories.cat.length - 1; i++) {
            options.push(<option key={i} value={categories.cat[i]}>{categories.cat[i]}</option>);
        }
        
        const options = categories.cat.map((cat, index) => <option key={index} value={cat}>{cat}</option>)

        return options;
    }
    */
    const [categoryOptions, setCategoryOptions] = useState([]);
 
    //Calls setCatergories() on page load
    useEffect(() => {
        async function setCategories() {
            try {
                const response = await fetch('http://localhost:5000/categories', {method: 'GET', headers: {'Content-Type': 'application/json'}});
                const parsedResponse = await response.json();
                setCategoryOptions(parsedResponse);
            } catch (error) {
                console.error(error);
            }
            //Categories return from DB goes here
            // const categories = { 'categories': ['Audio', 'Video', 'Class'] }; //Hard coded for testing
     
            // const options = []; //Array of <option> to be returned to dropdown
     
            // //Populates options array for each category returned by DB
            // for (let i = 0; i <= categories.categories.length - 1; i++) {
            //     options.push(<option value={categories.categories[i]}>{categories.categories[i]}</option>);
            // }
            
            // return options;
        }
        setCategories();
    }, [])   

    function checkLogin() {
        //sessionStorage.setItem("loggedIn", "true");
        //sessionStorage.removeItem("loggedIn");
        var loggedIn = sessionStorage.getItem("loggedIn");

        if (loggedIn === "true") {
            return  <div className="nav-right">
                        <Link className="btn btn-lg btn-block nav-link bg-white nav-loggedin" to="/Upload">Post</Link>
                        <Link className="btn btn-lg btn-block nav-link bg-white nav-loggedin" to="/Dashboard">DashBoard</Link>
                        <Link className="btn btn-lg btn-block nav-link bg-white nav-loggedin" to="/Home" onClick={ logout }>Logout</Link>
                    </div>
        } else {
            return  <div className="nav-right">
                        <Link className="btn btn-lg btn-block nav-link bg-white nav-loggedout" to="/Upload">Post</Link>
                        <Link className="btn btn-lg btn-block nav-link bg-white nav-loggedout" to="/Login">Sign in</Link>
                        <Link className="btn btn-lg btn-block nav-link bg-white nav-loggedout" to="/Signup">Register</Link>
                    </div>;
        }
    }

    function logout() {
        sessionStorage.removeItem("loggedIn");
    }

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
            //setSearchResults(parsedResponse);
            navigate('/ResultsPage', { state: parsedResponse });
        } catch (error) {
            console.error(error)
        }
/*        
        //array for search results to be displayed
        const resultsArray = [{ "title": "TestTitle", "description": "testbody", "author": "robby", "path": "/halloween.jpeg", "price": "free", "category": "image" }, { "title": "Test 2 Title", "body": "testbody 2", "path": "/gator.jpeg" }]; //Hard coded search results to test post and postpage

        navigate('/ResultsPage', { state: resultsArray });
        */
    }


    function handleChange(event) {
        setCategory(event.target.value);
    }
    function renderRemainingOptions() {
        if (categoryOptions.length === 0)
            return;
        
        return categoryOptions.map((value, index) => (
            <option value={value} key={`${value}_${index}`}>{value}</option>
        ))
    }

    return (
        <nav className="navbar py-0 bg-white border border-dark fixed-top">
            <div className="nav-disclaimer">
                <p>SFSU Software Engineering Project CSC 648-848, Fall 2022. For Demonstration Only</p>
            </div>
            <div className="nav-content">
                <div className="nav-left">
                    <h1 href="/"><Link className="brand nav-brand" to="/">Media&nbsp;Store</Link></h1>
                    <Link className="btn btn-lg btn-block nav-link bg-white nav-button" to="/AboutUs">About Us</Link>
                </div>
                <form className="searchForm" onSubmit={handleSubmit}>
                    <select className="dropdown" onChange={handleChange}>
                        <option value="all">All</option>
                        {/*setCategories()*/}
                        {renderRemainingOptions()}
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
                { checkLogin() }
            </div>
        </nav>
    )
}
export default NavBar