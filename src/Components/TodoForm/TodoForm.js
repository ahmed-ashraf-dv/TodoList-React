import React, { useState } from "react";
import style from "./TodoForm.module.css";
import LigthThemeBtn from "../../Asset/images/icon-moon.svg";
import DarkThemeBtn from "../../Asset/images/icon-sun.svg";

function Form({ setTask, darkTheme }) {
  // State For Input
  const [value, setValue] = useState("");

  // Set Task Handelar
  const newTaskHandelar = (e) => {
    // Stop Reload
    e.preventDefault();

    // Check Input Value
    if (value === "") {
      return alert("Please Fill The Input");
    }

    // Set New Task
    setTask((prevData) => [...prevData, { text: value, compleate: false }]);

    // Empty Input
    setValue("");
  };

  return (
    <form id={style.form} onSubmit={newTaskHandelar}>
      <input
        className={darkTheme ? style.dark : {}}
        type="text"
        placeholder="write your task"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button style={!value ? { display: "none" } : {}} type="submit">
        +
      </button>
    </form>
  );
}

function TodoForm({ setTask, darkTheme, tgglThem }) {
  // Toogle Img Handelar
  const imgSrc = darkTheme ? DarkThemeBtn : LigthThemeBtn;

  return (
    <div className={style.TodoForm}>
      <div className={style.infoBox}>
        <p>todo</p>
        <img onClick={tgglThem} src={imgSrc} alt="Error In Server" />
      </div>
      <Form setTask={setTask} darkTheme={darkTheme} />
    </div>
  );
}

export default TodoForm;
