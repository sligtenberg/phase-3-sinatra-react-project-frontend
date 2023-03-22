import React, { useState } from "react";
import ViewTask from "./ViewTask";
import EditTask from "./EditTask";

function Task({ task, submitTask, removeTaskFromDOM, modifyTaskOnDOM }) {
    const [editMode, setEditMode] = useState(!task.id)

    return (
        <li>
            {editMode ?
                <EditTask task={task} submitTask={submitTask} setEditMode={setEditMode} modifyTaskOnDOM={modifyTaskOnDOM}/> :
                <ViewTask task={task} setEditMode={setEditMode} removeTaskFromDOM={removeTaskFromDOM}/>
            }
        </li>
    )
}

export default Task;
