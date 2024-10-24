import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import style from './main.module.css';

const Main = () => {
  const text = [
    "과거의 비밀을 풀고 방을 탈출하라\n\n여기는 현재, 하지만 잠깐의 실수로 당신은 과거로 보내졌습니다. 제한된 시간 안에 숨겨진 단서를 찾아 과거의 미스터리를 풀고 원래의 시간으로 돌아가야 합니다. 문을 열고, 시간의 장벽을 넘을 수 있을까요?\n\n🔐 방 안에는 다양한 비밀이 숨겨져 있습니다.\n💡 단서를 찾고, 퍼즐을 풀어야만 탈출할 수 있습니다.\n⏱️ 시간은 빠르게 흐르고 있습니다. 과거에 갇히기 전에 서둘러야 합니다.",
    
    "이 게임의 규칙:\n\n방 안에 있는 모든 단서를 조사하십시오.\n퍼즐을 풀고 잠겨 있는 문을 여는 방법을 찾아야 합니다.\n주어진 시간 안에 방을 탈출해야 합니다. 그렇지 않으면 영원히 과거에 갇힐 것입니다!\n과거의 미스터리 속으로 뛰어들 준비가 되셨습니까? 지금 시작하세요!"
  ];

  const [nowindex, setnowIndex] = useState(0);
  const [visible, setvisible] = useState(true);
  const max = text.length;

  const changeText = () => {
    if (nowindex < max - 1) {
      setnowIndex((prevIndex) => prevIndex + 1);
    } else {
      setvisible(false);  // This hides the box when max index is reached
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
  }, [nowindex]);

  return (
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
          <button>gotoquiz</button>
        </Link>
      </div>
    </div>
  );
};

export default Main;
