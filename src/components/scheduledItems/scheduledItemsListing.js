import React from 'react';
import PropTypes from 'prop-types';
import ScheduledItem from './scheduledItem'

const ScheduledItemList = ({ items, onItemClick }) => (
  <ul>
    {items.map(item =>
      <ScheduledItem
        key={item.id}
        {...item}
        onClick={() => onItemClick(item.id)}
      />
    )}
  </ul>
)

ScheduledItemList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    task: PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      visualURL: PropTypes.string,
      steps: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string.isRequired,
        imgURL: PropTypes.string
      }).isRequired).isRequired
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

export default ScheduledItemList;
