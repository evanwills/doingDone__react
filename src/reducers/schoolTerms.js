import constants from '../meta/constants';

export const addSchoolTermAction = (newTerm) => ({
	type: constants.ADD_SCHOOL_TERM,
	payload: newTerm
});


export const updateSchoolTermAction = (updatedTerm) => ({
	type: constants.UPDATE_SCHOOL_TERM,
	payload: updatedTerm
})


// ==================================================================


const sortTerms = (schoolTerms) => {
	let sortedTerms = schoolTerms.map((term) => term);

	sortedTerms.sort((a, b) => {
		const aStart = new Date(a.start),
			  bStart = new Date(b.start);
		return (aStart > bStart) ? 1 : (aStart < bStart) ? -1 : 0;
	});

	return sortedTerms;
}



const schoolTerms = (state, action) => {
	switch(action.type) {
		case constants.ADD_SCHOOL_TERM:
			return sortTerms([...state, action.payload]);
		
		case constants.UPDATE_SCHOOL_TERM:
			return sortTerms(
				state.map(
					(term) => (term.id === action.payload.id) ? {
                        id: action.payload.id,
                        start: action.payload.start,
                        end: action.payload.end,
                        default: false,
					}: term
				)
			)
		default:
			return state;
	}
}