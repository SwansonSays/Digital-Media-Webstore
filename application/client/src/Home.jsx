/* 
 * File: Home.jsx
 * Author: Robert Swanson
 * Description: Home page with description of wesite and displays recent posts
 */
import NavBar from "./NavBar";
import PostPage from "./PostPage";
import Footer from "./Footer";
import React, { useEffect, useState } from 'react';

const Home = () => {
    const [post, setPost] = useState([]);
    useEffect(() => {
        async function PopulateHome() {
            try {
                const response = await fetch('http://localhost:5000/home', {method: 'GET', headers: {'Content-Type': 'application/json'}});
                const parsedResponse = await response.json();
                setPost(parsedResponse);
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
        PopulateHome();
    }, [])


   // function populateHome() {
//        try {
//            const response = await fetch('http://localhost:5000/home', {method: 'GET', headers: {'Content-Type': 'application/json'}});
//            const posts = await response.json();
            
            //setCategoryOptions(parsedResponse);
//        } catch (error) {
//            console.error(error);
//        }        
/*        const posts = [
            { "title": "TestTitle", "description": "Lorem ipsum dolor sit amet, usu eu oblique fabellas maluisset, ne has eros noluisse. Zril fastidii quaestio ne nec. Ne cetero corrumpit assueverit est, sea omnis feugiat ut, cum et latine lucilius argumentum. Soleat nullam principes vix id.", "author": "robby", "path": "/halloween.jpeg", "price": "10.50", "category": "image" },
            { "title": "TestTitle", "description": "testbody", "author": "robby", "path": "/halloween.jpeg", "price": "0.00", "category": "image" },
            { "title": "TestTitle", "description": "testbody", "author": "robby", "path": "/halloween.jpeg", "price": "0.00", "category": "image" },
           { "title": "TestTitle", "description": "testbody", "author": "robby", "path": "/halloween.jpeg", "price": "0.00", "category": "image" },
            { "title": "TestTitle", "description": "testbody", "author": "robby", "path": "/halloween.jpeg", "price": "0.00", "category": "image" },
            { "title": "TestTitle", "description": "testbody", "author": "robby", "path": "/halloween.jpeg", "price": "0.00", "category": "image" },
           { "title": "TestTitle", "description": "testbody", "author": "robby", "path": "/halloween.jpeg", "price": "0.00", "category": "image" },
           { "title": "TestTitle", "description": "testbody", "author": "robby", "path": "/halloween.jpeg", "price": "0.00", "category": "image" }
        ];
        return posts;
        
    }*/

return (
    <div>
        <NavBar></NavBar>
        <br/>
        <h3 className="display-1 home-title"><strong><u>Media Store</u></strong></h3>
        <br/>
        <h4 className="home-description">
            Welcome to Media Store, the one stop shop for all your digital media needs. Here you will find photos, videos, music, and anything else you could wish for to finish your SFSU projects on time and with style.
        </h4>
        <PostPage results={post} />
        <Footer />
    </div>
    
);
};

export default Home;
