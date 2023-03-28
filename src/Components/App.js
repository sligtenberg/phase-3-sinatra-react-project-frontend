import React, {useState, useEffect } from "react";
import Filter from "./Filter";
import Category from "./Category";
import NewCategory from "./NewCategory";
// import Test from "./Test";

function App() {
  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedPriorityLevels, setSelectedPriorityLevels] = useState({
    highPriority: true,
    lowPriority: true
  })

  // execute on load - get categories from server
  useEffect(() => {
    fetch('http://localhost:9292')
      .then(r => r.json())
      .then(setCategories)
  }, [])

  function createCategory(newCategory) {
    fetch('http://localhost:9292/categories', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCategory)
    })
      .then(r => r.json())
      .then(newCategory => setCategories([...categories, {...newCategory, tasks: []}]))
  }

  function deleteCategory(categoryId) {
    fetch(`http://localhost:9292/categories/${categoryId}`, {
      method: "DELETE",
    })
      .then(r => r.json())
      .then(setCategories(categories.filter(category => category.id !== categoryId)))
  }

  // this function is passed to Category components as a prop. Category components are responsible
  // for building the new category which gets passed here and used to update category state
  const updateCategories = newCategory => setCategories(categories
    .map(category => category.id === newCategory.id ? newCategory : category))

  const categoryComponents = categories
    .filter(category => selectedCategory === "all" ? true : selectedCategory === category.name)
    .map(category =>
      <Category
          key={category.id}
          category={category}
          deleteCategory={deleteCategory}
          updateCategories={updateCategories}
          selectedPriorityLevels={selectedPriorityLevels}
      />)

  return (
    <div >
      <h1>Stevo's todo list</h1>
      <Filter
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        selectedPriorityLevels={selectedPriorityLevels}
        setSelectedPriorityLevels={setSelectedPriorityLevels}
        categories={categories}
      />
      {categoryComponents}
      {selectedCategory === "all" ? <NewCategory createCategory={createCategory} /> : null}
      {/* <Test /> */}
    </div>
  );
}

export default App;
