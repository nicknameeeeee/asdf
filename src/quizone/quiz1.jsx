import React, { useState } from "react";
import { Link } from "react-router-dom";

const Main = () => {
  const [input, setInputValue] = useState(""); // 입력값을 상태로 관리

  const Change = (e) => {
    setInputValue(e.target.value); // 입력 필드의 값이 변경될 때 상태 업데이트
  };

  const getValueInText = () => {
    const answer = "으아아";
    if (input === answer) {
      alert("correct");
    } else {
      alert("wrong");
    }
  };

  return (
    <div>
      <nav>
        <Link to="/">
          <button>Go to Main</button>
        </Link>
      </nav>

      <input
        type="text"
        placeholder="으아아"
        value={input}
        onChange={Change} // 입력 값이 변경되면 상태 업데이트
      />
      <input type="button" value="으아아" onClick={getValueInText} />
    </div>
  );
};

export default Main;
