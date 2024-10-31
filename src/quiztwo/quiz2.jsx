import React, { useState } from "react";
import { Link } from "react-router-dom";

const Main = () => {

  /*문제*/

  const [input, setInputValue] = useState(""); 
  const [visible, setvisible] = useState(false);

  const Change = (e) => {
    setInputValue(e.target.value);
  };

  const getValueInText = () => {
    const answer = "으아아";
    if (input === answer) {
      alert("correct");
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
    
    /*잠금*/
    const [lockvisible, setlockvisible] = useState(true);
    const [lockinput, setlockinput] = useState("");

    const lockChange = (e) => {
      setlockinput(e.target.value);
    };

    const password = () => {
      const psword = "1234";
      if (lockinput === psword) {
        setlockvisible(false);
        setvisible(true);
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
          <button>Go to main</button>
        </Link>
      </nav>

      {/*잠금 코드*/}

      {lockvisible &&  
      <div>
          <input
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
}

      {/*문제 코드*/}
      {visible && 
      <div>
          <input
            type="text"
            placeholder="으아아"
            value={input}
            onChange={Change}
            onKeyDown={(e) => activeEnter(e)}
          />
      <input type="button" value="으아아" onClick={() => { 
      activeButton();
      }}/>
      </div>
}

    </div>

  );
};

export default Main;
