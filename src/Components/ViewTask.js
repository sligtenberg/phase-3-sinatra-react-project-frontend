import React from "react";

function ViewTask({ task, setEditMode, deleteTask }) {

    return (
        <span>
            <span className={task.high_priority ? "bold" : null} onClick={() => setEditMode(true)}>
                {task.description}
            </span>
            <button onClick={() => deleteTask(task.id)}>X</button>
        </span>
    )
}

export default ViewTask;
