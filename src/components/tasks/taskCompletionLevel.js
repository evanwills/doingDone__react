import React from 'react';
// import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';



const TaskCompletionLevel = (props) => {
	const completionLevels = [
		{levelId: 'notStarted', label: 'Not started'},
		{levelId: 'incomplete', label: 'Incomplete'},
		{levelId: 'complete', label: 'Complete'},
		{levelId: 'excellent', label: 'Excelent'},
	]

	const CompletionLevelItem = (compLevel) => {
		return (
				<li>
					<input type="radio" id={props.id + compLevel.levelId} name={props.id} value={compLevel.levelId} defaultChecked={(props.completionLevel === compLevel.levelId)?`checked="checked"`:null} />
					<label htmlFor={props.id + compLevel.levelId}>{compLevel.label}</label>
				</li>
		);
	}

	return (
		<div className="completionLevel">
			<ul>
				{completionLevels.map((completionLevel) => {
									return {...completionLevel, ...props}
								 }).map((completionLevel, i) =>
									 <CompletionLevelItem key={i} {...completionLevel} />
								 )}
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