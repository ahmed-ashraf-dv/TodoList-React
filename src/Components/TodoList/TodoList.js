import React from "react";
import { NavLink } from "react-router-dom";
import style from "./TodoList.module.css";
import delBtnIco from "../../Asset/images/icon-cross.svg";

function TodoList({ allTasks, tasks, ActvTskLength, setTask, darkTheme }) {
  // Delet Task Handelar
  const Deletetsk = (e) => {
    const elmentDelete = e.target.parentElement.parentElement.id;
    setTask((prev) => prev.filter((task, idx) => idx !== +elmentDelete));
  };

  // Toggle Task Handelar
  const tglTsk = (e) => {
    // Get Task
    const elmentIdx = e.target.parentElement.parentElement.id;

    // Toogle Task Compleate
    tasks[elmentIdx].compleate = !tasks[elmentIdx].compleate;

    // Delete Old Obj
    setTask((prev) => prev.filter((task, idx) => idx !== +elmentIdx));

    // Add New Value
    setTask((prev) => [...prev, tasks[elmentIdx]]);
  };

  // Delet All Btn
  const deleteAllCompleate = () =>
    tasks.length ? setTask(allTasks.filter((task) => !task.compleate)) : "";

  // Article Classes Handelar
  const taskClss = (task) =>
    `${task.compleate ? style.check : ""} ${darkTheme ? style.dark : ""}`;

  // NavBar Clsasses Handelar
  const navClss = ({ isActive }) => (isActive ? style.acctive : "");

  // NavBar Style Handelar
  const navStyle = darkTheme ? { backgroundColor: "hsl(235, 24%, 19%)" } : {};

  return (
    <div className={style.TodoList}>
      <div className={style.List}>
        {tasks.map((task, idx) => (
            <article key={idx} id={idx} className={taskClss(task)}>
              <div onClick={tglTsk} className={style.checkBox}>
                <span></span>
              </div>
              <div className={style.infoBox}>
                <p onClick={tglTsk}>{task.text}</p>
              </div>
              <div className={style.delBtn}>
                <img onClick={Deletetsk} src={delBtnIco} alt="" />
              </div>
            </article>
          ))}
      </div>
      <div className={style.info} style={navStyle}>
        <article>
          <p>{ActvTskLength} item Left</p>
          <div>
            <ul>
              <li>
                <NavLink className={navClss} to="/">
                  All
                </NavLink>
              </li>
              <li>
                <NavLink className={navClss} to="/active">
                  Active
                </NavLink>
              </li>
              <li>
                <NavLink className={navClss} to="/compleate">
                  Compleated
                </NavLink>
              </li>
            </ul>
          </div>
          <p onClick={deleteAllCompleate}>Clear Compleated</p>
        </article>
      </div>
    </div>
  );
}

export default TodoList;
