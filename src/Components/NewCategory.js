import React, {useState } from "react";

function NewCategory({ addNewCategoryToDOM }) {
    const [newCategoryMode, setNewCategoryMode] = useState(false)
    const [color, setColor] = useState("#D3D3D3")

    function handleNewCategorySubmit(event) {
        console.log(event)
        event.target.reset()
        event.preventDefault()
        const newCategory = {
            name: event.target[0].value,
            color: color
        }

        fetch("http://localhost:9292/categories", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newCategory)
        })
            .then(r => r.json())
            .then(addNewCategoryToDOM)
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
