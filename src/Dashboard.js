import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

class Dashboard extends Component {
  render() {
    return (
<div className="Dashboard">
<header>
Welcome to Dashboard.
</header>
<div className="dashboard-form">
<form className="container">
<div className="taskName">
<input type="text" placeholder="Task Name" required />
</div>
<div className="date">
<input type="date" placeholder="Date" required />
</div>
<div className="Description">
<input type="text" placeholder="Description" required />
</div>
<button>Add Todo</button>
<button>Update</button>
<input type="reset" value="Reset" />
</form>
</div>
<div className="Table">
<table>
<tr>
<th>Task Name</th>
<th>Date</th>
<th>Description</th>
<th>Edit</th>
<th>Delete</th>
</tr>
<tr>
<td>x</td>
<td>x</td>
<td>x</td>
<td><button>Edit</button></td>
<td><button>Delete</button></td>

</tr>

</table>

</div>
<footer>
All copyrights are reserved.
</footer>
</div>


    	);
}
}

export default Dashboard;