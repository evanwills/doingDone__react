import React from 'react';
import PropTypes from 'prop-types';
import ScheduledItem from './scheduledItem'

const ScheduledItemsList = ({ scheduledItems, onItemClick }) => {
  console.log('onItemClick:', onItemClick);

  if (scheduledItems.length > 0) {
  return (
    <ul>
      {scheduledItems.map(item =>
        <ScheduledItem
          key={item.id}
          {...item}
          onClick={onItemClick}
        />
      )}
    </ul>
  ); 
  } else {
    return null;
  }
};
export default ScheduledItemsList;



ScheduledItemsList.propTypes = {
  scheduledItems: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    status: PropTypes.number.isRequired,
    task: PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      visualURL: PropTypes.string,
      // steps: PropTypes.arrayOf(PropTypes.shape({
      //   text: PropTypes.string.isRequired,
      //   imgURL: PropTypes.string
      // }).isRequired).isRequired
      steps: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
    }).isRequired,
    activity: PropTypes.shape({
      completed: PropTypes.instanceOf(Date),
      status: PropTypes.string.isRequired,
      completionLevel: PropTypes.number.isRequired,
      interventionLevel: PropTypes.number.isRequired,
      computedValue: PropTypes.Number
    }),
    available: PropTypes.instanceOf(Date).isRequired,
    due: PropTypes.instanceOf(Date).isRequired,
    extendedDue: PropTypes.instanceOf(Date)
  })).isRequired,
  onItemClick: PropTypes.func.isRequired
}

