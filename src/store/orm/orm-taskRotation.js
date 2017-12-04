import {many, fk, oneToOne} from 'redux-orm';
import PropTypes from 'prop-types';
import {ValidatingModel} from './orm-validator';


class TaskRotation extends ValidatingModel {
	static reducer(state, action, User, session) {
        const { payload, type } = action;
        switch (type) {
			case ADD_NEW_USER_TO_ROTATION:
			break;
			case REMOVE_USER_FROM_ROTATION:
			break;
			case ROTATE_ACTIVE_USER:
			break;

		}
	}
};

TaskRotation.modelName = 'TaskRotation';

TaskRotation.fields = {
	currentUser: fk('User', 'taskRotation'),
	availableUserIDs: many('User', 'taskRotation'),
	turnTakenUserIDs: many('User', 'taskRotation'),
	taskID: oneToOne(Task, 'taskRotation')
}

TaskRotation.propTypes = {
	id: PropTypes.string.isRequired,
	taskID: PropTypes.string.isRequired,
	currentUser: PropTypes.string,
	availableUserIDs: PropTypes.arrayOf(PropTypes.string).isRequired,
	turnTakenUserIDs: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default TaskRotation;