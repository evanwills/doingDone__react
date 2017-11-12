import React from 'react';
// import TaskDetials from '../tasks/toDoItem/taskDetails';

const prettyTime = (time) => time.toLocaleTimeString().replace(/([0-9]+:[0-9]+):[0-9]+ ([AP]M)/i, function(match, p1, p2) {
        return p1+p2.toLowerCase();
    });

const ScheduledItem = ({onClick, id, available, due, extendedDue, status, task, activity}) => {
    console.log('task:', task);
    console.log('onClick:', onClick, typeof onClick);
    return (
        <li>
            <article className={'to-do__item to-do__task status-' + status}>
                <input type="checkbox" id={id + '-details'} className="show-hide__checkbox" />
                <header>
                    <h1>{task.name}</h1>
                    <h2>Due: <time dateTime={due}>{prettyTime(due)}</time></h2>
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
                <div className="details">
                    <h2>Steps:</h2>
                    <ol>
                        {task.steps.map((step, i) => <li key={i}>{step}</li>)}
                    </ol>
                </div>
                <button onClick={onClick(id)}>Completed</button> 
            </article>
        </li>
    );
}


export default ScheduledItem;