import React, { Component } from 'react'
export default class Message extends Component {
    render (){  
      
        return(
            <div className="auth-inner3">
            <form>
            <div className="title">
              <h3>Contact Seller</h3> 
            </div>
            <label>Send message to: </label>
            <input 
            type="text"
            className="form-control"
            placeholder="Enter seller's name"
            />
             <br></br>
            <label>Date: </label>
            <input 
            type="date"
            className="form-control"
            placeholder="Enter date"
            />
            <br></br>
            <label>Title: </label>
            <input 
            type="text"
            className="form-control"
            placeholder="Enter product's name"
            />
            <br></br>
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
        )
    }
}