import React from "react";

function EditTask({ task, categoryList, currentCategory }) {

    const dropdownOptions = categoryList.map(categoryName =>
        <option key={categoryName} value={categoryName} >{categoryName}</option>)

    return (
        <form>
            <input type="text" defaultValue={task.description}></input>
            <select defaultValue={currentCategory}>{dropdownOptions}</select>
            <input type="checkbox" id="priority" defaultChecked={task.high_priority}></input>
            <label htmlFor="priority">High Priority</label>
            <input type="submit" id="form-submit" className="right-align"></input>
        </form>
    )
}

export default EditTask;
