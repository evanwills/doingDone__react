import constants from '../meta/constants';
import {sortByDate} from '../utils/utilityFunctions';

export const addSchoolTermAction = (newTerm) => ({
	type: constants.ADD_SCHOOL_TERM,
	payload: newTerm
});


export const updateSchoolTermAction = (updatedTerm) => ({
	type: constants.UPDATE_SCHOOL_TERM,
	payload: updatedTerm
})


// ==================================================================



export const schoolTerms = (state = [], action) => {
	switch(action.type) {
		case constants.ADD_SCHOOL_TERM:
			return sortByDate([...state, action.payload], 'start');
		
		case constants.UPDATE_SCHOOL_TERM:
			return sortByDate(
				state.map(
					(term) => (term.id === action.payload.id) ? {
                        id: action.payload.id,
                        start: action.payload.start,
                        end: action.payload.end,
                        default: false,
					}: term
				),
				'start'
			)
		default:
			return state;
	}
}