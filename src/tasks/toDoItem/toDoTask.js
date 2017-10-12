import React from 'react';
// import ReactDOM from 'react-dom';
import thumbnail from '../../genericComponents/thumbnail';
import taskCompletionLevel from '../taskCompletionLevel';
import TaskDetails from './taskDetails';

const footerDoing = (props) => {
	return (
		<footer>
			<taskCompletionLevel />
			<button id={props.id} onClick={props.handleComplete}>Done!</button>
		</footer>);
};

const footerDone = (activity) => {
	return (
		<footer>
			<taskCompletionLevel {...activity} />
		</footer>);
};


const ToDoTask = (props) => {
	return (
			<li>
				<article className={'status-' + props.status}>
					<header>
						<thumbnail img={props.thumbnail} />
						<h1>{props.name}</h1>
						<h2>Due: <time datetime={props.due}>{props.due.toLocaleTimeString()}</time></h2>
						<expandButton {...props} />
					</header>
					{(props.expand)?<TaskDetails {...props} />:null}
					{(props.activity !== null)?<footerDone {...props.activity} />:<footerDoing {...props} />}
				</article>
			</li>);
};

export default ToDoTask;


ToDoTask.propTypes = {
	status: String,
	thumbnail: {
		url: String,
		alt: String,
		caption: String
	},
	due: Date,
	expand: Boolean,
	steps: [String],
	activity: {
		completionLevel: String,
		completionTIme: Date,
		interventionLevel: String,
		approved: Boolean,
		approver: {
			id: String,
			name: String
		}
	}
}