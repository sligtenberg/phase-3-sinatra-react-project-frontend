import React, {useState } from "react";

function NewCategory() {
    const [newCategoryMode, setNewCategoryMode] = useState(false)

    return (
        <div className="category" style={{backgroundColor: "lightgrey"}}>
            <h3>New Category</h3>
            <button onClick={() => setNewCategoryMode(!newCategoryMode)}>{newCategoryMode ? "Cancel" : "New Category"}</button>
        </div>
    )
}

export default NewCategory;
