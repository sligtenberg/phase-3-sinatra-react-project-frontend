import React from "react";
import Task from "./Task.js"

function Category({ categorizedTasks }) {
    console.log(categorizedTasks)
    return (
        <div>
            <Task />
        </div>
    )
}

export default Category;
