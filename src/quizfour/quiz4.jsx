import React, { useState } from "react";
import { Link } from "react-router-dom";
import style from "./quiz4.module.css"

const Main = () => {

  /*문제*/

  const [input, setInputValue] = useState(""); 
  const [visible3, setvisible3] = useState(sessionStorage.getItem('visible3') !== 'false');

  const Change = (e) => {
    setInputValue(e.target.value);
  };

  const getValueInText = () => {
    const answer = "으아아";
    if (input === answer) {
      alert("정답입니다! \n\n 다음 문제의 비밀번호는 4567입니다.");
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
    const [lockvisible3, setlockvisible3] = useState(sessionStorage.getItem('lockvisible3') !== 'false');
    const [lockinput, setlockinput] = useState("");

    const lockChange = (e) => {
      setlockinput(e.target.value);
    };

    const password = () => {
      const psword = "1234";
      if (lockinput === psword) {
        setlockvisible3(false)
        sessionStorage.setItem('lockvisible3', 'false');
        setvisible3(true);
        sessionStorage.setItem('visible3', 'true');
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
      <nav>
        <Link to="/">
          <button className={style.main}>Go to main</button>
        </Link>
      </nav>

      {/*잠금 코드*/}
<div>
      {lockvisible3 &&  
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
      {visible3 && 
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
}
</div>

    </div>

  );
};

export default Main;
