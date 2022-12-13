/* Olimpia Aguillon
This is the contact seller message page. 
If a user wants an item that is not free they will be redirected to this page 
where they can send a message to the seller. 
The message will have the name of the item the date and the message the user wants to ask. 
*/
import React, {useState} from 'react'
import NavBar from '../NavBar';
import Footer from "../Footer";
import { useNavigate } from 'react-router-dom';
import { uri } from '../util';

const Message = ({post}) => {

    const [date, setDate] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const submitLogin = (e) => {
        console.log("date is: " + date);
        console.log("message is: " + message);

        e.preventDefault();
        
        return fetch(`${uri}/message`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({date, message})
        }).then(response => response.text())
            .then(result => {
                if (result === "success") {
                    window.alert("Message sent");
                    sessionStorage.setItem("date", date, "message", message);
                    if (sessionStorage.getItem("route") !== null) {
                        const route = sessionStorage.getItem("route");
                        sessionStorage.removeItem("route");
                        navigate(route);
                    } else {
                        navigate("/Home");
                    }
                } else {
                    window.alert("Unable to send")
                }
            })
            .catch(e => window.alert(e))
     }
        return (
            <div>
                <NavBar />
                <div className="auth-inner3">
                    <form onSubmit={(e) => submitLogin(e)}>
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
                            onChange={(e) => setDate(e.target.value)}
                            name="date"
                            id="date"
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
                            onChange={(e) => setMessage(e.target.value)}
                            name="message"
                            id="message"
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
export default Message;
