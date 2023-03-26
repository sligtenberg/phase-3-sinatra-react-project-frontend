import React, { useState } from "react";
import ViewTask from "./ViewTask";
import EditTask from "./EditTask";

function Task({ task, submitTask, deleteTask }) {
    // tasks are either displayed in view mode (default), or edit mode
    // clicking a task changes it from view to edit mode
    const [editMode, setEditMode] = useState(!task.id)

    return (
        <li>
            {editMode ?
                <EditTask task={task} submitTask={submitTask} setEditMode={setEditMode} /> :
                <ViewTask task={task} setEditMode={setEditMode} deleteTask={deleteTask}/>
            }
        </li>
    )
}

export default Task;
