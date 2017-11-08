import {connect} from 'react-redux';
import {ScheduledItemList} from './scheduledItemsListing';
import {addActivityAction} from '../../store/activities';

const getVisibleItems = (items, filter, user, tasks, activities) => {
	const now = new Date();
	let userItems = items;

	if(!user.approver) {
		userItems = items.filter(item => (item.user === user.id));
	}

	switch (filter) {
		case 'SHOW_ALL':
			break;

		case 'SHOW_COMPLETED':
			userItems = userItems.filter(item => (item.completed !== null));

		case 'SHOW_OVERDUE':
			userItems = userItems.filter(item => (item.completed === null && item.due <= now));

		case 'SHOW_COMING':
			userItems =  userItems.filter(item => (item.completed === null && item.available > now))

		case 'SHOW_ACTIVE':
		default:
			userItems = userItems.filter(item => (item.completed === null && item.available <= now && item.due > now))
	}

	return userItems.map(item => ({
			id: item.id,
			status: item.status,
			task: tasks.filter(
				task => (item.taskID === task.id)
			).map(task => ({
				name: task.name,
				description: task.description,
				visualURL: task.visualURL,
				steps: task.steps,
				available: task.available,
				due: task.due,
				extendedDue: task.extendedDue
			}))[0],
			activity: (item.hasActivity) ?
				activities.filter(activity => (activity.id === item.id))[0] : null
	}));
}


const mapStateToProps = (state) => {
	return {
		scheduledItems: getVisibleItems(
			state.ScheduledItems,
			state.visibilityFilter, state.users.filter(user => (user.id === state.activeUser)),
			state.tasks,
			state.activities,
		)
	}
}
  
const mapDispatchToProps = (dispatch) => {
	return {
		onItemClick: (id) => dispatch(addActivityAction(id))
	};
};
  
const VisibleScheduledItems = connect(
	mapStateToProps,
	mapDispatchToProps
)(ScheduledItemList);
  
export default VisibleScheduledItems;
