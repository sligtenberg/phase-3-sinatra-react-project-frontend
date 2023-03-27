import React from "react";

function Filter(
    {
        categoryNames,
        displayedCategory,
        setDisplayedCategory,
        selectedPriorityLevels,
        setSelectedPriorityLevels
    }) {
    const categoryDropdownOptions = categoryNames.map(categoryName => <option key={categoryName} value={categoryName}>{categoryName}</option>)

    return (
        <nav >
            <select value={displayedCategory} onChange={event => setDisplayedCategory(event.target.value)}>
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
