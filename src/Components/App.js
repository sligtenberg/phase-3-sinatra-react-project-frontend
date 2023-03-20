import React, {useState, useEffect } from "react";
import Header from "./Header"
import Filter from "./Filter";
import NewTask from "./NewTask";
import NewCategory from "./NewCategory";

function App() {
  const [categories, setCategories] = useState([])
  const [tasks, setTasks] = useState([])

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

  return (
    <div >
      <Header />
      <Filter categories={categories} tasks={tasks}/>
      <NewTask setTasks={setTasks}/>
      <NewCategory setCategories={setCategories}/>
    </div>
  );
}

export default App;
