import React from 'react';
import PropTypes from 'prop-types';
// import ReactDOM from 'react-dom';

	import TaskActivity from '../activityItem/taskActivity';


const TaskDetails = (details) => {
	console.log(details);
	console.log(details.img);
	console.log(details.activity);
	return (
					<div class={'details ' + details.classes}>
						{(details.img)?<img {...details.img} />:null}
						<h2>Steps:</h2>
						<ol>{details.steps.map((step, i) => <li key={i}>{step}</li>)}
						</ol>
						{(details.activity)?<TaskActivity {...details.activity} />:null}
					</div>);

};


TaskDetails.propTypes = {
	classes: PropTypes.string,
	thumbnail: PropTypes.shape({
		url: PropTypes.string.isRequired,
		alt: PropTypes.string.isRequired,
		caption: PropTypes.string
	}),
	steps: PropTypes.arrayOf(PropTypes.string),
	expand: PropTypes.bool.isRequired,
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
};

export default TaskDetails;