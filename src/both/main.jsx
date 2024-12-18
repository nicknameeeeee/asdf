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
    "타임머신을 연구하던 연구원이었던 당신은 개발한 타임머신의 성능을 시험해보기 위해 타임머신을 직접 타보기로 했습니다.\n하지만, 타임머신은 오작동을 일으켰고, 당신은 조선 시대에 떨어져버리고 말았습니다! \n 당신이 눈을 뜬 곳은 조선시대의 어느 서당 안이었습니다. \n서당을 탈출하기 위해서는 서당 안에 숨겨진 여러 가지 문제들을 풀고 단서를 얻어 잠겨있는 문을 열어야 합니다.\n행운을 빕니다!",
    "숨겨진 문제를 찾기 위해 서당 안 이곳저곳을 둘러보세요. \n상호작용 가능한 물체는 마우스를 올렸을 때 강조 표시됩니다.\n최종 문제의 내용은 훼손되어있습니다. 숨겨진 문제들을 풀어가며 최종 문제의 내용을 알아가보세요."
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
    sessionStorage.setItem('nowIndex', '0')
    sessionStorage.setItem('part1', '0')
    sessionStorage.setItem('part2', '0')
    sessionStorage.setItem('part3', '0')
    sessionStorage.setItem('part4', '0')
    sessionStorage.setItem('desc', 'true')
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
    
/*나ᄂᆞᆫ 초신성 가ᄐᆞᆫ 존재이니
전전긍긍
나 녀는거 보니
음풍농월
비취 ᄆᆞᆯ
하 동동
문 개야
ᄃᆞ로의 ᄒᆞᆫ ᄌᆞ랄 알오
마치 어긋남
나ᄅᆞᆯ 닮은 님 누구뇨
ᄋᆞᆯ은 닐어오 아으
머흘게 ᄒᆞ다 아으*/

/*가시받긿 웋로 ᄃᆞᆯ녀 너는 나ᄅᆞᆯ 자극하야
거즛으로 가득찬 잔치ᄀᆞ랍지도 않아
나의 뒤헤 말들이 만ᄒᆞ야 나도 첨 듣는 내 원수
모도 기원해 내 추락 그 손 우희로 ꥢᅱ어ᄂᆞ랴
그라, 주라
걸어라 ᄉᆞᅀᆞᄀᆞ튼 위엄으로 */

/*ᄆᆞᅀᆞᆷ 여디 말오 드러내디 말오
착ᄒᆞᆫ 양ᄌᆞ 샹녜 뵈여주며
텰더케 숨기니 드러나더라
다 니저 다  니저 이제 ᄎᆞᆷ디 아니호리라
다 니저 다 니저 ~을 열오 나가오리라
괴이티 아니ᄒᆞᄂᆞ다 뉘 므스기라 ᄒᆞ야도
폭풍 모라텨도 쥬위는 두립디 아니ᄒᆞ니
거리ㄹ 두고 보면 모ᄃᆞᆫ 거시 쟈가뵈니 */
    <div className={style.mainbg}>
    <div>
      {visible && (
        <div className={style.boxbox}>
          <div className={style.describe}>
            <div className={style.content}>
            {text[nowindex].split("\n").map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </div>
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

