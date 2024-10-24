import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import style from './main.module.css';

const Main = () => {
  const text = ["1", "2", "3"];
  const [nowindex, setnowIndex] = useState(0);
  const [count, nextcount] = useState(0);
  const [visible, setvisible] = useState(true)
  const max = text.length;

  const changeText = () => {
    if (count < max - 1) {
      setnowIndex((prevIndex) => (prevIndex + 1));
      nextcount(count + 1);
    } else {
      setvisible(false)
    }
  };

  const spaceon = (e) => {
    if (e.code === "Space") {
      changeText();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", spaceon);
    return () => {
      window.removeEventListener("keydown", spaceon);
    };
  }, []);

  return (
    <div>
      <div className={style.boxbox} >
        <div className={style.describe}
        >{text[nowindex]}</div>
        <input
          type="button"
          value="텍스트 변경"
          onClick={changeText}
          className={style.nexttext}
        />
      </div>

      <div>
        <Link to='/quizone'>
          <button>gotoquiz</button>
        </Link>
      </div>
    </div>
  );
};

export default Main;
