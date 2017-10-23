import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import ToDoList from './components/tasks/toDoList';
import CreateToDoTask from './components/tasks/toDoItem/createToDoTask';
import MainNav from './components/genericComponents/nav';



class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			tasks: [
				{
					id: 'putOnYourSchoolUniform',
					thumbnail: null,
					name: 'Put on your school uniform',
					available: '07:00',
					due: '08:10',
					expand: true,
					img: null,
					steps: [
						'Take off pyjamas',
						'put pyjamas on your bed',
						'put used undies in washing basket',
						'put clean undies on',
						'get school cloths out of draws',
						'put on school cloths'
					],
					monday: true,
					tuesday: true,
					wednesday: true,
					thursday: true,
					friday: true,
					saturday: false,
					sunday: false
				},
				{
					id: 'putOnYourSchoolShoes',
					thumbnail: null,
					name: 'Put on your school shoes',
					available: '07:45',
					due: '08:10',
					img: null,
					steps: [
						'Find socks',
						'Put on socks',
						'Put on shoes'
					],
					monday: true,
					tuesday: true,
					wednesday: true,
					thursday: true,
					friday: true,
					saturday: false,
					sunday: false
				},
				{
					id: 'getToysToTakeToSchool',
					thumbnail: null,
					name: 'Get toys to take to school',
					available: '06:45',
					due: '08:10',
					img: null,
					steps: [
						'Choose toys',
						'Find toys',
						'Put toys in school bag'
					],
					monday: true,
					tuesday: false,
					wednesday: false,
					thursday: false,
					friday: true,
					saturday: false,
					sunday: false
				},
				{
					id: 'putShoesOnShoeShelf',
					thumbnail: null,
					name: 'Put your shoes on the shoe shelf',
					available: '14:45',
					due: '20:00',
					img: null,
					steps: [
						'Put shoes on shoe shelf',
						'If socks are clean put socks in shoes',
						'or put them in the washing basket'
					],
					monday: true,
					tuesday: true,
					wednesday: true,
					thursday: true,
					friday: true,
					saturday: true,
					sunday: true
				},
				{
					id: 'brushYourTeath',
					thumbnail: null,
					name: 'Brush your teath',
					available: '16:45',
					due: '19:45',
					img: null,
					steps: [
						'Get toothbrush',
						'Get toothpaste',
						'Put toothpaste on toothbrush',
						'Put a bit of water on toothbrush',
						'Brush teeth',
						'Swish, swish spit',
						'Swish, swish spit',
						'Clean toothbrush',
						'Put toothbrush away'
					],
					monday: true,
					tuesday: true,
					wednesday: true,
					thursday: true,
					friday: true,
					saturday: false,
					sunday: false
				},
				{
					id: 'putJarmies',
					thumbnail: null,
					name: 'Put on your Jarmies',
					available: '16:30',
					due: '20:00',
					img: null,
					steps: [
						'Get get undressed',
						'Put on your jarmies',
						'Put dirty cloths in basket',
						'Put clean cloths on the end of your bed',
					],
					monday: true,
					tuesday: true,
					wednesday: true,
					thursday: true,
					friday: true,
					saturday: false,
					sunday: false
				},
				{
					id: 'doWeeBeforeBed',
					thumbnail: null,
					name: 'Do a wee before bed',
					available: '19:30',
					due: '20:15',
					img: null,
					steps: [
						'Lift up toilet seat',
						'Do wee',
						'put toilet seat back down'
					],
					monday: true,
					tuesday: true,
					wednesday: true,
					thursday: true,
					friday: true,
					saturday: false,
					sunday: false
				}
			],
			todaysTasks: []
		};
		this.addNewToDoTask = this.addNewToDoTask.bind(this);
		this.addNewToDoActivity = this.addNewToDoActivity.bind(this);
		this.updateTaskCompletionLevel = this.updateTaskCompletionLevel.bind(this);
		this.completeTask = this.completeTask.bind(this);

		this.state = {
			tasks: this.tasks,
			todaysTasks: this.queueDailyTasks(this.state.tasks, new Date(Date()))
		};
	}

	addNewToDoTask(newToDO) {
		// console.log('newToDO: ', newToDO);
		// console.log('newToDO.due: ', newToDO.due);
		// console.log('newToDO.available: ', newToDO.available);
		// console.log('this.state.tasks: ', this.state);
		let tmpTasks = [...this.state.tasks, newToDO];
		// console.log('tmpTasks: ', tmpTasks);
		this.setState(
			{tasks: [...tmpTasks]}
			// ,function () { console.log(this.state.tasks) }
		);
		// console.log('this.state.tasks: ', this.state);
	}

	addNewToDoActivity(taskID, status, user, now) {
		return {
			id: now,
			user: user,
			taskID: taskID,
			status: status,
			completed: now,
			approver: null,
		};
	}

	queueDailyTasks(tasks, now) {
		let today = now.getDay(),
			days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'],
			day = '';

			day = days[today];

		return tasks.filter((task) => task[day]).map((task) => {
			return {
				id: task.id,
				thumbnail: task.thumnail,
				name: task.name,
				available: new Date(Date().replace(/[0-9]{2}(?::[0-9]{2}){2}(?= GMT)/, task.available + ':00')),
				due: new Date(Date().replace(/[0-9]{2}(?::[0-9]{2}){2}(?= GMT)/, task.due + ':00')),
				img: task.img,
				steps: task.steps,
				activity: null,
				status: 'queued',
				completionLevel: 'notStarted',
				expand: false
			}
		}) ;
	}

	updateTaskCompletionLevel(task, level) {
		const newTodaysTasks = this.state.todaysTasks.map((todaysTask) => {
				if (task.id === todaysTask.id) {
					let tmpTask = {...todaysTask};
					todaysTask.completionLevel = level;
					return tmpTask;
				} else {
					return todaysTask;
				}
			}
		);
		this.setState({newTodaysTasks});
	}

	completeTask(task, level) {

	}

	render() {
		// console.log(this.props.params)
		return (
		<div className="App">
		<header className="App-header">
				<h1 className="App-title">Doing Done</h1>
				<MainNav props={this.props} />
			</header>
			{(this.props.location.pathname === '/addToDo')? <CreateToDoTask onNewToDo={this.addNewToDoTask} /> :  <ToDoList tasks={this.state.todaysTasks} filterView={this.props.params.filterView} />}
		</div>
		);
	}
}

export default App;
