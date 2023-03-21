import React from "react";

function ViewTask({ task, setEditMode }) {

    const taskDescription = task.high_priority ?
        task.description.toUpperCase() :
        task.description.toLowerCase()
    
    return (
        <span>
            {taskDescription}
            <button onClick={() => setEditMode(true)}>Edit</button>
            <button>Delete</button>
        </span>
    )
}

export default ViewTask;
