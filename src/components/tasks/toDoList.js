import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';
// import ReactDOM from 'react-dom';
import ToDoTask from './toDoItem/toDoTask';

// basic stats
// <footer>
	// <div><strong>Total:</strong> {tasks.length}</div>
	// <div>Now: {currentTaskCount(tasks)}</div>
	// <div>Complete: {completedTaskCount(tasks)}</div>
// </footer>

const ToDoList = ({tasks, filterView}) => {

	const now = new Date();
	console.log('49 - filterView: ', filterView);

	const filteredTasks = tasks.filter((task, i, all) => {

		let midnightBefore = new Date(now.getUTCFullYear() + '-' + (now.getUTCMonth() + 1) + '-' + now.getUTCDate() + 'T00:00:00'),
			 midnightAfter = new Date(now.getUTCFullYear() + '-' + (now.getUTCMonth() + 1) + '-' + now.getUTCDate() + 'T23:59:59')

		console.log('-----------------------------');
		console.log('ID: ', task.id);
		console.log('now: ', now);
		console.log('midnightBefore: ', midnightBefore);
		console.log('midnightAfter: ', midnightAfter);
		console.log('available: ', task.available);
		console.log('due: ', task.due);
		console.log()
		console.log('-----------------------------');

		if ( (task.available > midnightBefore && task.due < midnightAfter) && (
			 filterView === 'all' ||
			(filterView === 'future' && now < task.available) ||
			(filterView === 'done' && task.activity !== null && task.activity.completed !== null) ||
			((!filterView || filterView === 'now') && (now > task.available && now < task.due)))) {
			return true;
		} else {
			return false;
		}
	});

	return (
		<section className='todo-list'>
			<header>
				<h1>Tasks to do</h1>
				<nav>
					<ul class="list-unstyled list-inline filter-list">
						<li><Link to="/toDoList/current" activeClassName={'active'}>Now</Link></li>
						<li><Link to="/toDoList/future" activeClassName={'active'}>Coming</Link></li>
						<li><Link to="/toDoList/done" activeClassName={'active'}>Done</Link></li>
						<li><Link to="/toDoList/all" activeClassName={'active'}>All</Link></li>
					</ul>
				</nav>
			</header>
			<ul class="list-unstyled to-do-list">
				{filteredTasks.map((task, i) =>
					<ToDoTask	key={i}
								{...task} />
				)}
			</ul>
		</section>);
}

export default ToDoList


ToDoList.PropTypes = {
	tasks: function(props) {
		if(!Array.isArray(props.tasks)) {
			return new Error("Tasks must be an array")
		} else if(!props.tasks.length) {
			return new Error("Tasks must have at least one record")
		} else {
			return null
		}
	}
}
