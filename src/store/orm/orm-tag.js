import {many, fk, oneToOne} from 'redux-orm';
import PropTypes from 'prop-types';
import {ValidatingModel} from './orm-validator';


export class Tag extends ValidatingModel {
	static reducer(state, action, Todo, session) {
        const { payload, type } = action;
        switch (type) {
			case ADD_NEW_TAGS:
			break;
			case UPDATE_TAG:
			break;
			case DELETE_TAG:
			break;
			case ADD_TAGS_TO_TASK:
			break;
			case REMOVE_TAGS_FROM_TASK:
			break;
		}
	}
};
Tag.modelName = 'Tag';
Tag.backend = {
	idAttribute: 'name'
};
Tag.propTypes = {
	name: PropTypes.string.isRequired
};
