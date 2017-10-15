//import {React, Component} from 'react';
import React from 'react';
// import React from 'react';
// import Component from 'react';
import PropTypes from 'prop-types';


const CreateToDoTask = ({taskName, uniqueName, description, available, due, extendedDue, thumbnail, image, steps, points, days, priority, allowPartial, schoolTerm, schoolHolidays, publicHolidays, onNewToDo}) => {

	let _taskName, _uniqueName, _description, _available, _due, _extendedDue, _thumbnailFile, _thumbnailAlt, _thumbnailCaption, _image, _steps, _points, _monday, _tuesday, _wednesday, _thursday, _friday, _saturday, _sunday, _priority, _allowPartial, _schoolTerm, _schoolHolidays, _publicHolidays;

	const submit = (e) => {
		e.preventDefault();
		let tmpDate = new Date();
		onNewToDo({
			id: 'evan' + _uniqueName.value,
			name: _taskName.value,
			uniqueName: _uniqueName.value,
			description: _description.value,
			// available: _available.value,
		// let midnightBefore = new Date(now.getUTCFullYear() + '-' + (now.getUTCMonth() + 1) + '-' + now.getUTCDate() + 'T00:00:00'),
			available: new Date(tmpDate.getUTCFullYear()+ '-' + (tmpDate.getUTCMonth() + 1) + '-' + tmpDate.getUTCDate() + 'T' + _available.value),
			// due: _due.value,
			due: new Date(tmpDate.getUTCFullYear()+ '-' + (tmpDate.getUTCMonth() + 1) + '-' + tmpDate.getUTCDate() + 'T' + _due.value),
			// extendedDue: _extendedDue.value,
			thumbnail: {
				url: _thumbnailFile.value,
				alt: _thumbnailAlt.value,
				caption: _thumbnailCaption.value
			},
			// image: {
			// 	url: _thumbnailFile.value,
			// 	alt: _thumbnailAlt.value,
			// 	caption: _thumbnailCaption.value
			// },
			// steps: ', _steps.value,
			points: _points.value,
			days: {
				monday: _monday.value,
				tuesday: _tuesday.value,
				wednesday: _wednesday.value,
				thursday: _thursday.value,
				friday: _friday.value,
				saturday: _saturday.value,
				sunday: _sunday.value
			},
			steps: [],
			activity: null,
			priority: _priority.value,
			allowPartial: _allowPartial.checked,
			schoolTerm: _schoolTerm.checked,
			schoolHolidays: _schoolHolidays.checked,
			publicHolidays: _publicHolidays.checked
		});
	 };

	const timePattern = '^(?:[01]?[0-9]|2[0-4]):[05][0-9]$';



	return (
		<form onSubmit={submit} className="newToDo">
			<div className="form-group">
				<label htmlFor="taskName">Task name</label>
				<input type="text" id="taskName" required defaultValue={taskName} ref={input => _taskName = input} />
			</div>
			<div className="form-group">
				<label htmlFor="uniqueName">Uniquie task name</label>
				<input type="text" id="uniqueName" defaultValue={uniqueName} ref={input => _uniqueName = input} required aria-describedby="uniqueNameDescription" />
				<span className="describedby" id="uniqueNameDescription">Used to identify this task if is a clone or has clones of it</span>
			</div>
			<div className="form-group">
				<label htmlFor="description">Description</label>
				<textarea id="description" defaultValue={description} ref={input => _description = input} />
			</div>
			<fieldset>
				<legend>Thumbnail image</legend>

				<div className="form-group">
					<label htmlFor="thumbnailFile">Thumbnail image</label>
					<input type="file" id="thumbnailFile" defaultValue={thumbnail.url} ref={input => _thumbnailFile = input} accept="image/png, image/gif, image/svg, image/jpeg" />
				</div>
				<div className="form-group">
					<label htmlFor="thumbnailAlt">Image Alt attribute</label>
					<input type="text" id="thumbnailAlt" defaultValue={thumbnail.alt} ref={input => _thumbnailAlt = input} />
				</div>
				<div className="form-group">
					<label htmlFor="thumbnailCaption">Image Caption</label>
					<input type="text" id="thumbnailCaption" defaultValue={thumbnail.caption} ref={input => _thumbnailCaption = input} />
				</div>
			</fieldset>
			<fieldset>
				<legend>Time &amp; Days</legend>

				<div className="form-group">
					<label htmlFor="available">Time when task is available</label>
					<input  type="text"
							id="available"
							defaultValue={available}
							ref={input => _available = input}
							required
							placeholder="HH:MM"
							pattern={timePattern}
					 />
				</div>
				<div className="form-group">
					<label htmlFor="due">Time task is to be completed by</label>
					<input  type="text"
							id="due"
							defaultValue={due}
							ref={input => _due = input}
							required
							placeholder="HH:MM"
							pattern={timePattern}
					 />
				</div>
				<div className="form-group">
					<label htmlFor="extendedDue">Extended time task is to be completed by</label>
					<input  type="text"
							id="extendedDue"
							defaultValue={extendedDue}
							ref={input => _extendedDue = input}
							placeholder="HH:MM"
							pattern={timePattern}
					 />
				</div>
				<fieldset>
					<legend>Weekdays task is required on</legend>
					<ul className="list-unstyled list-inline">
						<li>
							<label>
								<input type="checkbox" id="monday" defaultChecked={days.monday} ref={input => _monday = input} />
								Monday
							</label>
						</li>
						<li>
							<label>
								<input type="checkbox" id="tuesday" defaultChecked={days.tuesday} ref={input => _tuesday = input} />
								Tuesday
							</label>
						</li>
						<li>
							<label>
								<input type="checkbox" id="wednesday" defaultChecked={days.wednesday} ref={input => _wednesday = input} />
								Wednesday
							</label>
						</li>
						<li>
							<label>
								<input type="checkbox" id="thursday" defaultChecked={days.thursday} ref={input => _thursday = input} />
								Thursday
							</label>
						</li>
						<li>
							<label>
								<input type="checkbox" id="friday" defaultChecked={days.friday} ref={input => _friday = input} />
								Friday
							</label>
						</li>
						<li>
							<label>
								<input type="checkbox" id="saturday" defaultChecked={days.saturday} ref={input => _saturday = input} />
								Saturday
							</label>
						</li>
						<li>
							<label>
								<input type="checkbox" id="sunday" defaultChecked={days.sunday} ref={input => _sunday = input} />
								Sunday
							</label>
						</li>
					</ul>
				</fieldset>
				<fieldset>
					<legend>Holidays and school terms</legend>
					<ul className="list-unstyled list-inline">
						<li>
							<label>
								<input type="checkbox" id="schoolTerm" defaultChecked={schoolTerm} ref={input => _schoolTerm = input} />
								Required during school term
							</label>
						</li>
						<li>
							<label>
								<input type="checkbox" id="schoolHolidays" defaultChecked={schoolHolidays} ref={input => _schoolHolidays = input} />
								Required during school holidays
							</label>
						</li>
						<li>
							<label>
								<input type="checkbox" id="publicHolidays" defaultChecked={publicHolidays} ref={input => _publicHolidays = input} />
								Required on public holidays
							</label>
						</li>
					</ul>
				</fieldset>
			</fieldset>
			<fieldset>
				<legend>Meta</legend>
				<div className="form-group">
					<label htmlFor="priority">Priority</label>
					<input type="number" id="priority" defaultValue={priority} ref={input => _priority = input} min="0" max="100" step="0.1" placeholder="1.0" aria-describedby="describedbypriority" />
					<span className="describedby" id="describedbypriority">If multiple tasks have the same due time the priority sets the order. (The higher the priority the further up the list the task will be pushed)</span>
				</div>
				<div className="form-group">
					<label htmlFor="points">Points</label>
					<input type="number" id="points" defaultValue={points} ref={input => _points = input} min="0" max="10" step="0.01" placeholder="1.0" aria-describedby="describedbyPoints"  />
					<span className="describedby" id="describedbyPoints">If multiple tasks have the same due time the priority sets the order. (The higher the priority the further up the list the task will be pushed)</span>
				</div>
				<div className="">
					<label>
						<input type="checkbox" id="allowPartial" defaultChecked={allowPartial} ref={input => _allowPartial = input} />
						Partial completion is acceptable
					</label>
				</div>
			</fieldset>
			<button>Add new To Do task</button>
		</form>
	);
}


