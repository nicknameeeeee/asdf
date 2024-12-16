import React, { useState } from "react";
import { Link } from "react-router-dom";
import style from "./quiz2.module.css";
import modal from './question.png';

const Main = () => {

  /*문제*/

  const [input, setInputValue] = useState(""); 
  const [visible1, setvisible1] = useState(sessionStorage.getItem('visible1') !== 'false');

  const Change = (e) => {
    setInputValue(e.target.value);
  };

  const getValueInText = () => {
    const answer = "2";
    if (input === answer) {
      alert("정답입니다! \n\n 다음 문제의 비밀번호는 2345입니다.");
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
    const [lockvisible1, setlockvisible1] = useState(sessionStorage.getItem('lockvisible1') !== 'false');
    const [lockinput, setlockinput] = useState("");

    const lockChange = (e) => {
      setlockinput(e.target.value);
    };

    const password = () => {
      const psword = "1234";
      if (lockinput === psword) {
        setlockvisible1(false)
        sessionStorage.setItem('lockvisible1', 'false');
        setvisible1(true);
        sessionStorage.setItem('visible1', 'true');
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
          <img 
            className={style.modal}
            src={modal} 
            alt="modal">
            </img>
      {/*잠금 코드*/}
    <div>
      {lockvisible1 &&  
      <div className={style.boxbox}>
      <div className={style.describe}>
          <input
            className={style.password}
            type="text"
            placeholder="잠금"
            value={lockinput}
            onChange={lockChange}
            onKeyDown={(e) => activeEnter2(e)}
          />
      <input type="button" value="입력" onClick={() => { 
      activeButton2();
      }}/>
      </div>
      </div>
}

      {/*문제 코드*/}
      {visible1 && 
            <div className={style.main}>
            <div className={style.box}>
              <div className={style.content}>
                으아아
              </div>
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
