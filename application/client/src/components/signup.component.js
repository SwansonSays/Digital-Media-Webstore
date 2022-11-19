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
                            <br></br>
                            <label>First name</label>
                            <input
                                type= "text"
                                className="form-control"
                                placeholder="First name"
                            />
                            <br></br>
                            <label>Last name</label>
                            <input
                                type= "text"
                                className="form-control"
                                placeholder="Last name"
                            />
                            <br></br>
                            <label>SFSU Id</label>
                            <input
                                type= "text"
                                className="form-control"
                                placeholder="Enter id"
                            />
                            <br></br>
                            <label>Email address</label>
                            <input
                                type= "email"
                                className="form-control"
                                placeholder="Enter email"
                            />
                            <br></br>
                            <label>Password</label>
                            <input
                                type= "password"
                                className="form-control"
                                placeholder="Enter password"
                            />
                            <div className= "submit-button">
                                <button type="submit" className="btn btn-primary">
                                    Submit
                                </button>
                            </div>
                            <br></br>
                            <div className="terms">
                                <input type="checkbox" />
                                <label> &nbsp; I agree to the 
                                    <a href="/"> terms and conditions</a> &ensp;
                                    Have an account? <a href='/login' >Login</a> 
                                </label>
                            </div>
                        </div>
                    </div>
                </form>
                <Footer />
            </div>
        )
    }
}