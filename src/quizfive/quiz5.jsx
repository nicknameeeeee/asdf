import React, { useState } from "react";
import { Link } from "react-router-dom";
import style from "./quiz5.module.css";
import modal from "./question.png";

const Main = () => {
  const [p1what] = useState(Number(sessionStorage.getItem("part1")) || 0);
  const [p2what] = useState(Number(sessionStorage.getItem("part2")) || 0);
  const [p3what] = useState(Number(sessionStorage.getItem("part3")) || 0);
  const [p4what] = useState(Number(sessionStorage.getItem("part4")) || 0);

  const [input, setInputValue] = useState("");

  const part1 = ["문장1", "문장2"];
  const part2 = ["문장1", "문장2"];
  const part3 = ["문장1", "문장2"];
  const part4 = ["문장1", "문장2"];

  const Change = (e) => {
    setInputValue(e.target.value);
  };

  const getValueInText = () => {
    const answer = "으아아";
    if (input === answer) {
      alert("정답입니다! \n\n 탈출에 성공하셨습니다!");
    }
  };

  const activeButton = () => {
    getValueInText();
  };

  const activeEnter = (e) => {
    if (e.key === "Enter") {
      activeButton();
    }
  };

  return (
    <div>
      <div className={style.main}>
        <img className={style.modal} src={modal} alt="modal" />
      </div>

      <nav className={style.nav}>
        <Link to="/">
          <button>뒤로가기</button>
        </Link>
      </nav>

      <div>
        <div className={style.question}>
          <div className={style.content}>
            {/* 각 파트별로 텍스트를 조건에 따라 렌더링 */}
            {part1[p1what]?.split("\n").map((line, index) => (
              <React.Fragment key={`part1-${index}`}>
                {line}
                <br />
              </React.Fragment>
            ))}
            {part2[p2what]?.split("\n").map((line, index) => (
              <React.Fragment key={`part2-${index}`}>
                {line}
                <br />
              </React.Fragment>
            ))}
            {part3[p3what]?.split("\n").map((line, index) => (
              <React.Fragment key={`part3-${index}`}>
                {line}
                <br />
              </React.Fragment>
            ))}
            {part4[p4what]?.split("\n").map((line, index) => (
              <React.Fragment key={`part4-${index}`}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </div>

          <div className={style.box}>
            <input
              className={style.input}
              type="text"
              placeholder="정답을 입력해주세요"
              value={input}
              onChange={Change}
              onKeyDown={activeEnter}
            />
            <input
              type="button"
              value="정답 입력"
              className={style.button}
              onClick={activeButton}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
