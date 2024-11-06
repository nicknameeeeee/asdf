import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import style from './main.module.css';

const Main = () => {
  /* 게임 설명 */
  const text = [
    "설명 1",
    "설명 2"
  ];

  const [nowindex, setnowIndex] = useState(0);
  const [visible, setvisible] = useState(sessionStorage.getItem('visible') !== 'false');
  const max = text.length;

  const changeText = () => {
    if (nowindex < max - 1) {
      setnowIndex((prevIndex) => prevIndex + 1);
    } else {
      setvisible(false);
      sessionStorage.setItem('visible', 'false');
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
  }, [nowindex]);

  const reset = (e) => {
    sessionStorage.setItem('visible', 'true');
  }

  return (
    <div>
      {visible && (
        <div className={style.boxbox}>
          <div className={style.describe}>
            {text[nowindex].split("\n").map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </div>
          <input
            type="button"
            value="텍스트 변경"
            onClick={changeText}
            className={style.nexttext}
          />
        </div>
      )}
      <div>
        <Link to="/quizone">
          <button>quiz1</button>
        </Link>
        <Link to="/quiztwo">
          <button>quiz2</button>
        </Link>
      </div>
      <button
      onClick={reset}
      className={style.reset}
      >초기화</button>
    </div>
  );
};

export default Main;
