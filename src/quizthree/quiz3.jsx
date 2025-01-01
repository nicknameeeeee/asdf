import React, { useState } from "react";
import { Link } from "react-router-dom";
import style from "./quiz3.module.css";
import modal from './question.png';
import genious from './pic_quiz.jpg';

const Main = () => {

  /*문제*/

  const [input, setInputValue] = useState(""); 
  const [visible2, setvisible2] = useState(sessionStorage.getItem('visible2') !== 'false');

  const Change = (e) => {
    setInputValue(e.target.value);
  };

  const getValueInText = () => {
    const answer = "보조개";
    if (input === answer) {
      alert("정답입니다! \n\n 다음 문제의 비밀번호는 2g5zp 입니다.\n\n최종 문제의 일부분을 찾았습니다!\n\nᄋᆞᆯ은 닐어오\n머흘게 ᄒᆞ다 아으");
      sessionStorage.setItem('part3', '1')
    } else {
      alert("틀렸습니다! 다시 시도하세요.");
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
    
    /*잠금*/
    const [lockvisible2, setlockvisible2] = useState(sessionStorage.getItem('lockvisible2') !== 'false');
    const [lockinput, setlockinput] = useState("");

    const lockChange = (e) => {
      setlockinput(e.target.value);
    };

    const password = () => {
      const psword = "03241";
      if (lockinput === psword) {
        setlockvisible2(false)
        sessionStorage.setItem('lockvisible2', 'false');
        setvisible2(true);
        sessionStorage.setItem('visible2', 'true');
        alert("잠금이 해제되었습니다.")
      } else {
        alert("비밀번호가 틀렸습니다!");
      }
    };

    const activeButton2 = () => {
      password();
    }
    const activeEnter2 = (e) => {
      if(e.key === "Enter") {
        activeButton2();
      }
    }

  return (
    <div>
      <div className={style.main}>
          <img 
            className={style.modal}
            src={modal} 
            alt="modal">
            </img>
            </div>

      <nav className={style.nav}>
        <Link to="/">
          <button>뒤로가기</button>
        </Link>
      </nav>
      
      {/*잠금 코드*/}
    <div>
      {lockvisible2 &&  
      <div className={style.boxbox}>
      <div className={style.describe}>
      <div className={style.pass}>
          암호 : 숫자 5자리
        </div>
          <input
            className={style.password}
            type="text"
            placeholder="잠금"
            value={lockinput}
            onChange={lockChange}
            onKeyDown={(e) => activeEnter2(e)}
          />
      <input 
      className={style.password}
      type="button" 
      value="입력" 
      onClick={() => { 
      activeButton2();
      }}/>
      </div>
      </div>
}

      {/*문제 코드*/}
      {visible2 && 
            <div className={style.question}>
              <div className={style.content}>빈 칸에 들어갈 단어는?</div>
              <img src={genious} className={style.ping} alt="으아아"></img>
            <div className={style.box}>
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
            </div>
          </div>
}
</div>
    </div>

  );
};

export default Main;
