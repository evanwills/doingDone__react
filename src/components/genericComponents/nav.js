import React from 'react';
import {Link} from 'react-router';

const MainNav = () => {
	return (
		<nav>
			<ul className="list-unstyled list-inline filter-list">
				<li><Link to="/toDoList" activeClassName={'active'}>List tasks</Link></li>
				<li><Link to="/addToDo" activeClassName={'active'}>Add new tasks</Link></li>
			</ul>
		</nav>
	);
}

export default MainNav;