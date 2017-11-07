import React from 'react';
import PropTypes from 'prop-types';
import scheduledItem from './scheduledItem'

const scheduledItemList = ({ items, onItemClick }) => (
  <ul>
    {items.map(todo =>
      <scheduledItem
        key={item.id}
        {...item}
        onClick={() => onItemClick(item.id)}
      />
    )}
  </ul>
)

scheduledItemList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
	userID: PropTypes.string.isRequired,
	taskID: availableTasks[i].id,
    completed: PropTypes.instanceOf(Date).isRequired,
	text: PropTypes.string.isRequired,
	
	status: 0,
	hasActivity: false,
	available: today.dateFromTime(availableTasks[i].available),
	due: today.dateFromTime(availableTasks[i].due),
	extendedDue: today.dateFromTime(availableTasks[i].extendedEndTime),
	value: availableTasks[i].value,
	pointsToCurrency: action.payload.pointsToCurrency
  }).isRequired).isRequired,
  onItemClick: PropTypes.func.isRequired
}

export default scheduledItemList;
