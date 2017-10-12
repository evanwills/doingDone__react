


/**
 * makes all input fields wrapped by the given ID required (used when
 * showing an HTML block)
 * @private
 * @param {string}  id           ID of the select field to use as
 *                               toggle
 * @param {boolean} makeRequired if TRUE, then add a required
 *                               attribute to all fields in the
 *                               toggled HTML block
 */
function _showHideMakeFieldRequired(id, makeRequired) {
	'use strict';

	if (makeRequired === true) {
		$(id + ' input').attr('required', 'required');
		$(id + ' select').attr('required', 'required');
		$(id + ' textarea').attr('required', 'required');
	}
}
/**
 * removes the required attribute from all input fields wrapped by
 * the given ID (used when hiding an HTML block)
 * @private
 * @param {string}  id           ID of the select field to use as
 *                               toggle
 * @param {boolean} makeRequired if TRUE, then remove the required
 *                               attribute from all fields in the
 *                               toggled HTML block
 */
function _showHideMakeFieldOptional(id, makeRequired) {
	'use strict';

	if (makeRequired === true) {
		$(id + ' input').removeAttr('required');
		$(id + ' select').removeAttr('required');
		$(id + ' textarea').removeAttr('required');
	}
}
/**
 * set the focus to the specified (used when showing an HTML block)
 * @private
 * @param {string} focusID the ID of a form field to set the focus on
 */
function _showHideSetFocus(focusID) {
	'use strict';
	if (focusID !== undefined && focusID !== '') {
		$(focusID).focus();
	}
}
/**
 * ensures that input is false if it's not TRUE
 * @private
 * @param {mixed} input value to make boolean
 * @return {boolean}
 */
function _showHideMakeBool(input) {
	'use strict';

	if (input !== true) {
		input = false;
	}
	return input;
}
/**
 * ensures that input is false if it's not a string or is an empty string
 * @private
 * @param {mixed} input string to be tested for type and content
 * @param {boolean} allowEmpty if TRUE, input can be an empty string.
 * @return {string|false}
 */
function _showHideMakeString(input, allowEmpty) {
	'use strict';

	if ((typeof input !== 'string') || (allowEmpty !== true && input === '')) {
		input = false;
	}
	return input;
}
/**
 * checks that a given selector matches something in the HTML. If
 * input is not a string or is an empty string or selector doesn't
 * match anything, it writes an error to the console.
 * @private
 * @param {mixed} selector a string to be passed to jQuery
 * @return {boolean}
 */
function _domNodeExists(selector) {
	'use strict';

	var tmp = _showHideMakeString(selector),
		tmpType = typeof input;
	if (selector !== false ) {
		if (tmp === false) {
			if (tmpType !== 'string') {
				console.error('You must use a string as a selector! "' + tmpType + '" given. Please check your Javascript!');
			} else {
				console.error('Cannot find anything with an empty selector. Please check your Javascript!');
			}
			return false;
		} else {
			if ($(selector).length > 0) {
				return true;
			} else {
				console.error('Was unable to find HTML block identified by "' + selector + '". Please check your Javascript or HTML!');
				return false;
			}
		}
	}
	return false;
}




/**
 * applies an onChange function to a select field that toggles the
 * visibility of an HTML block
 * @param {string} srcFieldID     ID of the select field to use as
 *                                toggle
 * @param {string} destID         ID of the HTML block whose
 *                                visibility is to be toggled
 * @param {string|array|FALSE} showVal  the string value (or array of
 *                                string values) to be matched to make
 *                                HTML block visible (If FALSE, then
 *                                visibility is toggled on by default)
 * @param {string|array|FALSE} hideVal  the string value (or array of
 *                                string values) to be matched to make
 *                                HTML block hidden (If FALSE, then
 *                                visibility is toggled off by default)
 * @param {boolean} makeRequired  if TRUE, then force make all fields
 *                                in the toggled HTML block required
 *                                when the HTML block is visible and
 *                                not required when the HTML block is
 *                                hidden
 * @param {string|FALSE} focusID  set the focus to field specified by
 *                                the ID when the HTML block is made
 *                                visible
 */
