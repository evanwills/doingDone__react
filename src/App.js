import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ToDoList from './tasks/toDoList';



class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			tasks: [
				{
					id: 'evanBrushYourTeath',
					status: 'doing',
					thumbnail: null,
					name: 'Brush your teath',
					due: new Date('2017-10-10T19:45:00+1100'),
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
					due: new Date('2017-10-10T20:00:00+1100'),
					expand: false,
					img: '',
					steps: [
						'Get get undressed',
						'Put on your jarmies',
						'Put dirty cloths in basket',
						'Put clean cloths on the end of your bed',
					],
					activity: {
						completed: new Date('2017-10-10T18:37:52+1100'),
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
					due: new Date('2017-10-10T20:00:00+1100'),
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
	}

	render() {
		return (
		<div className="App">
		<header className="App-header">
				<h1 className="App-title">Doing Done</h1>
			</header>
			<ToDoList tasks={this.state.tasks} />
		</div>
		);
	}
}

export default App;
