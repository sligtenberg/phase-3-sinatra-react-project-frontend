import React from "react";

function Filter({ selectedCategory, setSelectedCategory, selectedPriorityLevels, setSelectedPriorityLevels, categories }) {
    const categoryDropdownOptions = categories.map(category =>
        <option key={category.id} value={category.name}>{category.name}</option>
    )

    return (
        <nav >
            <select value={selectedCategory} onChange={event => setSelectedCategory(event.target.value)}>
                <option value="all">All Categories</option>
                {categoryDropdownOptions}
            </select>
            <input
                type="checkbox"
                id="high-priority"
                checked={selectedPriorityLevels.highPriority}
                onChange={() => setSelectedPriorityLevels({
                    highPriority: !selectedPriorityLevels.highPriority,
                    lowPriority: selectedPriorityLevels.lowPriority
                })}>
            </input>
            <label htmlFor="high-priority">High Priority</label>
            <input
                type="checkbox"
                id="low-priority"
                checked={selectedPriorityLevels.lowPriority}
                onChange={() => setSelectedPriorityLevels({
                    highPriority: selectedPriorityLevels.highPriority,
                    lowPriority: !selectedPriorityLevels.lowPriority
                })}>
            </input>
            <label htmlFor="low-priority" >Low Priority</label>
        </nav>
    )
}

export default Filter;
