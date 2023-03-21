import React, { useState } from "react";
import ViewTask from "./ViewTask";
import EditTask from "./EditTask";

function Task({ task, categoryList }) {
    const [editMode, setEditMode] = useState(false)

    return (
        <li>
            {editMode ?
                <EditTask task={task} categoryList={categoryList} setEditMode={setEditMode}/> :
                <ViewTask task={task} setEditMode={setEditMode}/>}
        </li>
    )
}

export default Task;
