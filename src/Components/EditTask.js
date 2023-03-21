import React from "react";

function EditTask({ task, submitTask, setEditMode }) {
    function handleFormSubmit(event) {
        event.preventDefault()
        setEditMode(false)
        submitTask({
            description: event.target[0].value,
            category_id: task.category_id,
            high_priority: event.target[1].checked,
            id: task.id
        })

    }

    return (
        <form onSubmit={handleFormSubmit}>
            <input type="text" defaultValue={task.description} placeholder="task description"></input>
            <input type="checkbox" id="priority" defaultChecked={task.high_priority}></input>
            <label htmlFor="priority">High Priority</label>
            <input type="submit" id="form-submit"></input>
        </form>
    )
}

export default EditTask;
