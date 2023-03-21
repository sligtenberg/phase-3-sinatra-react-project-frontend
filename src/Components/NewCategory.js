import React, {useState } from "react";

function NewCategory() {
    const [newCategoryMode, setNewCategoryMode] = useState(false)

    return (
        <div className="category" style={{backgroundColor: "lightgrey"}}>
            <h3>New Category</h3>
            <button onClick={() => setNewCategoryMode(!newCategoryMode)}>{newCategoryMode ? "Cancel" : "New Category"}</button>
            {newCategoryMode ?
                <form>
                    <input type="text" placeholder="Name"></input>
                    <label forHTML="color">Color:</label>
                    <input id="color" type="color"></input>
                    <input type="submit"></input>
                </form> :
                null}
        </div>
    )
}

export default NewCategory;
