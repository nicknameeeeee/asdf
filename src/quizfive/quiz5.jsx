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

  const part1 = [
    "ㅁㅁ ㅁㅁㅁ ㅁㅁ ㅁㅁㅁㅁ\nㅁㅁㅁㅁ",
    "나ᄂᆞᆫ 초신성 가ᄐᆞᆫ 존재이니\n전전긍긍"];
  const part2 = [
    "ㅁ ㅁㅁ ㅁ ㅁㅁ\nㅁㅁㅁㅁ\nㅁㅁ ㅁ\nㅁ ㅁㅁ",
    "나 녀는 거 보니\n吟風弄月(음풍농월)\n비취 ᄆᆞᆯ\n하 동동"];
  const part3 = [
    "ㅁ ㅁㅁ\nㅁㅁㅁ ㅁ ㅁㅁ ㅁㅁ\nㅁㅁ ㅁㅁㅁ\nㅁㅁ ㅁㅁ ㅁ ㅁㅁㅁㅁ",
    "문 개야\nᄃᆞ로의 ᄒᆞᆫ ᄌᆞ랄 알오\n마치 어긋남\n나ᄅᆞᆯ 닮은 님 누구뇨"];
  const part4 = [
    "ㅁㅁ ㅁㅁㅁ\nㅁㅁㅁ ㅁㅁ ㅁㅁ",
    "ᄋᆞᆯ은 닐어오\n머흘게 ᄒᆞ다 아으"];

  const Change = (e) => {
    setInputValue(e.target.value);
  };

  const getValueInText = () => {
    const answer = "supernova";
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
            {part1[p4what]?.split("\n").map((line, index) => (
              <React.Fragment key={`part1-${index}`}>
                {line}
                <br />
              </React.Fragment>
            ))}
            {part2[p1what]?.split("\n").map((line, index) => (
              <React.Fragment key={`part2-${index}`}>
                {line}
                <br />
              </React.Fragment>
            ))}
            {part3[p2what]?.split("\n").map((line, index) => (
              <React.Fragment key={`part3-${index}`}>
                {line}
                <br />
              </React.Fragment>
            ))}
            {part4[p3what]?.split("\n").map((line, index) => (
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
