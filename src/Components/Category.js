import React from "react";
import Task from "./Task.js"

function Category({ category, categorizedTasks }) {
    // console.log(categorizedTasks)

    const taskComponents = categorizedTasks.map(task => <Task key={task.id} task={task}/>)

    return (
        <div className="category" style={{backgroundColor: category.color}}>
            <h3>{category.name}</h3>
            <ul >
                {taskComponents}
            </ul>
        </div>
    )
}

export default Category;
