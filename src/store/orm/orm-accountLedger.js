import {many, fk, oneToOne} from 'redux-orm';
import PropTypes from 'prop-types';
import {ValidatingModel} from './orm-validator';


class AccountLedger extends ValidatingModel {
	static reducer(state, action, User, session) {
        const { payload, type } = action;
        switch (type) {
			case CREATE_ENTRY:
			break;
			case UPDATE_ACTIVITY:
			break;
			case CORRECT_EXISTING_ENTRY:
			break;
		}
	}
};

AccountLedger.modelName = 'AccountLedger';

AccountLedger.fields = {
	authorisingUserID: fk('User', 'entries'),
	userID: fk('User', 'entries'),
	activityID: fk('Task', 'entries'),
	originalEntry: fk('AccountLedger', 'entries')
};

AccountLedger.propTypes = {
	id: PropTypes.string.isRequired,
	created: PropTypes.instanceOf(Date),
	entryType: PropTypes.string.isRequired,
	authorisingUserID: PropTypes.string.isRequired,
	userID: PropTypes.string.isRequired,
	activityID: PropTypes.string,
	pointsValue: PropTypes.number.isRequired,
	monetaryValue: PropTypes.number.isRequired,
	originalEntry: PropTypes.string
};

AccountLedger.defaultProps = {
	created: new Date()
};


export default AccountLedger;