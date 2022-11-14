import React from "react";
import NavBar from "./NavBar";
import PostPage from "./PostPage";
import Footer from "./Footer";

const Home = () => {
    function populateHome() {
        const posts = [
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
    }

return (
    <div>
        <NavBar></NavBar>
        <br/>
        <h1 className="display-1 home-title"><strong><u>Media Store</u></strong></h1>
        <br/>
        <h2 className="home-description">
            Welcome to Media Store, the one stop shop for all your digital media needs. Here you will find photos, videos, music, and anything else you could wish for to finish your SFSU projects on time and with style.
        </h2>
        <PostPage results={populateHome()} />
        <Footer />
    </div>
    
);
};

export default Home;
