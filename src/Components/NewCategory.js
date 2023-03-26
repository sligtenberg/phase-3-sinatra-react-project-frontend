import React, {useState } from "react";

function NewCategory({ createCategory }) {
    const [newCategoryMode, setNewCategoryMode] = useState(false)
    const [color, setColor] = useState("#D3D3D3")

    function handleNewCategorySubmit(event) {
        event.preventDefault()
        const name = event.target[0].value
        if (!name) alert("Category must have a name")
        else if (name === "all") alert(`Category name may not be ${name}`)
        else {
            createCategory({
                name: name,
                color: color
            })
            setNewCategoryMode(false)
        }
    }

    return (
        <div className="category" style={{backgroundColor: color}}>
            <h3>New Category</h3>
            <button onClick={() => setNewCategoryMode(!newCategoryMode)}>{newCategoryMode ? "Cancel" : "New Category"}</button>
            {newCategoryMode ?
                <form onSubmit={handleNewCategorySubmit}>
                    <input type="text" placeholder="Name"></input>
                    <label htmlFor="color">Color:</label>
                    <input id="color" type="color" value={color} onChange={event => setColor(event.target.value)}></input>
                    <input type="submit"></input>
                </form> :
                null}
        </div>
    )
}

export default NewCategory;
