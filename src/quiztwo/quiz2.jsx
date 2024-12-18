import React, { useState } from "react";
import { Link } from "react-router-dom";
import style from "./quiz2.module.css";
import modal from './question.png';
import genious from './genious.webp';

const Main = () => {

  /*문제*/

  const [input, setInputValue] = useState(""); 
  const [visible1, setvisible1] = useState(sessionStorage.getItem('visible1') !== 'false');

  const Change = (e) => {
    setInputValue(e.target.value);
  };

  const getValueInText = () => {
    const answer = "똑똑핑";
    if (input === answer) {
      alert("정답입니다! \n\n 다음 문제의 비밀번호는 2345입니다.\n\n 최종 문제의 일부분을 찾았습니다!\n\n문 개야\nᄃᆞ로의 ᄒᆞᆫ ᄌᆞ랄 알오\n마치 어긋남\n나ᄅᆞᆯ 닮은 님 누구뇨");
      sessionStorage.setItem('part2', '1')
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
      {visible1 && 
            <div className={style.question}>
              <div className={style.content}>다음 캐릭터의 이름은?</div>
              <img src={genious} className={style.ping} alt="pingping"></img>
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
