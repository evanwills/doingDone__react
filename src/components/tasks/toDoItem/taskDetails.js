import React from 'react';
import PropTypes from 'prop-types';
// import ReactDOM from 'react-dom';

	import TaskActivity from '../activityItem/taskActivity';


const TaskDetails = ({classes, img, steps, activity}) => {
	return (
					<div className={'details ' + classes}>
						{(img)?<img {...img} />:null}
						<h2>Steps:</h2>
						<ol>{steps.map((step, i) => <li key={i}>{step}</li>)}
						</ol>
						{(activity)?<TaskActivity {...activity} />:null}
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