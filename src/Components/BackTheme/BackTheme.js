import React from "react";
import LigthThemeImg from "../../Asset/images/Ligth-Theme.jpg";
import DarkThemImg from "../../Asset/images/Dark-Theme.jpg";
import style from "./BackTheme.module.css";

function BackThem({ darkTheme, children }) {
  // TodoApp JSX
  const TodoApp = () => children;

  // Continer Classes Handelar
  const contClse = `${style.continer} ${darkTheme ? style.dark : style.light}`;

  // Toggle Img Handelar
  const imgSrc = darkTheme ? DarkThemImg : LigthThemeImg;

  return (
    <div className={contClse}>
      <div className={style.imgBox}>
        <img src={imgSrc} alt="Error In Server" />
      </div>
      <div className={style.TodoApp}>
        <TodoApp />
        <p className={style.thanksW}>drag and drop your tasks {"<3"}</p>
      </div>
    </div>
  );
}

export default BackThem;
