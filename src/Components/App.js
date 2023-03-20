import React from "react";
import Header from "./Header"
import Filter from "./Filter";
import NewTask from "./NewTask";
import NewCategory from "./NewCategory";

function App() {
  return (
    <div >
      <Header />
      <Filter />
      <NewTask />
      <NewCategory />
    </div>
  );
}

export default App;
