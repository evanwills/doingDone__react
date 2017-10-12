import React from 'react';
import taskCompletion from '../taskCompletionLevel';


const interventionLevel = () => {

};

const TaskActivity = (activity) => {
	console.log(activity);
	return (
		<div className={'activity'}>
			<dl>
				<dt>Time:</dt>
					<dd>{activity.completed.toLocaleDateString('en-au')}</dd>
				<dt>Completion level:</dt>
					<dd><taskCompletionLevel level={activity} /></dd>
				<dt>Intervention level:</dt>
					<dd><interventionLevel level={activity} /></dd>
			</dl>
		</div>
	);
};


TaskActivity.propTypes = {
	completionLevel: String,
	completionTIme: Date,
	interventionLevel: String,
	approved: Boolean,
	approver: {
		id: String,
		name: String
	}
}

export default TaskActivity