import {many, fk, oneToOne} from 'redux-orm';
import PropTypes from 'prop-types';
import {ValidatingModel} from './orm-validator';


class Activity extends ValidatingModel {
	static reducer(state, action, User, session) {
        const { payload, type } = action;
        switch (type) {
			case ADD_NEW_ACTIVITY:
			break;
			case COMPLETE_ACTIVITY:
			break;
			case ACKNOWLEDGE_ACTIVITY:
			break;
			case ARCHIVE_ACTIVITY:
			break;
			case UPDATE_ACTIVITY:
			break;
			case DELETE_ACTIVITY:
			break;
		}
	}
};

Activity.modelName = 'Activity';

Activity.fields = {
	userID: fk('User', 'activities'),
	taskID: fk('Task', 'activities')
};

Activity.propTypes = {
	id: PropTypes.string.isRequired,
	rawID: PropTypes.string.isRequired,
	userID: PropTypes.string.isRequired,
	taskID: PropTypes.string.isRequired,
	// created: PropTypes.instanceOf(Date),
	// updated: PropTypes.instanceOf(Date),
	completed: PropTypes.instanceOf(Date),
	acknowledged: PropTypes.instanceOf(Date),
    pointsToCurrency: PropTypes.number.isRequired,
	scheduleStatus: PropTypes.string.isRequired,
	activityStatus: PropTypes.string.isRequired,
	acknowledgedBy: PropTypes.string,
	acknowledgementNotes: PropTypes.string,
	completionLevel: PropTypes.string,
	completionValue: PropTypes.number,
	interventionLevel: PropTypes.string,
	interventionValue: PropTypes.number,
	computedValue: PropTypes.number,
	doerNotes: PropTypes.string,
	ignoreTime: PropTypes.bool,
	required: PropTypes.bool,
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
	value: PropTypes.number.isRequired,
	pointsToCurrency: PropTypes.number.isRequired
};

Activity.defaultProps = {
	// created: new Date(),
	// updated: new Date(),
	ignoreTime: true,
	required: true,
	scheduleStatus: 'Queued',
	activityStatus: 'Not started'
};


export default Activity;