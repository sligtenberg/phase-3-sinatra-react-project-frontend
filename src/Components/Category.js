import React, { useState, useEffect } from "react";
import Task from "./Task";
import EditTask from "./EditTask";

function Category({ category, deleteCategory }) {
    const [tasks, setTasks] = useState([])
    const [newTaskMode, setNewTaskMode] = useState(false)

    // execute on load - get tasks from server
    useEffect(() => {
        fetch(`http://localhost:9292/categories/${category.id}/tasks`)
        .then(r => r.json())
        .then(setTasks)
    }, [])

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
            .then(newTask => setTasks([...tasks, newTask]))
    }

    function updateTask(newTask) {
        fetch(`http://localhost:9292/tasks/${newTask.id}`,{
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              description: newTask.description,
              high_priority: newTask.high_priority
            })
        })
            .then(r => r.json())
            .then(newTask => setTasks(tasks.map(task => task.id === newTask.id ? newTask : task)))
    }

    function deleteTask(taskId) {
        console.log(taskId)
        fetch(`http://localhost:9292/tasks/${taskId}`, {
            method: "DELETE",
        })
            .then(r => r.json())
            .then(() => setTasks(tasks.filter(task => task.id !== taskId)))
    }

    const taskComponents = tasks.map(task =>
        <Task
            key={task.id}
            task={task}
            submitTask={updateTask}
            deleteTask={deleteTask}
        />)

    const blankTask = {
        description: "",
        category_id: category.id,
        high_priority: false
    }

    return (
        <div className="category" style={{backgroundColor: category.color}}>
            <h3>{category.name}</h3>
            {tasks.length > 0 ? null : <button onClick={() => deleteCategory(category.id)}>Delete Category</button>}
            <button onClick={() => setNewTaskMode(!newTaskMode)}>{newTaskMode ? "Cancel" : "New Task"}</button>
            <ul>
                {taskComponents}
                {newTaskMode ? <li><EditTask task={blankTask} submitTask={createTask}/></li> : null}
            </ul>
        </div>
    )
}

export default Category;
