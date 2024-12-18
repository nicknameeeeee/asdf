import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import style from './main.module.css';
import q1object from './q1object.png';
import q1objectHover from './q1object2.png'; 
import q2object from './q2object.png';
import q2objectHover from './q2object2.png';
import q3object from './q3object.png';
import q3objectHover from './q3object2.png';
import q4object from './q4object.png';
import q4objectHover from './q4object2.png';
import q5object from './q5object.png';
import q5objectHover from './q5object2.png'

const Main = () => {
  /* 게임 설명 */
  const text = [
    "타임머신을 연구하던 연구원이었던 당신은 개발한 타임머신의 성능을 시험해보기 위해 타임머신을 직접 타보기로 했습니다.\n뭐라고 써야 하지",
    "설명 2"
  ];

  const [nowindex, setnowIndex] = useState(0);
  const [visible, setvisible] = useState(sessionStorage.getItem('visible') !== 'false');
  const [q1imageSrc, setq1ImageSrc] = useState(q1object);
  const [q2imageSrc, setq2ImageSrc] = useState(q2object);
  const [q3imageSrc, setq3ImageSrc] = useState(q3object);
  const [q4imageSrc, setq4ImageSrc] = useState(q4object);
  const [q5imageSrc, setq5ImageSrc] = useState(q5object);
  const max = text.length;

  const changeText = () => {
    if (nowindex < max - 1) {
      setnowIndex((prevIndex) => prevIndex + 1);
    } else {
      setvisible(false);
      sessionStorage.setItem('visible', 'false');
    }
  };

  const spaceon = (e) => {
    if (e.code === "Space") {
      changeText();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", spaceon);
    return () => {
      window.removeEventListener("keydown", spaceon);
    };
    // eslint-disable-next-line
  }, [nowindex]);

  const reset = (e) => {
    sessionStorage.setItem('visible', 'true');
    sessionStorage.setItem('lockvisible1', 'true');
    sessionStorage.setItem('visible1', 'false');
    sessionStorage.setItem('lockvisible2', 'true');
    sessionStorage.setItem('visible2', 'false');
    sessionStorage.setItem('lockvisible3', 'true');
    sessionStorage.setItem('visible3', 'false');
    sessionStorage.setItem('health', '5')
  };

  // 이미지 테두리
  const q1MouseEnter = () => {
    setq1ImageSrc(q1objectHover);
  };

  const q1MouseLeave = () => {
    setq1ImageSrc(q1object); 
  };

  const q2MouseEnter = () => {
    setq2ImageSrc(q2objectHover);
  };

  const q2MouseLeave = () => {
    setq2ImageSrc(q2object); 
  };

  const q3MouseEnter = () => {
    setq3ImageSrc(q3objectHover);
  };

  const q3MouseLeave = () => {
    setq3ImageSrc(q3object); 
  };

  const q4MouseEnter = () => {
    setq4ImageSrc(q4objectHover);
  };

  const q4MouseLeave = () => {
    setq4ImageSrc(q4object); 
  };
  const q5MouseEnter = () => {
    setq5ImageSrc(q5objectHover);
  };

  const q5MouseLeave = () => {
    setq5ImageSrc(q5object); 
  };

  return (
    <div className={style.mainbg}>
    <div>
      {visible && (
        <div className={style.boxbox}>
          <div className={style.describe}>
            {text[nowindex].split("\n").map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </div>
          <input
            type="button"
            value="텍스트 변경"
            onClick={changeText}
            className={style.nexttext}
          />
        </div>
      )}
      <div>
        <Link to="/quizone">
          <img
            id="modal1"
            src={q1imageSrc} 
            alt="quiz1"
            className={style.q1object}
            onMouseEnter={q1MouseEnter}
            onMouseLeave={q1MouseLeave} 
          />
        </Link>
        <Link to="/quiztwo">
        <img
            src={q2imageSrc} 
            alt="quiz2"
            className={style.q2object}
            onMouseEnter={q2MouseEnter}
            onMouseLeave={q2MouseLeave} 
          />
        </Link>
        <Link to="/quizthree">
        <img
            src={q3imageSrc}
            alt="quiz3"
            className={style.q3object}
            onMouseEnter={q3MouseEnter} 
            onMouseLeave={q3MouseLeave} 
          />
        </Link>
        <Link to="/quizfour">
        <img
            src={q4imageSrc}
            alt="quiz4"
            className={style.q4object}
            onMouseEnter={q4MouseEnter} 
            onMouseLeave={q4MouseLeave} 
          />
        </Link>
        <Link to="/quizfive">
        <img
            src={q5imageSrc}
            alt="quiz5"
            className={style.q5object}
            onMouseEnter={q5MouseEnter} 
            onMouseLeave={q5MouseLeave} 
          />
        </Link>
      </div>
      <button
        onClick={reset}
        className={style.reset}
      >
        초기화
      </button>
    </div>
    </div>
  );
};

export default Main;
