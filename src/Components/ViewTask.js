import React from "react";

function ViewTask({ task, setEditMode, removeTaskFromDOM }) {
    function deleteTask() {
        fetch(`http://localhost:9292/tasks/${task.id}`, {
            method: "DELETE",
        })
            .then(r => r.json())
            .then(() => removeTaskFromDOM(task.id))
    }

    return (
        <span onClick={() => setEditMode(true)}>
            <span className={task.high_priority ? "bold" : null}>{task.description}</span>
            <button onClick={deleteTask}>X</button>
        </span>
    )
}

export default ViewTask;
