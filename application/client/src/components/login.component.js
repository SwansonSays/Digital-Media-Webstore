/*Olimpia Aguillon 
This is the Login page.
Users are asked to provide their email address and password.
Once these fields are provided they will be signed in.  
*/

import React, { Component } from 'react'
import NavBar from '../NavBar';
import Footer from "../Footer";

export default class Login extends Component {
    render(){
        return (
            <div>
                <NavBar />
                <form>
                    <div className="auth-wrapper">
                        <div className="auth-inner">
                            <div className="title">
                                <h3>Sign In</h3> 
                            </div>
                            <div className="required-fields">
                                <p><small><span className="asterisk"> * </span> Required fields</small></p>
                            </div>
                            {/* This will ask users to enter their email address */}
                            <label>Email address<span className="asterisk"> * </span></label>
                            <input 
                                type="email" required
                                pattern=".+@sfsu.edu"
                                className="form-control"
                                placeholder="Enter sfsu email"
                            />
                            <br></br>
                            {/* This will ask users to enter their password*/}
                            <label>Password<span className="asterisk"> * </span></label>
                            <input 
                                type="password" required
                                className="form-control"
                                placeholder="Enter password"
                            />
                            <div className= "submit-button">
                                <button type="submit" className="btn btn-primary">
                                    Submit
                                </button>
                            </div>
                            <br></br>
                            {/* This will redirect users to either the sign up page if they dont have an account 
                             or to the forgot password page if they forgot their password */}
                            <p className="links" >
                                Don't have an account? <a href='/signup' >Sign up</a> &emsp;&emsp;&emsp;&emsp;&ensp;Forgot <a href='/password'>password?</a>
                            </p> 
                        </div>
                    </div>
                </form>
                <Footer />
            </div>
        )
    }
}