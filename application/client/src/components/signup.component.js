/*Olimpia Aguillon 
This is the Signup page.
Users are asked to provide their first and last name, email address, sfsu id number, and password.
Once these fields are provided they will be signed in and have an account.  
*/

import React, { Component } from 'react'
import NavBar from '../NavBar';
import Footer from "../Footer";

export default class Signup extends Component {
    render(){
        return (
            <div>
                <NavBar />
                <form>
                    <div className="auth-wrapper">
                        <div className="auth-inner1">
                            <div className="title">
                                <h3>Sign Up</h3> 
                            </div>
                        <div className="required-fields">
                            <p><small><span className="asterisk"> * </span> Required fields</small></p>
                        </div>
                        {/* This will ask users to enter their first name */}
                            <label>First name<span className="asterisk"> * </span></label>
                            <input
                                type= "text" required
                                className="form-control"
                                placeholder="First name"
                            />
                            <br></br>
                        {/* This will ask users to enter their last name */}
                            <label>Last name<span className="asterisk"> * </span></label>
                            <input
                                type= "text" required
                                className="form-control"
                                placeholder="Last name"
                            />
                            <br></br>
                        {/* This will ask users to enter their sfsu id */}
                            <label>SFSU Id<span className="asterisk"> * </span></label>
                            <input
                                type= "text" required
                                className="form-control"
                                placeholder="Enter id"
                            />
                            <br></br>
                        {/* This will ask users to enter their email address */}
                            <label>Email address<span className="asterisk"> * </span></label>
                            <input
                                type= "email" required
                                pattern=".+@sfsu.edu"
                                className="form-control"
                                placeholder="Enter sfsu email"
                            />
                            <br></br>
                        {/* This will ask users to enter their password */}
                            <label>Password<span className="asterisk"> * </span></label>
                            <input
                                type= "password" required
                                className="form-control"
                                placeholder="Enter password"
                            />
                            <br></br>
                        {/* This will ask users to agree to terms and conditions */}
                            <div className="terms">
                                <input type="checkbox" required/>
                                <label> &nbsp; I agree to the 
                                    <a href="/"> terms and conditions</a>
                                </label>
                                </div>
                            <div className= "submit-button">
                                <button type="submit" className="btn btn-primary">
                                    Submit
                                </button>
                            </div>
                            <br></br>
                        {/* This will redirect users if they already have an account to the login page */}
                        <p className="account">
                            Have an account? <a href='/login' >Login</a> 
                        </p>
                            </div>
                        </div>
                </form>
                <Footer />
            </div>
        )
    }
}