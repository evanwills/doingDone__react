import React from 'react';
// import ReactDOM from 'react-dom';

	import TaskActivity from '../activityItem/taskActivity';


const TaskDetails = (details) => {
	console.log(details);
	console.log(details.img);
	console.log(details.activity);
	return (
					<div class="details {details.classes}">
						{(details.img)?<img {...details.img} />:null}
						<h2>Steps:</h2>
						<ol>{details.steps.map((step, i) => <li key={i}>{step}</li>)}
						</ol>
						{(details.activity)?<TaskActivity {...details.activity} />:null}
					</div>);

}

export default TaskDetails


TaskDetails.propTypes = {
	classes: String,
	thumbnail: {
		url: String,
		alt: String,
		caption: String
	},
	steps: [String],
	expand: Boolean,
	activity: TaskActivity
}