CreateToDoTask.defaultProps = {

				taskName: '',
				uniqueName: '',
				description: '',
				available: '06:00',
				due: '22:00',
				extendedDue: null,
				thumbnail: {
					url: '',
					alt: '',
					caption: ''
				},
				image: {
					url: '',
					alt: '',
					caption: ''
				},
				steps: [],
				points: 1,
				days: {
					monday: true,
					tuesday: true,
					wednesday: true,
					thursday: true,
					friday: true,
					saturday: true,
					sunday: true,
				},
				priority: 1,
				allowPartial: true,
				schoolTerm: true,
				schoolHolidays: true,
				publicHolidays: true
			};

CreateToDoTask.PropTypes = {
	taskName: PropTypes.string.isRequired,
	uniqueName: PropTypes.string.isRequired,
	description: PropTypes.string,
	available: PropTypes.string.isRequired,
	due: PropTypes.string.isRequired,
	extendedDue: PropTypes.string,
	thumbnail: PropTypes.shape({
		url: PropTypes.string.isRequired,
		alt: PropTypes.string.isRequired,
		caption: PropTypes.string
	}),
	image: PropTypes.shape({
		url: PropTypes.string.isRequired,
		alt: PropTypes.string.isRequired,
		caption: PropTypes.string
	}),
	steps: PropTypes.arrayOf(PropTypes.string),
	points: PropTypes.number.isRequired,
	days: PropTypes.shape({
		monday: PropTypes.bool.isRequired,
		tuesday: PropTypes.bool.isRequired,
		wednesday: PropTypes.bool.isRequired,
		thursday: PropTypes.bool.isRequired,
		friday: PropTypes.bool.isRequired,
		saturday: PropTypes.bool.isRequired,
		sunday: PropTypes.bool.isRequired,
	}),
	priority: PropTypes.number,
	allowPartial: PropTypes.bool.isRequired,
	schoolTerm: PropTypes.bool.isRequired,
	schoolHolidays: PropTypes.bool.isRequired,
	publicHolidays: PropTypes.bool.isRequired
}

export default CreateToDoTask;