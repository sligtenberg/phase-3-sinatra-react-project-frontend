import React from "react";
import Task from "./Task";

function Category({ category, tasks, categoryList }) {

    const taskComponents = tasks.map(task => <Task key={task.id} task={task} categoryList={categoryList}/>)

    return (
        <div className="category" style={{backgroundColor: category.color}}>
            <h3>{category.name}</h3>
            <ul>{taskComponents}</ul>
        </div>
    )
}

export default Category;