function showHideBySelect(srcFieldID, destID, showVal, hideVal, makeRequired, focusID) {
	'use strict';

	var a = 0,
		firstTime = true,
		_showVals = [],
		_hideVals = [];

	if (Array.isArray(showVal) !== false) {
		for (a = 0; a < showVal.length; a += 1) {
			_showVals.push(_showHideMakeString(showVal[a], true));
		}
	} else {
		showVal = _showHideMakeString(showVal, true);
		_showVals.push(showVal, true);
	}

	if (Array.isArray(hideVal) !== false) {
		for (a = 0; a < hideVal.length; a += 1) {
			_hideVals.push(_showHideMakeString(hideVal[a], true));
		}
	} else {
		hideVal = _showHideMakeString(hideVal, true);
		_hideVals.push(hideVal, true);
	}
	makeRequired = _showHideMakeBool(makeRequired);
	focusID = _showHideMakeString(focusID);

	if (!_domNodeExists(srcFieldID) || !_domNodeExists(destID)) {
		console.warn('source (' + srcFieldID + ') or destination (' + destID + ') cannot be found in HTML');
		return false;
	}

	$(srcFieldID).on('change', function () {
		var val = $(this).val();

		if (_hideVals.indexOf(val) !== -1) {
			$(destID).addClass('hide');
			_showHideMakeFieldOptional(destID, makeRequired);
		} else if (_showVals.indexOf(val) !== -1 || showVal === false) {
			$(destID).removeClass('hide');
			_showHideMakeFieldRequired(destID, makeRequired);
			if (firstTime === false) {
				_showHideSetFocus(focusID);
			}
		} else if (hideVal === false) {
			$(destID).addClass('hide');
			_showHideMakeFieldOptional(destID, makeRequired);
		}
	}).each(function () {
		$(this).trigger('change');
	});
	firstTime = false;
}
/**
 * applies an onChange function to a group of radio button fields
 * that toggles the visibility of an HTML block
 * @param {string} srcFieldID     ID of the wrapper for the group of
 *                                radio button fields to use as toggle
 * @param {string} destID         ID of the HTML block whose
 *                                visibility is to be toggled
 * @param {string|FALSE} showVal  the value to be matched to make HTML
 *                                block visible (If FALSE, then
 *                                visibility is toggled on by default)
 * @param {string|FALSE} hideVal  the value to be matched to make
 *                                HTML block hidden (If FALSE, then
 *                                visibility is toggled off by default)
 * @param {boolean} makeRequired  if TRUE, then force make all fields
 *                                in the toggled HTML block required
 *                                when the HTML block is visible and
 *                                not required when the HTML block is
 *                                hidden
 * @param {string|FALSE} focusID  set the focus to field specified by
 *                                the ID when the HTML block is made
 *                                visible
 */
function showHideByRadio(srcParentID, destID, showVal, hideVal, makeRequired, focusID) {
	'use strict';

	var firstTime = true,
		_showVals = [],
		_hideVals = [];

	if (Array.isArray(showVal) !== false) {
		for (a = 0; a < showVal.length; a += 1) {
			_showVals.push(_showHideMakeString(showVal[a], true));
		}
	} else {
		showVal = _showHideMakeString(showVal, true);
		_showVals.push(showVal, true);
	}

	if (Array.isArray(hideVal) !== false) {
		for (a = 0; a < hideVal.length; a += 1) {
			_hideVals.push(_showHideMakeString(hideVal[a], true));
		}
	} else {
		hideVal = _showHideMakeString(hideVal, true);
		_hideVals.push(hideVal, true);
    }

	makeRequired = _showHideMakeBool(makeRequired);
	focusID = _showHideMakeString(focusID);

	if (!_domNodeExists(srcParentID) || !_domNodeExists(destID)) {
		console.warn('source (' + srcParentID + ') or destination (' + destID + ') cannot be found in HTML');
		return false;
	}

	$(srcParentID + ' input[type="radio"]').on('change', function () {
		var val = $(this).val();

		if ($(this).is(':checked')) {
			if (_hideVals.indexOf(val) !== -1) {
				$(destID).addClass('hide');
				_showHideMakeFieldOptional(destID, makeRequired);
			} else if (_showVals.indexOf(val) !== -1 || showVal === false) {
				$(destID).removeClass('hide');
				_showHideMakeFieldRequired(destID, makeRequired);
				if (firstTime === false) {
					_showHideSetFocus(focusID);
				}
			} else if (hideVal === false) {
				$(destID).addClass('hide');
				_showHideMakeFieldOptional(destID, makeRequired);
			}
		} else {
			$(destID).addClass('hide');
			_showHideMakeFieldOptional(destID, makeRequired);
		}
	}).each(function () {
		$(this).trigger('change');
		return false;
	});
	firstTime = false;
}
/**
 * applies an onChange function to a checkbox field that toggles the
 * visibility of an HTML block
 * @param {string} srcFieldID      ID of the checkbox field to use
 *                                 as toggle
 * @param {string} destID          ID of the HTML block whose
 *                                 visibility is to be toggled
 * @param {boolean} uncheckedHide  if TRUE, the toggled HTML is
 *                                 hidden when the checkbox is
 *                                 unchecked,
 *                                 if FALSE, toggled HTML block is
 *                                 shown until the checkbox is
 *                                 checked
 *                                 (checked = show, unchecked = hide)
 * @param {boolean} makeRequired   if TRUE, make all fields in the
 *                                 toggled HTML block required when
 *                                 the HTML block is visible and not
 *                                 required when the HTML block is
 *                                 hidden
 * @param {string|FALSE} focusID   set the focus to field specified
 *                                 by the ID when the HTML block is
 *                                 made visible
 */
