import React from 'react';
import PropTypes from 'prop-types';
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
				<article className={'to-do__item to-do__task status-' + props.status}>
					<input type="checkbox" id={props.id + '-details'} class="show-hide__checkbox" />
					<header>
						<thumbnail img={props.thumbnail} />
						<h1>{props.name}</h1>
						<h2>Due: <time datetime={props.due}>{props.due.toLocaleTimeString()}</time></h2>
						<label for={props.id + '-details'} class="show-hide__checkbox--label">
							<span class="show">
								<span class="sr-only">Show details</span>
								<span class="show-hide__checkbox--icon">+</span>
							</span>
							<span class="hide">
								<span class="sr-only">Hide details</span>
								<span class="show-hide__checkbox--icon">-</span>
							</span>
						</label>
					</header>
					<TaskDetails {...props} />
					{(props.activity !== null)?<footerDone {...props.activity} />:<footerDoing {...props} />}
				</article>
			</li>);
};

export default ToDoTask;


ToDoTask.propTypes = {
	status: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	due: PropTypes.instanceOf(Date).isRequired,
	expand: PropTypes.bool.isRequired,
	thumbnail: PropTypes.shape({
		url: PropTypes.string.isRequired,
		alt: PropTypes.string.isRequired,
		caption: PropTypes.string
	}),
	img: PropTypes.shape({
		url: PropTypes.string.isRequired,
		alt: PropTypes.string.isRequired,
		caption: PropTypes.string
	}),
	steps: PropTypes.arrayOf(PropTypes.string),
	activity: PropTypes.shape({
		completionLevel: PropTypes.string,
		completionTIme: PropTypes.instanceOf(Date),
		interventionLevel: PropTypes.string,
		approved: PropTypes.boolean,
		approver: PropTypes.shape({
			id: PropTypes.string,
			name: PropTypes.string
		})
	})
}