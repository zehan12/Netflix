import React from 'react'
import "../stylesheets/Signin.css"
import {Link} from "react-router-dom"

class Signin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email : "",
            password : "",
            errors : {
                email : "",
                password : ""
            }
        }
    }

     validateEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
      }

    handleInput = ({target}) => {
        let {name , value } = target;
        let errors = this.state.errors;
        
        switch (name) {
            case "email" : 
            errors.email = this.validateEmail(value) ? "" : "Email is not valid!"
            break;
            case "password" : 
            errors.password = value.length < 6  ? "Password should not less than 6 characters" : ""
            break;

        }

        this.setState({
           errors, [name] : value
        })
    }

    // handleSubmit = () => {
    //     if(this.state.email === "" && this.state.password === "") {
    //         alert("Email and password is required")
    //     }
    // }

    handleClick = () => {
        if(this.state.email === "" && this.state.password === "") {
            alert("Email and password is required")
        }
    }

    render() {
        let {email, password} = this.state.errors; 
        let emailInp = this.state.email;
        let passInp = this.state.password; 
        return (
            <div className="body-sing">
                <div class="wrapper-sign">
            <div class="header-sign">
                <div class="logo-sign">
                    <img src="/images/logo (1).png" alt="logo" />
                </div>
            </div>
            <div class="login-body">
                <div class="login-class">
                    <h2>Sign In</h2>
                    <form>
                        <div class="input-wrap">
                            <input type="email" className={email && "error"} onChange={this.handleInput} value={this.state.email} name="email" placeholder="Enter your email" />
                            <span className="error_span">{email}</span>
                        </div>
                        <div class="input-wrap">
                            <input type="password" className={password && "error"} onChange={this.handleInput} value={this.state.password} name="password"  placeholder="Password" />
                            <span className="error_span">{password}</span>
                        </div>
                        <div class="input-wrap">
                          {
                              emailInp && passInp ?  <Link to="/main">
                              <button  onClick={this.handleClick} className="sign_in_btn">Sign In</button>
                              </Link> : <Link to="/signin" ><button  onClick={this.handleClick} className="sign_in_btn">Sign In</button></Link>
                          }
                        </div>
                            <div class="support">
                                <div class="remember">
                                    <span>
                                        <input type="checkbox" />
                                    </span>
                                    <span>Remember me</span>
                                </div>
                                <div class="need-help">
                                    Need help ?
                                </div>
                                
                            </div>
                            <div class="login-footer">
                                <div class="login-facebook">
                                    <span> <img src="/images/fb.png" alt="fb" /> </span>
                                    <span> <a href="#"> Login With Facebook </a> </span>
                                </div>
                                <div class="sign-up">
                                    <p>New to Netflex? <a href="#"> Sign up now. </a> </p>
                                </div>
                                <div class="term">
                                    <p>This page is protected by Google reCAPTCHA to ensure you're not a bot
                                        <a href="#" >Learn more.</a>
                                    </p>
                                </div>
                            </div>
                    </form>
                </div>
            </div>
        </div>
            </div>
        )
    }
}

export default Signin
