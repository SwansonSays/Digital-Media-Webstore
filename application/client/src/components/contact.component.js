import React, { Component } from 'react';

export default class ContactPost extends Component {

    render (){  
      
        return(
            <div>
         <div className="contact-post">
          
        <h1>Sunny SF Days </h1>
        <h5>Image by: Olimpia</h5>
        </div>
        <br></br>
        <div className="category-price">
        <p> Category: Image <br></br> Price: Please Contact Seller </p>
      </div>   
      <div>
        <span>  
       <a className= "test" href='/message'> Contact Seller </a>                 
 </span> 
 </div> 
      <div>
        <img className = "bridge-img" src='./BridgeImg.png' alt="icon"/> 
      </div> 
     
        </div>            
 );

    }
}
