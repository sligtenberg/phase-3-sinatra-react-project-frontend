import React, { useState } from "react";
import Task from "./Task";
import EditTask from "./EditTask";

function Category({ category, tasks, addNewTaskToDOM }) {
    const [newTaskMode, setNewTaskMode] = useState(false)

    function updateTask(newTask) {
    }

    function createTask(newTask) {
        setNewTaskMode(false)
        fetch("http://localhost:9292/tasks", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newTask)
        })
            .then(r => r.json())
            .then(addNewTaskToDOM)
    }

    const taskComponents = tasks.map(task =>
        <Task
            key={task.id}
            task={task}
            submitTask={updateTask}
        />)

    const blankTask = {
        description: "",
        category_id: category.id,
        high_priority: false
    }

    return (
        <div className="category" style={{backgroundColor: category.color}}>
            <h3>{category.name}</h3>
            <button onClick={() => setNewTaskMode(!newTaskMode)}>{newTaskMode ? "Cancel" : "New Task"}</button>
            <ul>
                {taskComponents}
                {newTaskMode ? <li><EditTask task={blankTask} submitTask={createTask}/></li> : null}
            </ul>
        </div>
    )
}

export default Category;
