import React, { useState, useEffect } from "react";
import style from './escape.module.css';

const Main = () => {
  /* 게임 설명 */
  const text = [
    "당신은 서당 안에 숨겨진 여러 단서들을 조합하고, 문제들을 풀어가며 마침내 조선 시대에서 탈출하는 데 성공했습니다!",
    "익숙한 풍경이 보이네요...",
  ];

  const [nowindex, setnowIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const max = text.length;

  const changeText = () => {
    if (nowindex < max - 1) {
      setnowIndex((prevIndex) => prevIndex + 1);
    } else {
      setVisible(false); // 마지막 텍스트에 도달하면 boxbox를 숨깁니다.
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
  }, []); // 의존성 배열을 비워서 컴포넌트 마운트/언마운트 시에만 실행되도록 합니다.

  // 이제 nowindex 상태가 변경될 때마다 그에 맞춰 boxbox의 visible 상태를 업데이트 합니다.
  useEffect(() => {
    if (nowindex > max - 1) {
      setVisible(false); // 이제 nowindex가 마지막 값에 도달하면 boxbox를 숨깁니다.
    }
  }, [nowindex, max]);

  return (
    <div className={style.mainbg}>
      {visible && (
        <div className={style.boxbox}>
          <div className={style.describe}>
            <div className={style.content}>
              {/* text[nowindex]가 문자열일 경우에만 split 호출 */}
              {typeof text[nowindex] === "string" ? (
                text[nowindex].split("\n").map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    <br />
                  </React.Fragment>
                ))
              ) : (
                <span>{text[nowindex]}</span>
              )}
            </div>
            <div className={style.space}>SPACE 키를 눌러 계속 진행하세요</div>
          </div>
          <input
            type="button"
            value="텍스트 변경"
            onClick={changeText}
            className={style.nexttext}
          />
        </div>
      )}
    </div>
  );
};

export default Main;
