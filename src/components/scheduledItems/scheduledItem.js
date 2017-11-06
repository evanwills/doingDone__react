import React from 'react';
import PropTypes from 'prop-types';
import TaskDetials from '../tasks/toDoItem/taskDetails';

const scheduledItem = ({onClick, startTime, endTime, extendedEndTime, status, task, activity}) => {
    return (
        <li>
            <article className={'to-do__item to-do__task status-' + props.status}>
                <input type="checkbox" id={props.id + '-details'} className="show-hide__checkbox" />
                <header>
                    {(props.thumbnail)?<Thumbnail img={props.thumbnail} />:null}
                    <h1>{props.name}</h1>
                    <h2>Due: <time dateTime={props.due}>{props.due.toLocaleTimeString()}</time></h2>
                    <label htmlFor={props.id + '-details'} className="show-hide__checkbox--label">
                        <span className="show">
                            <span className="sr-only">Show details</span>
                            <span className="show-hide__checkbox--icon">+</span>
                        </span>
                        <span className="hide">
                            <span className="sr-only">Hide details</span>
                            <span className="show-hide__checkbox--icon">-</span>
                        </span>
                    </label>
                </header>
                <TaskDetails {...props} />
                <FooterDoing {...props}  />
            </article>
        </li>
    );
}

export default scheduledItem;