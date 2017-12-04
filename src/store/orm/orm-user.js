import {many, fk, oneToOne} from 'redux-orm';
import PropTypes from 'prop-types';
import {ValidatingModel} from './orm-validator';

class User extends ValidatingModel {
	static reducer(state, action, User, session) {
        const { payload, type } = action;
        switch (type) {
			case ADD_USER:
			break;
			case UPDATE_USER:
			break;
			case DELETE_USER:
			break;
		}
	}
};
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

export default User;