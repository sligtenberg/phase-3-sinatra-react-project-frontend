import React, { useState } from "react";
import Task from "./Task";

function Category({ category, tasks, categoryList }) {
    const [viewNewTaskForm, setViewNewTaskForm] = useState(false)

    const taskComponents = tasks.map(task =>
        <Task
            key={task.id}
            task={task}
            categoryList={categoryList}
            currentCategory={category.name}
        />)

    return (
        <div className="bubble" style={{backgroundColor: category.color}}>
            <h3>{category.name}</h3>
            <ul>
                {taskComponents}
                {viewNewTaskForm ? <li></li> : <button></button>}
            </ul>
        </div>
    )
}

export default Category;
