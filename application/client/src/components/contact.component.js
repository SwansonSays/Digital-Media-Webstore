/*Olimpia Aguillon
This is a post page specifically to contact the seller.
The page will show all the details of the item 
and if the user wants it will redirect them to message the seller. 
*/

import React, { Component } from 'react';
import NavBar from '../NavBar';
import Footer from "../Footer";

export default class ContactPost extends Component {

    render (){  
        return(
            <div>
                <NavBar />
                {/* This displays the name of the item*/}
                <div className="contact-post">
          
                    <h1>Sunny SF Day </h1>
                    <h5>Image by: Olimpia</h5>
                </div>
                 {/* This tells the user what category it's in and how much it costs */}
                <div className="category-price">
                    <p> Category: Image <br></br> Price: Please Contact Seller </p>
                </div>   
                <div>
            {/* This will redirect users to the messaging page in order to contact the seller */}
                    <span>  
                        <a className= "link-button" href='/message'> Contact Seller </a>                 
                    </span> 
                </div> 
                <div>
                    <img className = "bridge-img" src='./BridgeImg.png' alt="icon"/> 
                </div> 
                <Footer />
            </div>            
        );
    }
}
