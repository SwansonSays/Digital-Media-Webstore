import React, { Component } from 'react';
import NavBar from '../NavBar';
import Footer from "../Footer";

export default class FreePost extends Component {
    render(){
        return(
            <div>
                <NavBar />
                <article className='flex-container'>
                <div className='child-2'>
                        <img className='free-post-image' src= "./Verilogbook.png" alt="icon"/>
                    </div>
                    <div className='child-1'>
                        <h1>Digital Systems Design Using Verilog </h1>
                        <h5>Textbook by: Byeong Kil Lee, Charles H Roth, and Lizy John</h5>

                        <p>Category: Textbook <br></br> Price: Free for Download </p>
                        <button type="button" className="btn btn-primary btn-lg">Download</button> 
                    </div>
                </article>
                {/* <div className='container'>
                <div className="contact-post">
                    
                </div> 
                <br></br>
                <div className="category">
                    
                </div>  
                <div>
                    <span>
                        <button type="button" class="btn btn-primary btn-lg free-button">Download</button>   
                    </span>         
                </div>
                <div>
                     
                </div> 
                </div> */}
                <Footer />
            </div>  
        );
    }
}
