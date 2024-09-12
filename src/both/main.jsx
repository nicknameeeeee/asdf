import React from "react";
import { Link } from "react-router-dom";
import style from './main.module.css'

const main = () => {
  return (
  <div className={style.mainbg}>
  <header>
  <nav>
    <Link to='/quizone' className={style.fadein}><button>버튼</button></Link>
  </nav>
</header>
</div>
  );
};

export default main;
