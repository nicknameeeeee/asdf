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
    const answer = "어차피 난 혼자였지";
    if (input === answer) {
      alert("정답입니다! \n\n 다음 문제의 비밀번호는 1234입니다.");
      sessionStorage.setItem('part1', '1')
    } else {
      alert("틀렸습니다!");
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
        <div className={style.content}>
          노래 가사 맞추기<br /> <br />오늘 밤은 삐딱하게 <br /> 내버려둬 <br />OOO O OOOO<br />아무도 없어, 다 의미 없어<br />사탕 발린 위로 따윈 집어치워<br />오늘 밤은 삐딱하게
        </div>
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
