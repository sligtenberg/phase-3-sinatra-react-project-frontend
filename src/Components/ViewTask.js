import React from "react";

function ViewTask({ task, setEditMode }) {
    return (
        <span onClick={() => setEditMode(true)}>
            <span className={task.high_priority ? "bold" : null}>{task.description}</span>
            <button>X</button>
        </span>
    )
}

export default ViewTask;
