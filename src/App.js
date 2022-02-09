import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import BackTheme from "./Components/BackTheme/BackTheme";
import TodoForm from "./Components/TodoForm/TodoForm";
import TodoList from "./Components/TodoList/TodoList";

const App = () => {
  // Parse LS Values
  const lsTheme = JSON.parse(localStorage.getItem("darkTheme"));
  const lsTasks = JSON.parse(localStorage.getItem("tasks"));

  // Theme Now
  const [darkTheme, toggleTheme] = useState(true);

  // State For Tasks
  const [allTasks, setTask] = useState(lsTasks || []);

  // Handel Toggle Theme
  const tgglThem = () => toggleTheme(!darkTheme);

  //Get Active Tasks
  const ActiveTask = allTasks.filter((task) => !task.compleate);

  //Get Compleate Tasks
  const CmpletTask = allTasks.filter((task) => task.compleate);

  const GetList = (list) => (
    <TodoList
      allTasks={allTasks}
      tasks={list}
      ActvTskLength={ActiveTask.length}
      setTask={setTask}
      darkTheme={darkTheme}
    />
  );

  // Set Fiest View
  if (!lsTasks) {
    setTask([
      { text: "Hello From Todo App With React", compleate: true },
      { text: "Made With Ahmed Ashraf (FoR3on)", compleate: false },
    ]);
  }

  // Set New Data In LS Every Render
  localStorage.setItem("tasks", JSON.stringify(allTasks));
  localStorage.setItem("darkTheme", darkTheme);

  return (
    <div className="App">
      <BackTheme darkTheme={darkTheme}>
        <TodoForm setTask={setTask} darkTheme={darkTheme} tgglThem={tgglThem} />
        <Routes>
          <Route exact path="/" element={GetList(allTasks)} />
          <Route path="active" element={GetList(ActiveTask)} />
          <Route path="compleate" element={GetList(CmpletTask)} />
        </Routes>
      </BackTheme>
    </div>
  );
};

export default App;
