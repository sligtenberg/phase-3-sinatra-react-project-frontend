import React, {useState, useEffect } from "react";
import Filter from "./Filter";
import Category from "./Category";
import NewCategory from "./NewCategory";

function App() {
  const [categories, setCategories] = useState([])
  const [tasks, setTasks] = useState([])

  const categoryList = categories.map(category => category.name)

  // console.log(tasks)
  // console.log(categories)

  // execute on load
  useEffect(() => {
    // get categories from server
    fetch("http://localhost:9292/categories")
      .then(r => r.json())
      .then(setCategories)
    
    // get tasks from server
    fetch("http://localhost:9292/tasks")
      .then(r => r.json())
      .then(setTasks)
  }, [])

  const categoryComponents = categories.map(category =>
    <Category
        key={category.id}
        category={category}
        tasks={tasks.filter(task => task.category_id === category.id)}
        categoryList={categoryList}
    />)


  return (
    <div >
      <h1>Stevo's todo list</h1>
      <Filter categoryList={categoryList} tasks={tasks}/>
      {categoryComponents}
      <NewCategory setCategories={setCategories}/>
    </div>
  );
}

export default App;
