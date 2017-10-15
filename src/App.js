import React, { Component } from 'react';
import logo from './logo.svg';
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
					id: 'evanPutOnSchoolUniform',
					status: 'doing',
					thumbnail: null,
					name: 'Put your school uniform',
					available: new Date('2017-10-15T07:00:00+1100'),
					due: new Date('2017-10-15T08:10:00+1100'),
					expand: true,
					img: '',
					steps: [
						'Take off pyjamas',
						'put pyjamas on your bed',
						'put used undies in washing basket',
						'put clean undies on',
						'get school cloths out of draws',
						'put on school cloths'
					],
					activity: null,
					completionLevel: null
				},
				{
					id: 'evanPutOnSchoolShoes',
					status: 'doing',
					thumbnail: null,
					name: 'Put your school shoes',
					available: new Date('2017-10-15T07:45:00+1100'),
					due: new Date('2017-10-15T08:10:00+1100'),
					expand: true,
					img: '',
					steps: [
						'Find socks',
						'Put on socks',
						'Put on shoes'
					],
					activity: null,
					completionLevel: null
				},
				{
					id: 'evanPutShoesOnShoeShelf',
					status: 'doing',
					thumbnail: null,
					name: 'Put your shoes on the shoe shelf',
					available: new Date('2017-10-15T14:45:00+1100'),
					due: new Date('2017-10-15T18:00:00+1100'),
					expand: true,
					img: '',
					steps: [
						'Put shoes on shoe shelf',
						'If socks are clean put socks in shoes',
						'or put them in the washing basket'
					],
					activity: null,
					completionLevel: null
				},
				{
					id: 'evanBrushYourTeath',
					status: 'doing',
					thumbnail: null,
					name: 'Brush your teath',
					available: new Date('2017-10-15T16:45:00+1100'),
					due: new Date('2017-10-15T19:45:00+1100'),
					expand: true,
					img: '',
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
					activity: null,
					completionLevel: null
				},
				{
					id: 'evanPutJarmies',
					status: 'done',
					thumbnail: null,
					name: 'Put on your Jarmies',
					available: new Date('2017-10-15T16:30:00+1100'),
					due: new Date('2017-10-15T20:00:00+1100'),
					expand: false,
					img: '',
					steps: [
						'Get get undressed',
						'Put on your jarmies',
						'Put dirty cloths in basket',
						'Put clean cloths on the end of your bed',
					],
					activity: {
						completed: new Date('2017-10-15T18:37:52+1100'),
						approved: false,
						completionLevel: 1,
						intervention: null,
						points: null,
						value: null
					},
					completionLevel: null
				},
				{
					id: 'evanDoWeeBeforeBed',
					status: 'doing',
					thumbnail: null,
					name: 'Do a wee before bed',
					available: new Date('2017-10-15T19:30:00+1100'),
					due: new Date('2017-10-15T20:15:00+1100'),
					expand: false,
					img: '',
					steps: [
						'Lift up toilet seat',
						'Do wee',
						'put toilet seat back down'
					],
					activity: null,
					completionLevel: null
				}
			]
		};
		this.addNewToDoTask = this.addNewToDoTask.bind(this);
	}

	addNewToDoTask(newToDO) {
		console.log('newToDO: ', newToDO);
		console.log('this.state.tasks: ', this.state);
		let tmpTasks = [...this.state.tasks, newToDO];
		console.log('tmpTasks: ', tmpTasks);
		this.setState({
			tasks: 	[...tmpTasks]
		},function () { console.log(this.state.tasks) } );
		console.log('this.state.tasks: ', this.state);
	}

	render() {
		// console.log(this.props.params)
		return (
		<div className="App">
		<header className="App-header">
				<h1 className="App-title">Doing Done</h1>
				<MainNav props={this.props} />
			</header>
			{(this.props.location.pathname === '/addToDo')? <CreateToDoTask onNewToDo={this.addNewToDoTask} /> :  <ToDoList tasks={this.state.tasks} filterView={this.props.params.filterView} />}
		</div>
		);
	}
}

export default App;
