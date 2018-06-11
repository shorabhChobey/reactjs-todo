import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

class Login extends Component {
  render() {
    return (
      <div className="Login">
       <header className="header">
       Login Your Account
       </header>
       <div className="content">
       <form className="form">
       
       <div>
       <input type="email" placeholder="Email" required/>
       </div>
       <div>
       <input type="password" placeholder="Password" required/>
       </div>
       <div>
       <input type="submit" value="Sign Up" />
       </div>
       <div className="forget">
       Forget Password?
       </div>
       <div className="Signup">
       Create a new account  <Link to="/registration">Sign up</Link>
       
       </div>
       </form>
       </div>
       <footer className="footer">
       All copyrights are reserved
       </footer>
      </div>
    );
  }
}

export default Login;
