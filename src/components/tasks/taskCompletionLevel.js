import React from 'react';
// import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';



const TaskCompletionLevel = (props) => {
	const completionLevels = [
		{id: 'notStarted', label: 'Not started'},
		{id: 'incomplete', label: 'Incomplete'},
		{id: 'complete', label: 'Complete'},
		{id: 'excellent', label: 'Excelent'},
	]
	const id = props.id;
	console.log(props);

	const CompletionLevelItem = (compLevel) => {
		return (
				<li>
					<input type="radio" id={id + compLevel.id} name={id} value={compLevel.id} />
					<label htmlFor={id + compLevel.id}>{compLevel.label}</label>
				</li>
		);
	}

	return (
		<div className="completionLevel">
			<ul>
				{completionLevels.map((completionLevel, i) => <CompletionLevelItem key={i} {...completionLevel} />)}
			</ul>
			{(props.status !== 'Approved')?<button>Done!</button>:<button>Approve</button>}
		</div>);
}

TaskCompletionLevel.PropTypes = {
	id: PropTypes.string.isRequired,
	status: PropTypes.string.isRequired,
	level: PropTypes.string
}

export default TaskCompletionLevel