import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './Login';
import Registration from './Registration';
import Dashboard from './Dashboard';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';

ReactDOM.render(

  <Router>
      <div>
        <Route exact path="/" component={Login} />
        <Route path="/registration" component={Registration} />
        <Router path="/dashboard" component={Dashboard} />
        </div>
  </Router>,
		 
	document.getElementById('root'));
registerServiceWorker();
