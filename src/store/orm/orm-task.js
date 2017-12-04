import {many, fk, oneToOne} from 'redux-orm';
import PropTypes from 'prop-types';
import {ValidatingModel, TimePropType, TimePropTypeNotRequired} from './orm-validator';

class Task extends ValidatingModel {
	static reducer(state, action, Todo, session) {
        const { payload, type } = action;
        switch (type) {
			case ADD_NEW_TASK:
			break;
			case UPDATE_TASK:
			break;
			case DELETE_TASK:
			break;
			case ADD_TAGS_TO_TASK:
			break;
			case REMOVE_TAGS_FROM_TASK:
			break;
		}
	}
};

Task.modelName = 'Task';

Task.fields = {
	tags: many('Tag', 'tasks'),
	users: many('User', 'tasks'),
	rotation: oneToOne(TaskRotation, 'tasks')
};

Task.propTypes = {
	id: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	thumbnail: PropTypes.string.isRequired,
	// created: PropTypes.instanceOf(Date),
	// updated: PropTypes.instanceOf(Date),
    available: TimePropType,
    due: TimePropType,
    extendedEndTime: TimePropTypeNotRequired,
	priority: PropTypes.number,
	active: PropTypes.bool,
	required: PropTypes.bool,
	canCompleteBefore: PropTypes.bool,
	monday: PropTypes.bool,
	tuesday: PropTypes.bool,
	wednesday: PropTypes.bool,
	thursday: PropTypes.bool,
	friday: PropTypes.bool,
	saturday: PropTypes.bool,
	sunday: PropTypes.bool,
	schoolTerm: PropTypes.bool,
	schoolHolidays: PropTypes.bool,
	publicHolidays: PropTypes.bool,
	atHome: PropTypes.bool,
	away: PropTypes.bool,
	steps: PropTypes.arrayOf(PropTypes.shape({
		text: PropTypes.string.isRequired,
		src:  PropTypes.string
	})).isRequired,
	extraSteps: PropTypes.arrayOf(PropTypes.shape({
		text: PropTypes.string.isRequired,
		src:  PropTypes.string
	})),
	valueModifiers: PropTypes.shape({
		completionLevel: PropTypes.shape({
			Not: PropTypes.number.isRequired,
			Outstandingly: PropTypes.number.isRequired
		}),
		interventionLevel: PropTypes.shape({
			Volunteered: PropTypes.number.isRequired,
			Prompted: PropTypes.number.isRequired,
			Coerced: PropTypes.number.isRequired,
			Battled: PropTypes.number.isRequired
		}),
		overdue: PropTypes.number.isRequired
	}),
	rotatingID: PropTypes.string,
	value: PropTypes.number.isRequired,
};

Task.defaultProps = {
    active: true,
    extendedEndTime: null,
	// created: new Date(),
	// updated: new Date(),
	priority: 10,
	value: 1,
	overNight: false,
	required: true,
	canCompleteBefore: true,
	monday: true,
	tuesday: true,
	wednesday: true,
	thursday: true,
	friday: true,
	saturday: true,
	sunday: true,
	schoolTerm: true,
	schoolHolidays: true,
	publicHolidays: true,
	atHome: true,
	away: true
};

export default Task;