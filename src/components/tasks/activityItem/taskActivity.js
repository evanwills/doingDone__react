import React from 'react';
import PropTypes from 'prop-types';
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
	state: PropTypes.string.isRequired,
	completionLevel: PropTypes.string.isRequired,
	completionTIme: PropTypes.instanceOf(Date),
	interventionLevel: PropTypes.string,
	approved: PropTypes.bool.isRequired,
	approver: {
		id: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired
	}
};

export default TaskActivity;