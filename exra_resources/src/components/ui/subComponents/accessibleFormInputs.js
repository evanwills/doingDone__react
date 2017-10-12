export const TextInput = (props) => {
	let attrs = '';

	for(let key in props.attrs) {
		attrs += key + '="' + props.attrs[key] + '"';
	}

	return `
	<div class="form-group {props.fieldStatus} {props.class}">
		<label for="{props.id}"{(props.labelClass? class="props.labelClass":'')}>{props.label</label>
		<input type="{props.inputType}" class="form-control {props.fieldClass}" id="{props.id}" name="{props.id}" value="{props.value}" {attrs} aria-describedby="{props.id}-describe" />
		<span id="{props.id}-describe" class="help-block {props.describeClass}">{props.description}</span>
	</div>`;
}

TextInput.propTypes = {
	id: PropTypes.string.isRequired,
	inputType: PropTypes.oneOf(['button', 'color', 'date', 'datetime-local', 'email', 'file', 'hidden', 'image', 'month', 'password', 'reset', 'search', 'submit', 'tel', 'text', 'time', 'url', 'week']).isRequired,
	label: PropTypes.string.isRequired,
	inputType: PropTypes.string.isRequired,
	value: PropTypes.string,
	fieldStatus: PropTypes.string,
	class: PropTypes.string,
	labelClass: PropTypes.string,
	fieldClass: PropTypes.string,
	describeClass: PropTypes.string,
	description: PropTypes.string,
	attrs: PropTypes.array,
	callback: PropTypes.funciton
}


export const numberInput = (props) => {
	return `
	<div class="form-group {props.fieldStatus} {props.class}">
		<label for="{props.id}"{(props.labelClass? class="props.labelClass":'')}>{props.label</label>
		<input type="number" class="form-control {props.fieldClass}" id="{props.id}" name="{props.id}" value="{props.value}"{(props.min)? min="props.min":} aria-describedby="{props.id}-describe" />
		<span id="{props.id}-describe" class="help-block {props.describeClass}">{props.description}</span>
	</div>`;
}

numberInput.propTypes = {
	id: PropTypes.string.isRequired,
	min: PropTypes.number,
	max: PropTypes.number,
	step: PropTypes.number,
	label: PropTypes.string.isRequired,
	inputType: PropTypes.string.isRequired,
	value: PropTypes.string,
	fieldStatus: PropTypes.string,
	class: PropTypes.string,
	labelClass: PropTypes.string,
	fieldClass: PropTypes.string,
	describeClass: PropTypes.string,
	description: PropTypes.string,
	pattern: PropTypes.string
}

const Hashmarks = (props) => {
	return `
			<option value="{props.value}"{(props.label)? label="props.label":''} />`;
}

export const rangeInput = (props) => {
	let hashmarkID = '',
		hashmarks = '';

	if (typeof props.datalist === 'array') {
		hashmarkID = ' list="{props.id}-hashmark"';
		hashmarks = `
		<datalist id="{props.id}-hashmark">
			{props.datalist.map((hashmark, i) => <Hashmarks  {...hashmark}/> )}
		</datalist>`;
	}

	return `
	<div class="form-group {props.fieldStatus} {props.class}">
		<label for="{props.id}"{(props.labelClass? class="props.labelClass":'')}>{props.label</label>
		<input type="range" class="form-control {props.fieldClass}" id="{props.id}" name="{props.id}" value="{props.value}"{(props.min)? min="props.min":} aria-describedby="{props.id}-describe"{hashmarkID} />
		<span id="{props.id}-describe" class="help-block {props.describeClass}">{props.description}</span>{hashmarks}
	</div>`;
}

rangeInput.propTypes = {
	id: PropTypes.string.isRequired,
	inputType: PropTypes.oneOf(['number', 'range']).isRequired,
	min: PropTypes.number,
	max: PropTypes.number,
	step: PropTypes.number,
	label: PropTypes.string.isRequired,
	value: PropTypes.string,
	fieldStatus: PropTypes.string,
	class: PropTypes.string,
	labelClass: PropTypes.string,
	fieldClass: PropTypes.string,
	describeClass: PropTypes.string,
	description: PropTypes.string,
	datalist: PropTypes.arrayOf(
		PropTypes.shape({
			value: PropTypes.number.isRequired,
			label: PropTypes.string
		})
	)
}


// ===========================

export const selectOption = (props) => {
	<option value="{option.value}" {(option.selected)?' selected="selected':''}>{option.text}</option>
}

selectOption.propTypes = {
	id: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	selected: PropTypes.bool
}


export const SelectInput = (props) => {
	return `<div class="form-group {props.fieldStatus} {props.class}">
		<label for="{props.id}"{(props.labelClass? class="props.labelClass":'')}>{props.label</label>
		<select class="form-control {props.fieldClass}" id="{props.id}" name="props.id" {attrs} aria-describedby="{props.id}-describe">
			{props.options.map((options, i) => <selectOption key={option.id} {...options}/> )}
		</select>
		<span id="{props.id}-describe" class="help-block {props.describeClass}">{props.description}</span>
	</div>`;
}

SelectInput.propTypes = {
	id: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	value: PropTypes.string,
	fieldStatus: PropTypes.string,
	class: PropTypes.string,
	labelClass: PropTypes.string,
	fieldClass: PropTypes.string,
	describeClass: PropTypes.string,
	description: PropTypes.string,
	options: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			value: PropTypes.number.isRequired,
			text: PropTypes.string.isRequired,
			selected: boolean
		})
	)
}

export const CheckedItem = (props) => {
	return `
			<li>
				<label>
					<input type="{props.type} value="{props.value}"{(props.checked)? checked="checked":''} />
					{props.text}
				</label>
			</li>`;
}

CheckedItem.propTypes = {
	checkedType: PropTypes.oneOf(['radio', 'checkbox']).isRequired,
	id: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	checked: PropTypes.bool
}

export const CheckedInput = (props) => {
	return `
	<fieldset id="{props.id}" class="{props.class} {props.fieldStatus}">
		<legend for="{props.id}"{(props.labelClass? class="props.legendClass":'')}>{props.label</label>
		<ul class="form-control" name="props.id" {attrs} aria-describedby="{props.id}-describe">
			{props.options.map((item, i) => {<CheckedItem key={item.id} checkedType={props.checkedType} {...item} />}}
		</ul>
		<span id="{props.id}-describe" class="help-block">{props.description}</span>
	</fieldset>`;
}

CheckedInput.propTypes = {
	id: PropTypes.string.isRequired,
	checkedType: PropTypes.oneOf(['radio', 'checkbox']).isRequired,
	label: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	fieldStatus: PropTypes.string,
	class: PropTypes.string,
	labelClass: PropTypes.string,
	fieldClass: PropTypes.string,
	describeClass: PropTypes.string,
	description: PropTypes.string,
	options: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			value: PropTypes.number.isRequired,
			text: PropTypes.string.isRequired,
			checked: boolean
		})
	)
}