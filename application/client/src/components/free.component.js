import React, { Component } from 'react';

export default class FreePost extends Component {
    render(){
        return(
            <div>
            <div className="contact-post">
        <h1>Digital Systems Design Using Verilog </h1>
        <h5>Textbook by: Byeong Kil Lee, Charles H Roth, and Lizy John</h5>
       </div> 
       <br></br>
        <div className="category">
        <p>Category: Textbook <br></br> Price: Free for Download </p>
       </div>  
       <div>
        <span>
         <button type="button" class="btn btn-primary btn-lg">Download</button>   
            </span>         
        </div>
       <div>
        <img className= "book-img" src= "./Verilogbook.png" alt="icon"/> 
        </div> 
       
            </div>  
    );
    }
}
