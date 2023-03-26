import React from "react";

function Filter({ categoryNames, displayedCategory, setDisplayedCategory }) {
    const categoryDropdownOptions = categoryNames.map(categoryName => <option key={categoryName} value={categoryName}>{categoryName}</option>)

    return (
        <div className="filter">
            <select value={displayedCategory} onChange={(event) => setDisplayedCategory(event.target.value)}>
                <option value="all">All Categories</option>
                {categoryDropdownOptions}
            </select>
        </div>
    )
}

export default Filter;
