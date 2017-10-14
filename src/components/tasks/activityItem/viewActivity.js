import React from 'react';
import ReactDOM from 'react-dom';

export const viewActivity = (activity) => {

	if (activity.money) {
		const monetaryValue = (money) => {
			return ` ({money.prefix}{money.value})`;
		}
	} else {
		const dollamonetaryValuerValue = (money) => {
			return '';
		}
	}
	return `
					<dl class="activity-details">
						<dt>Points:</dt>
							<dd>{activity.points}{monetaryValue}</dd>

						<dt>Completion time:</dt>
							<dd><time datetime="{props.completionDateTime}">{props.completionTime}</time>

						<dt>Completion level:</dt>
							<dd><taskCompletionLevel level="{activity.completionLevel}" disabled="true" /></dd>

						<dt>Intervention:</dt>
							<dd><TaskInterventionLevel level="{activity.interventionLevel}" disabled="true" /></dd>

						<dt>Approved by:</dt>
							<dd>{activity.approver.name}</dd>
					</dl>`;
}