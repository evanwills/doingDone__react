import React from 'react';
import TaskDetials from '../tasks/toDoItem/taskDetails';

const ScheduledItem = ({onClick, id, available, due, extendedDue, status, task, activity}) => {
    return (
        <li>
            <article className={'to-do__item to-do__task status-' + status}>
                <input type="checkbox" id={id + '-details'} className="show-hide__checkbox" />
                <header>
                    <h1>{task.name}</h1>
                    <h2>Due: <time dateTime={due}>{due.toLocaleTimeString()}</time></h2>
                    <label htmlFor={id + '-details'} className="show-hide__checkbox--label">
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
            </article>
        </li>
    );
}

export default ScheduledItem;