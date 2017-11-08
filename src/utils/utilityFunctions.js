import PropTypes from 'prop-types';

/**
 * performs a shallow clone of the input array then sorts the
 * cloned array using value from the property specified by the
 * field parameter
 * 
 * @param {array} inputArray array of objects to be sorted
 * @param {string} field name of object property whose value is
 *                       used to sort by
 */
export const sortByDate = (inputArray, field) => {
    // shallow clone input array
	let sortedInput = inputArray.map((inputItem) => inputItem);

	sortedInput.sort((a, b) => {
		const aField = new Date(a[field]),
			  bfield = new Date(b[field]);
		return (aField > bfield) ? 1 : (aField < bfield) ? -1 : 0;
	});

	return sortedInput;
}


sortByDate.PropTypes = {
	input: PropTypes.array.isRequired,
	field: PropTypes.string.isRequired
}

export default sortByDate;