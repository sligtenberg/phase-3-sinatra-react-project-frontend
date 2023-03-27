import React from "react";

function Filter({ categoryNames, displayedCategory, setDisplayedCategory }) {
    const categoryDropdownOptions = categoryNames.map(categoryName => <option key={categoryName} value={categoryName}>{categoryName}</option>)

    return (
        <nav >
            <select value={displayedCategory} onChange={(event) => setDisplayedCategory(event.target.value)}>
                <option value="all">All Categories</option>
                {categoryDropdownOptions}
            </select>
        </nav>
    )
}

export default Filter;
