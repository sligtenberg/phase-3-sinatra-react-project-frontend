import React, { useState } from "react";
import ViewTask from "./ViewTask";
import EditTask from "./EditTask";

function Task({ task, submitTask }) {
    const [editMode, setEditMode] = useState(false)

    return (
        <li>
            {editMode ? <EditTask task={task} submitTask={submitTask}/> : <ViewTask task={task} setEditMode={setEditMode}/>}
        </li>
    )
}

export default Task;
