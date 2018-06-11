import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Registration.css';

class Registration extends Component {
  render() {
    return (
<div className="Registration">
<header>
Create your Account
</header>
<div className="content">
<form className="form">
<div>
<input type="text" placeholder="User Name" />
</div>
<div>
<input type="email" placeholder="Email" />
</div>
<div>
<input type="password" placeholder="Password" />
</div>
<div className="singup">
<input type="submit" value="Sign Up" />
</div>
<div className="signin">
Already have account. <Link to="/">Sign In</Link>
</div>
</form>
</div>
<footer>
All copyrights are reserved.
</footer>
</div>
    	);
}
}
export default Registration;