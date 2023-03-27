import React, { useState } from "react";
import Task from "./Task";
import EditTask from "./EditTask";

function Category({ category, deleteCategory, updateCategories }) {
    const [newTaskMode, setNewTaskMode] = useState(false)
    // const [newColorMode, setNewColorMode] = useState(false)

    // function handleColorChange(event) {
    //     event.preventDefault()
    //     const newColor = event.target.value
    //     const newCategory = category
    //     newCategory.color = newColor
    //     setNewColorMode(false)
    //     fetch(`http://localhost:9292/categories/${category.id}`, {
    //         method: "PATCH",
    //         headers: {
    //           "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify({
    //           color: newColor
    //         })
    //     })
    //         .then(r => r.json())
    //         .then(updateCategories(newCategory))
    // }

    function updateTaskList(newTaskList) {
        const newCategory = category
        newCategory.tasks = newTaskList
        updateCategories(newCategory)
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
            .then(newTask => updateTaskList([...category.tasks, newTask]))
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
            .then(newTask => updateTaskList(category.tasks.map(task => task.id === newTask.id ? newTask : task)))
    }

    function deleteTask(taskId) {
        fetch(`http://localhost:9292/tasks/${taskId}`, {
            method: "DELETE",
        })
            .then(r => r.json())
            .then(() => updateTaskList(category.tasks.filter(task => task.id !== taskId)))
    }

    const taskComponents = category.tasks.map(task =>
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
            {category.tasks.length > 0 ? null : <button onClick={() => deleteCategory(category.id)}>Delete Category</button>}
            <button onClick={() => setNewTaskMode(!newTaskMode)}>{newTaskMode ? "Cancel" : "New Task"}</button>
            {/* {newColorMode ?
                <input id="color" type="color" value={category.color} onChange={handleColorChange}></input> :
                <button onClick={() => setNewColorMode(true)}>Change Color</button>} */}
            <ul>
                {taskComponents}
                {newTaskMode ? <li><EditTask task={blankTask} submitTask={createTask}/></li> : null}
            </ul>
        </div>
    )
}

export default Category;
