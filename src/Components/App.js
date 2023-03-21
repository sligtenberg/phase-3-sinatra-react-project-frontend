import React, {useState, useEffect } from "react";
import Filter from "./Filter";
import Category from "./Category";
import NewCategory from "./NewCategory";

function App() {
  const [categories, setCategories] = useState([])
  const [tasks, setTasks] = useState([])

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

  // modify DOM without refresh
  const addNewTaskToDOM = newTask => setTasks([...tasks, newTask])
  const removeTaskFromDOM = taskId => setTasks(tasks.filter(task => task.id != taskId))

  const categoryComponents = categories.map(category =>
    <Category
        key={category.id}
        category={category}
        tasks={tasks.filter(task => task.category_id === category.id)}
        addNewTaskToDOM={addNewTaskToDOM}
        removeTaskFromDOM={removeTaskFromDOM}
    />)

  return (
    <div >
      <h1>Stevo's todo list</h1>
      <Filter />
      {categoryComponents}
      <NewCategory setCategories={setCategories} />
    </div>
  );
}

export default App;
