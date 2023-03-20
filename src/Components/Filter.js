import React from "react";
import Category from "./Category";

function Filter({ categories, tasks }) {
    const filteredTasks = tasks.filter(task => true)
    const categoryComponents = categories.map(category =>
        <Category
            key={category.name}
            categorizedTasks={filteredTasks.filter(task => task.category_id === category.id)}
        />)

    // console.log(filteredTasks)

    return (
        <filter>
            * Filter *
            {categoryComponents}
        </filter>
    )
}

export default Filter;
