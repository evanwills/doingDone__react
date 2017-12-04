import {Model} from 'redux-orm';
import PropTypes from 'prop-types';
import getEnv from 'get-env';



const TimePropType = function(props, propName, componentName) {
	var notString = false
		receivedMsg = '';
	if (typeof props[propName] !== 'string') {
		notString = true;
		receivedMsg = typeof props[propName];
	} else {
		receivedMsg = props[propName];
	}
	if (notString || !/^([01][0-9]|2[0-3]):[0-5][0-9]$/.test(props[propName])) {
		return new Error(
			'Invalid prop `' + propName + '` supplied to' +
			' `' + componentName + '`. Validation failed. Expected a time of day string (HH:MM, e.g. "09:45"). Receied "' +
			receivedMsg + '" instead!'
		);
	}
}
const TimePropTypeNotRequired = function(props, propName, componentName) {
	var typeOfProp = typeof props[propName];
	if (typeOfProp !== 'undefined' && typeOfProp !== null) {
		if (typeOfProp !== 'string' || props[propName] !== '') {
			return TimePropType(props, propName, componentName);
		}
	}
}

// ========================================================
// The following code is taken from 
// https://gist.github.com/tommikaikkonen/45d0d2ff2a5a383bb14d

const env = getEnv();

class ValidatingModel extends Model {
    static _validateProps(props) {
        if (typeof this.propTypes === 'object') {
            forOwn(this.propTypes, (validator, key) => {
                const result = validator(props, key, this.modelName);
                if (result instanceof Error) {
                    throw result;
                }
            });
        }
    }

    static create(props) {
        const defaults = this.hasOwnProperty('defaultProps')
            ? this.defaultProps
            : {};
        const propsWithDefaults = Object.assign({}, defaults, props);

        if (env !== 'prod') {
            this._validateProps(propsWithDefaults);
        }

        return super.create(propsWithDefaults);
    }
};

// ========================================================

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

export class User extends ValidatingModel {};
User.modelName = 'User';
User.propTypes = {
	id: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	// created: PropTypes.instanceOf(Date),
	// updated: PropTypes.instanceOf(Date),
    // YoB: PropTypes.number.isRequired,
	// MoB: PropTypes.number.isRequired,
	active: PropTypes.bool.isRequired,
	approver: PropTypes.bool.isRequired,
    showTimeRemaining: PropTypes.bool.isRequired,
	colour: PropTypes.string.isRequired,
	avatarURL: PropTypes.string.isRequired,
	absentDates: PropTypes.arrayOf(PropTypes.instanceOf(Date)).isRequired
};
User.defaultProps = {
    active: true,
    approver: false,
    showTimeRemaining: true,
    active: true,
	// created: new Date(),
	// updated: new Date()
};

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

export class Tag extends ValidatingModel {};
Tag.modelName = 'Tag';
Tag.backend = {
	idAttribute: 'name'
};
Tag.propTypes = {
	name: PropTypes.string.isRequired
};

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

export class Task extends ValidatingModel {};
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


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

export class Activity extends ValidatingModel {};
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

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

export class AccountLedger extends ValidatingModel {};
AccountLedger.modelName = 'AccountLedger';
AccountLedger.fields = {
	userID: fk('User', 'entries'),
	actiityID: fk('Task', 'entries')
};
AccountLedger.propTypes = {
	id: PropTypes.string.isRequired,
	created: PropTypes.instanceOf(Date),
	userID: PropTypes.string.isRequired,
	activityID: PropTypes.string,
	pointsValue: PropTypes.number.isRequired,
	monetaryValue: PropTypes.number.isRequired
};
Activity.defaultProps = {
	created: new Date()
};

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

export class TaskRotation extends ValidatingModel {};
TaskRotation.modelName = 'TaskRotation';
AccountLedger.propTypes = {
	id: PropTypes.string.isRequired,
	taskID: PropTypes.string.isRequired,
	currentUser: PropTypes.string,
	availableUserIDs: PropTypes.arrayOf(PropTypes.string).isRequired,
	turnTakenUserIDs: PropTypes.arrayOf(PropTypes.string).isRequired
};
