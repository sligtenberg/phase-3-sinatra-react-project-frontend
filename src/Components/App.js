import React, {useState, useEffect } from "react";
import Filter from "./Filter";
import Category from "./Category";
import NewCategory from "./NewCategory";

function App() {
  const [categories, setCategories] = useState([])

  // execute on load - get categories from server
  useEffect(() => {
    fetch("http://localhost:9292/categories")
      .then(r => r.json())
      .then(setCategories)
  }, [])

  function createCategory(newCategory) {
    fetch("http://localhost:9292/categories", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCategory)
    })
      .then(r => r.json())
      .then((newCategory) => setCategories([...categories, newCategory]))
  }

  function deleteCategory(categoryId) {
    fetch(`http://localhost:9292/categories/${categoryId}`, {
      method: "DELETE",
    })
      .then(r => r.json())
      .then(setCategories(categories.filter(category => category.id !== categoryId)))
  }

  const categoryComponents = categories.map(category =>
    <Category
        key={category.id}
        category={category}
        deleteCategory={deleteCategory}
    />)

  return (
    <div >
      <h1>Stevo's todo list</h1>
      <Filter />
      {categoryComponents}
      <NewCategory createCategory={createCategory} />
    </div>
  );
}

export default App;
