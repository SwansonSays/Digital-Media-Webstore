/* Olimpia Aguillon
This is the contact seller message page. 
If a user wants an item that is not free they will be redirected to this page 
where they can send a message to the seller. 
The message will have the name of the item the date and the message the user wants to ask. 
*/

import React, { Component } from 'react'
import NavBar from '../NavBar';
import Footer from "../Footer";

export default class Message extends Component {
    render (){  
      
        return (
            <div>
                <NavBar />
                <div className="auth-inner3">
                    <form>
                        <div className="title">
                            <h3>Contact Seller</h3> 
                        </div>
                        {/* This will ask users to enter the sellers name*/}
                        <label>Send message to: </label>
                        <input 
                            type="text"
                            className="form-control"
                            value="Olimpia"
                        />
                        <br></br>
                        {/* This will display the date */}
                        <label>Date: </label>
                        <input 
                            type="date"
                            className="form-control"
                            placeholder="Enter date"
                        />
                        <br></br>
                        {/* This will display the name of the item */}
                        <label>Title: </label>
                        <input 
                            type="text"
                            className="form-control"
                            value="Sunny SF Day"
                        />
                        <br></br>
                        {/* This will be the place the user will write their message */}
                        <label>Message: </label>
                        <input 
                            type="text"
                            className="form-control"
                            placeholder="Write message"
                        />
                        <div className= "submit-button">
                            <button type="submit" className="btn btn-primary">
                                Send
                            </button>
                        </div>   
                    </form>   
                </div>
                <Footer />
            </div>
        )
    }
}