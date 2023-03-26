import React from "react";

// this component is a form used to edit or create a new task.
// when an existing task is switched into "edit mode", the task list item 
// changes to the edit task form, with the fields defaulting to the tasks's values.
// when a new task is created, it is added as a blank task defaulting to edit mode.
function EditTask({ task, submitTask, setEditMode }) {
    function handleFormSubmit(event) {
        event.preventDefault()
        const description = event.target[0].value
        if (description) {
            submitTask({
                description: description,
                category_id: task.category_id,
                high_priority: event.target[1].checked,
                id: task.id
            })
        if (setEditMode) setEditMode(false)
        }
        else alert("Task must have a description")
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <input type="text" defaultValue={task.description} placeholder="task description" autoFocus></input>
            <input type="checkbox" id="priority" defaultChecked={task.high_priority}></input>
            <label htmlFor="priority">High Priority</label>
            <input type="submit" id="form-submit"></input>
        </form>
    )
}

export default EditTask;
