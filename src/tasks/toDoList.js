import React from 'react';
// import ReactDOM from 'react-dom';
import ToDoTask from './toDoItem/toDoTask';

// const filter = (mode) => {
// };

// const handleFilterClick = (mode) => {
// };

// const completedTaskCount = (tasks) => {
// };

// const currentTaskCount = (tasks) => {
// }


// filter options
// <ul className='filter'>
	// <li>
	// 	<a onClick={handleFilterClick('all')}>All</a>
	// </li>
	// <li>
	// 	<a onClick={handleFilterClick('done')}>Done</a>
	// </li>
	// <li>
	// 	<a onClick={handleFilterClick('now')}>Now</a>
	// </li>
	// <li>
	// 	<a onClick={handleFilterClick('past')}>Past</a>
	// </li>
	// <li>
	// 	<a onClick={handleFilterClick('future')}>Future</a>
	// </li>
// </ul>

// basic stats
// <footer>
	// <div><strong>Total:</strong> {tasks.length}</div>
	// <div>Now: {currentTaskCount(tasks)}</div>
	// <div>Complete: {completedTaskCount(tasks)}</div>
// </footer>

const ToDoList = ({tasks}) => {
	return (
		<section className='todo-list'>
			<header>
				<h1>Tasks to do</h1>
			</header>
			<ul>
				{tasks.map((task, i) =>
					<ToDoTask	key={i}
								{...task} />
				)}
			</ul>
		</section>);
}

export default ToDoList


ToDoList.propTypes = {
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
