import React, { useState } from "react";
import { Link } from "react-router-dom";
import style from './quiz1.module.css'
import modal from './question.png'

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
    <div className={style.main}>
      <div className={style.box}>
      <img 
      className={style.modal}
      src={modal} 
      alt="modal">
      </img>
      <input
        className={style.input}
        type="text"
        placeholder="정답을 입력해주세요"
        value={input}
        onChange={Change}
        onKeyDown={(e) => activeEnter(e)}
      />
      <input
      type="button"
      value="정답 입력"
      className={style.button}
      onClick={() => { 
      activeButton();
      }}/>
        <nav>
        <Link to="/">
          <button>뒤로가기</button>
        </Link>
      </nav>
      </div>
    </div>
  );
};

export default Main;
