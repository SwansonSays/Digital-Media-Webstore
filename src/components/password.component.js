import React, { Component } from 'react'
export default class Password extends Component {
    render(){
        return(
            <form>
                <div className="auth-wrapper">
                    <div className="auth-inner2">
                    <div className="title">
                            <h3>Forgot Password?</h3> 
                            <br></br>
                            </div>
                        <label>Email address</label>
                        <input
                        type= "email"
                        className="form-control"
                        placeholder="Enter email"
                        />
                        <div className= "submit-button">
                            <button class="btn btn-primary" onClick={()=>alert('Email has been sent')}>Submit</button>
                        </div>
                        </div>
                        </div>
</form>
        )
    }
}
