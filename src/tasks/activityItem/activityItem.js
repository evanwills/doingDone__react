import React from 'react';
import ReactDOM from 'react-dom';
import thumbnail from '../../genericComponents/thumbnail';
import taskCompletionLevel from '../taskCompletionLevel';

export const taskActivity = (props) => {
	if (props.expand) {
		if (props.approved === 'done') {
			const activityDetails = `<viewActivity props="{props.activity}" />`;
		} else {
			const activityDetails = `<approveActivity props="{props.completionLevel}" />`;
		}
		const taskDetails = `
					<taskDetails  expand="{props.expand}" img="{props.img}" steps="{props.steps}" />
					{activityDetails}`;

	} else {
		const taskDetails = '';
	}

	return `
			<li>
				<article class="status-{props.status}">
					<header>
						<thumbnail img="{props.thumbnail}" />
						<h1>{props.name}</h1>
						<h2>Due: <time datetime="{props.epirationDateTime}">{props.epirationTime}</time></h2>
						<expandButton taskID="{props.id}" expand="{props.expand}" />
					</header>{taskDetails}
					<footer>
						<doneButton taskID="{props.id}" props="{props}" />
					</footer>
				</article>
			</li>
`;
}

