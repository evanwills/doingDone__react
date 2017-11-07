import { connect } from 'react-redux';

import {scheduledItemsListing} from './scheduledItemsListing';

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
	return userItems.map(item => {
		const currentTask = tasks.filter(task => (item.taskID === task.id)),
			  currentActivity = activities.filter(activity => (activity.id === item.id));
		return {
			...item,
			task: currentTask[0],
			activity: (cuurentActivity.length === 1)?currentActivity:null
		} 
	});
}


const mapStateToProps = (state) => {
	return {
		scheduledItems: getVisibleItems(
			state.scheduledItems,
			state.visibilityFilter, state.users.filter(user => (user.id === activeUser)),
			state.tasks,
			state.activities,
		)
	}
}
  
const mapDispatchToProps = (dispatch) => {
	return {
		onItemClick: (id) => {
			dispatch(completeItem(id))
		}
	};
};
  
  const VisibleScheduledItems = connect(
	mapStateToProps,
	mapDispatchToProps
  )(scheduledItemsListing);
  
  export default VisibleTodoList