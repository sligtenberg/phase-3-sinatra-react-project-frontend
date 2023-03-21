import React from "react";

function ViewTask({ task, setEditMode }) {
    
    return (
        <span>
            <span onClick={() => setEditMode(true)}>
                {task.high_priority ? task.description.toUpperCase() : task.description.toLowerCase()}
            </span>
            <button className="right-align">X</button>
        </span>
    )
}

export default ViewTask;