function showHideByCheckbox(srcFieldID, destID, uncheckedHide, makeRequired, focusID) {
	'use strict';

	var firstTime = true;

	makeRequired = _showHideMakeBool(makeRequired);
	focusID = _showHideMakeString(focusID);

	if (!_domNodeExists(srcFieldID) || !_domNodeExists(destID)) {
		console.warn('source (' + srcFieldID + ') or destination (' + destID + ') cannot be found in HTML');
		return false;
	}

	if (uncheckedHide !== false) {
		uncheckedHide = true;
	}
	$(srcFieldID).on('change', function () {
		var hide = true;


		if ($(this).is(':checked')) {
			if(uncheckedHide === true) {
				hide = false;
			}
		} else {
			if( uncheckedHide === false) {
				hide = false;
			}
		}
		if (hide === true) {
			$(destID).addClass('hide');
			_showHideMakeFieldOptional(destID, makeRequired);
		} else {
			$(destID).removeClass('hide');
			_showHideMakeFieldRequired(destID, makeRequired);
			if (firstTime === false) {
				_showHideSetFocus(focusID);
			}
		}
	}).each(function () {
		$(this).trigger('change');
	});
	firstTime = false;
}
/**
 * applies an onChange function to a text (or text style) field that
 * toggles the visibility of an HTML block
 * @param {string} srcFieldID     ID of the text input field to use
 *                                as toggle
 * @param {string} destID         ID of the HTML block whose
 *                                visibility is to be toggled
 * @param {boolean} makeRequired  if TRUE, then force make all fields
 *                                in the toggled HTML block required
 *                                when the HTML block is visible and
 *                                not required when the HTML block is
 *                                hidden
 * @param {string|FALSE} focusID  set the focus to field specified by
 *                                the ID when the HTML block is made
 *                                visible
 */
function showHideByTextNotempty(srcFieldID, destID, makeRequired, focusID) {
	'use strict';

	var firstTime = true;

	makeRequired = _showHideMakeBool(makeRequired);
	focusID = _showHideMakeString(focusID);

	if (!_domNodeExists(srcFieldID) || !_domNodeExists(destID)) {
		console.warn('source (' + srcFieldID + ') or destination (' + destID + ') cannot be found in HTML');
		return false;
	}

	$(srcFieldID).on('change', function () {

		if ($(this).val() !== '') {
			$(destID).removeClass('hide');
			_showHideMakeFieldRequired(destID, makeRequired);
			if (firstTime === false) {
				_showHideSetFocus(focusID);
			}
		} else {
			$(destID).addClass('hide');
			_showHideMakeFieldOptional(destID, makeRequired);
		}
	}).each(function () {
		$(this).trigger('change');
	});
	firstTime = false;
}

$(document).ready(function () {
	'use strict';
	var screenSize = 800
	$('#screen-size').on('change', function () {
		$('.content-wrap').attr('style', 'width: ' + $(this).val() + 'px;');
	}).trigger('change');
});