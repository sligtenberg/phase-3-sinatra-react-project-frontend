import React, { useState } from "react";

function EditTask({ task, categoryList, setEditTask }) {

    const dropdownOptions = categoryList.map(category =>
        <option value={category}>{category}</option>)

    return (
        <form>
            <input placeholder={task.name}></input>
            <select>
                {dropdownOptions}
            </select>
            <input type="checkbox"></input>
        </form>
    )
}

export default EditTask;
