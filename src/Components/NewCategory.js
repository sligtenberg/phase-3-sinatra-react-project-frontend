import React, {useState } from "react";

function NewCategory({ createCategory }) {
    const [newCategoryMode, setNewCategoryMode] = useState(false)
    const [color, setColor] = useState("lightgrey")
    const [setColorMode, setSetColorMode] = useState(false)

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
            <button onClick={() => {
                setNewCategoryMode(!newCategoryMode)
                setSetColorMode(false)
                setColor("lightgrey")
            }}>{newCategoryMode ? "Cancel" : "New Category"}</button>
            {newCategoryMode ?
                <form onSubmit={handleNewCategorySubmit} style={{display: "flex"}}>
                    <input type="text" placeholder="Name" style={{marginLeft: "5px"}}></input>
                    {setColorMode ?
                        <input id="color" type="color" value={color} onChange={event => setColor(event.target.value)}></input> :
                        <button onClick={() => setSetColorMode(true)}>Color</button>}
                    <input type="submit"></input>
                </form> : null}
        </div>
    )
}

export default NewCategory;
