import React from "react";
import { Link } from "react-router-dom";
import style from './main.module.css'

const main = () => {
  return (
  <div className={style.mainbg}>
  <nav>
    <Link to='/quizone'>
    <img src="https://lh3.google.com/u/0/d/1RhG4ktUGAQxRiPcJQeDX16FWTRDmv-uz=w2880-h1376-iv1" alt="flower" className={style.flower}></img>
    </Link>
  </nav>
</div>
  );
};

export default main;
