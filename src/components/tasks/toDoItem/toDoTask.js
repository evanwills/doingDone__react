import React from 'react';
import PropTypes from 'prop-types';
// import ReactDOM from 'react-dom';
// import thumbnail from '../../genericComponents/thumbnail';
import TaskCompletionLevel from '../taskCompletionLevel';
import TaskDetails from './taskDetails';

const FooterDoing = (props) => {
	return (
		<footer>
			<TaskCompletionLevel {...props} />
		</footer>);
};

// const FooterDone = (activity) => {
// 	return (
// 		<footer>
// 			<taskCompletionLevel {...activity} />
// 		</footer>);
// };


const ToDoTask = (props) => {
	return (
			<li>
				<article className={'to-do__item to-do__task status-' + props.status}>
					<input type="checkbox" id={props.id + '-details'} className="show-hide__checkbox" />
					<header>
						<thumbnail img={props.thumbnail} />
						<h1>{props.name}</h1>
						<h2>Due: <time dateTime={props.due}>{props.due.toLocaleTimeString()}</time></h2>
						<label htmlFor={props.id + '-details'} className="show-hide__checkbox--label">
							<span className="show">
								<span className="sr-only">Show details</span>
								<span className="show-hide__checkbox--icon">+</span>
							</span>
							<span className="hide">
								<span className="sr-only">Hide details</span>
								<span className="show-hide__checkbox--icon">-</span>
							</span>
						</label>
					</header>
					<TaskDetails {...props} />
					<FooterDoing {...props}  />
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