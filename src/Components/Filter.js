import React, { useState } from "react";

function Filter({ categories }) {
    const [categoryDropdownSelection, setCategoryDropdownSelection] = useState("all")

    function handleCategoryDropdownChange(event) {
        console.log(event)
        setCategoryDropdownSelection(event.target.value)
    }

    // function handlePriorityDropdownChange() {

    // }

    const categoryDropdownOptions = categories.map(category => <option key={category.id} value={category.name}>{category.name}</option>)

    return (
        <form className="filter">
            <select value={categoryDropdownSelection} onChange={handleCategoryDropdownChange}>
                <option value="all">All Categories</option>
                {categoryDropdownOptions}
            </select>
            {/* <select value={dropdownSelections.priority_level} onChange={handlePriorityDropdownChange}>
                <option value="all">Any Priority</option>
                <option value="high">High Priority</option>
                <option value="low">Low Priority</option>
            </select> */}
        </form>
    )
}

export default Filter;
