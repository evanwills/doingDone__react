import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import ToDoList from './components/tasks/toDoList';
import CreateToDoTask from './components/tasks/toDoItem/createToDoTask';
import MainNav from './components/genericComponents/nav';


/*
Routes:
	/[user]/[listing]/[filter]
	/admin/create/[type]
	/admin/update/[type]/id
*/


class App extends Component {
	constructor(props) {
		super(props);

		// this.addNewToDoTask = this.addNewToDoTask.bind(this);
		// this.addNewToDoActivity = this.addNewToDoActivity.bind(this);
		// this.updateTaskCompletionLevel = this.updateTaskCompletionLevel.bind(this);
		// this.completeTask = this.completeTask.bind(this);

		// this.state = {
		// 	tasks: this.tasks,
		// 	todaysTasks: this.queueDailyTasks(this.state.tasks, new Date(Date()))
		// }
	}

	// {(this.props.location.pathname === '/addToDo')?
	// 	<CreateToDoTask onNewToDo={this.addNewToDoTask} /> :
	// 	<ToDoList tasks={this.state.todaysTasks} filterView={this.props.params.filterView} />
	// }

	render() {
		// console.log(this.props.params)
		return (
		<div className="App">
			<header className="App-header">
				<h1 className="App-title">Doing Done</h1>
				<MainNav props={this.props} />
			</header>
		</div>
		);
	}
}

export default App;
