import React, { useState } from "react";

function Task({ task }) {
    const [editMode, setEditMode] = useState(false)

    return (
        <li>
            {editMode ?
                <form>
                    <input type="text" defaultValue={task.description}></input>
                    <input type="checkbox" id="priority" defaultChecked={task.high_priority}></input>
                    <label htmlFor="priority">High Priority</label>
                    <input type="submit" id="form-submit" className="right-align"></input>
                </form> :
                <span onClick={() => setEditMode(true)}>
                    {task.high_priority ? task.description.toUpperCase() : task.description.toLowerCase()}
                    <button className="right-align">X</button>
                </span>
            }
        </li>
    )
}

export default Task;
