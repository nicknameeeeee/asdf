import React, { useState } from "react";
import { Link } from "react-router-dom";
import style from './quiz1.module.css'

const Main = () => {
  const [input, setInputValue] = useState(""); 

  const Change = (e) => {
    setInputValue(e.target.value);
  };

  const getValueInText = () => {
    const answer = "2";
    if (input === answer) {
      alert("정답입니다! \n\n 다음 문제의 비밀번호는 1234입니다.");
    } else {
      alert("wrong");
    }
  };

    const activeButton = () => {
      getValueInText();
    }
    const activeEnter = (e) => {
      if(e.key === "Enter") {
        activeButton();
      }
    }

  return (
    <div>
      <nav>
        <Link to="/">
          <button>Go to Main</button>
        </Link>
      </nav>
      <div className={style.box}>
      <h1 className={style.quiz}> 1 + 1 은?</h1>
      <input
        className={style.input}
        type="text"
        placeholder="으아아"
        value={input}
        onChange={Change}
        onKeyDown={(e) => activeEnter(e)}
      />
      <input
      type="button"
      value="으아아"
      className={style.button}
      onClick={() => { 
      activeButton();
      }}/>
      </div>
    </div>
  );
};

export default Main;
