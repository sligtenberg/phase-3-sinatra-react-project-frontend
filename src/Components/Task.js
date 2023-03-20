import React from "react";

function Task({ task }) {
    //console.log(task)
    const taskDescription = task.high_priority ? task.description.toUpperCase() : task.description.toLowerCase()
    return (
        <li >
            {taskDescription}
        </li>
    )
}

export default Task;
