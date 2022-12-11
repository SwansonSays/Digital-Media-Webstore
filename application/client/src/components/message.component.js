/* Olimpia Aguillon
This is the contact seller message page. 
If a user wants an item that is not free they will be redirected to this page 
where they can send a message to the seller. 
The message will have the name of the item the date and the message the user wants to ask. 
*/

import React, { Component } from 'react'
import NavBar from '../NavBar';
import Footer from "../Footer";


async function handleUploadImage(event) {
    event.preventDefault();

    const message_data = JSON.stringify({"message_reciever" : event.target[0].value, 
                                         "date" : event.target[1].value,
                                         "title" : event.target[2].value,
                                         "message" : event.target[3].value,
                                         "email": sessionStorage.getItem("email")
                                        })

    try {
        const response = await fetch('http://localhost:5000/contact' , {
            method : "POST",
            body : message_data,
            headers: { 'Content-Type': 'application/json' }
        })
        const parsedResponse = await response.json();
        console.log(parsedResponse)
    } catch (error) {
        console.log(error)
    }

    


}

export default class Message extends Component {

    render (){  
      
        return (
            <div>
                <NavBar />
                <div className="auth-inner3">
                    <form onSubmit={handleUploadImage}>
                        <div className="title">
                            <h3>Contact Seller</h3> 
                        </div>
                        {/* This will ask users to enter the sellers name*/}
                        <label>Send message to: </label>
                        <input 
                            type="text"
                            className="form-control"
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