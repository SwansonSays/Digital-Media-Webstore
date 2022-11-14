import React, { Component } from 'react'
export default class Login extends Component {
    render(){
        return(
            <form>
                <div className="auth-wrapper">
                    <div className="auth-inner">
                        <div className="title">
                            <h3>Sign In</h3> 
                        </div>
                    <br></br>
                <label>Email address</label>
                    <input 
                    type="email"
                    className="form-control"
                    placeholder="Enter email"
                    />
                    <br></br>
                <label>Password</label>
                    <input 
                    type="password"
                    className="form-control"
                    placeholder="Enter password"
                    />
                    <div className= "submit-button">
                <button type="submit" className="btn btn-primary">
            Submit
          </button>
                </div>
                <br></br>
            <p className="links" >
          Don't have an account? <a href='/signup' >Sign up</a> &emsp;&emsp;&emsp;&emsp;&ensp;Forgot <a href='/password'>password?</a>
          </p> 
                </div>
                </div>
            </form>
        )
    }
}