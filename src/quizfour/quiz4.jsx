import React, { useEffect, useRef, useState } from "react";
import ghost from "./ghost.png";
import style from "./quiz4.module.css";
import { Link } from "react-router-dom";

const CanvasGame = () => {
  const canvasRef = useRef(null);
  const [image, setImage] = useState(null);
  const [canvasWidth, setCanvasWidth] = useState(window.innerWidth);
  const [canvasHeight, setCanvasHeight] = useState(window.innerHeight);
  const animationFrameId = useRef(null); // 애니메이션 ID 저장
  const [health, setHealth] = useState(() => {
    const storedHealth = sessionStorage.getItem("health");
    return storedHealth ? parseInt(storedHealth, 10) : 5; // 기본값 5
  });
  const [visible3, setVisible3] = useState(sessionStorage.getItem("visible3") !== "false");
  const [nowIndex, setNowIndex] = useState(() => {
    const storedIndex = sessionStorage.getItem("nowIndex");
    return storedIndex ? parseInt(storedIndex, 10) : 0; // 기본값 0
  });
  const text = [
    "귀신이 중얼거립니다...",
    "나 녀는 거 보니\n吟風弄月(음풍농월)\n비취 ᄆᆞᆯ\n하 동동...",
  ]; // 게임 설명 텍스트
  const max = text.length;

  // 체력 상태가 변경될 때마다 sessionStorage에 저장
  useEffect(() => {
    sessionStorage.setItem("health", health);
  }, [health]);

  // nowIndex가 변경될 때 sessionStorage에 저장
  useEffect(() => {
    sessionStorage.setItem("nowIndex", nowIndex);
  }, [nowIndex]);

  // 창 크기 업데이트
  useEffect(() => {
    const handleResize = () => {
      setCanvasWidth(window.innerWidth);
      setCanvasHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 이미지 초기화 및 이동
  const createNewImage = () => ({
    id: Math.random(),
    x: Math.random() * (canvasWidth - 50),
    y: Math.random() * (canvasHeight - 50),
    size: 100,
  });

  useEffect(() => {
    if (health > 0) {
      setImage(createNewImage());

      const interval = setInterval(() => {
        if (health > 0) {
          setImage(createNewImage());
        }
      }, 1000);

      return () => clearInterval(interval);
    } else {
      setImage(null); // 체력이 0이면 이미지 제거
      setVisible3(true); // 체력이 0일 때 boxbox 보이기
    }
    // eslint-disable-next-line
  }, [canvasWidth, canvasHeight, health]);

  // 이미지 렌더링
  const drawImage = (ctx) => {
    if (!image) return; // 체력이 0이면 이미지를 그리지 않음
    const img = new Image();
    img.src = ghost;

    img.onload = () => {
      ctx.clearRect(0, 0, canvasWidth, canvasHeight); // 캔버스 초기화
      ctx.drawImage(img, image.x, image.y, image.size, image.size);
    };
  };

  // 애니메이션 루프 관리
  useEffect(() => {
    if (health === 0) return; // 체력이 0일 때 애니메이션 멈춤
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const render = () => {
      drawImage(ctx);
      animationFrameId.current = requestAnimationFrame(render);
    };

    // 애니메이션 시작
    render();

    // 컴포넌트 언마운트 시 애니메이션 중지
    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
    // eslint-disable-next-line
  }, [image, canvasWidth, canvasHeight, health]);

  // 클릭 이벤트 처리
  const handleCanvasClick = (e) => {
    if (!image || health === 0) return; // 체력이 0일 때는 클릭 처리 안 함

    const rect = canvasRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // 클릭한 위치가 이미지 내부에 있는지 확인
    if (
      mouseX >= image.x &&
      mouseX <= image.x + image.size &&
      mouseY >= image.y &&
      mouseY <= image.y + image.size
    ) {
      setHealth((prevHealth) => {
        const newHealth = Math.max(prevHealth - 1, 0); // 체력 감소, 최소값 0
        if (newHealth === 0) {
          alert("유령을 잡았습니다!");
          sessionStorage.setItem('part4', '1')
          setVisible3(true); // 체력이 0일 때만 boxbox 보이기
        }
        return newHealth;
      });
      setImage(null); // 체력 0일 때 이미지를 제거
    }
  };

  // 체력 바 렌더링
  const renderHealthBar = () => {
    const barStyle = {
      display: "flex",
      justifyContent: "center",
      margin: "20px 0", // 위아래 간격 추가
    };

    const cellStyle = {
      width: "30px",
      height: "30px",
      margin: "0 2px",
      backgroundColor: "red",
      border: "1px solid #000",
    };

    return (
      <div style={barStyle}>
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            style={{
              ...cellStyle,
              backgroundColor: index < health ? "red" : "gray", // 체력에 따라 색상 변경
            }}
          />
        ))}
      </div>
    );
  };

  // 텍스트 변경 함수
  const changeText = () => {
    if (nowIndex < max - 1) {
      setNowIndex((prevIndex) => prevIndex + 1);
    }
  };

  // 스페이스바 눌렀을 때 텍스트 변경
  const spaceOn = (e) => {
    if (e.code === "Space") {
      changeText();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", spaceOn);
    return () => {
      window.removeEventListener("keydown", spaceOn);
    };
    // eslint-disable-next-line
  }, [nowIndex]);

  return (
    <div className={style.body}>
      <nav className={style.nav}>
        <Link to="/">
          <button>뒤로가기</button>
        </Link>
      </nav>
      {renderHealthBar()}
      <canvas
        ref={canvasRef}
        width={canvasWidth}
        height={canvasHeight}
        style={{
          display: "block",
          cursor: "pointer",
          margin: 0, // 추가 여백 방지
        }}
        onClick={handleCanvasClick}
      />
      {visible3 && (
        <div className={style.boxbox}>
          <div className={style.describe}>
            <div className={style.content}>
              {text[nowIndex].split("\n").map((line, index) => (
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
    </div>
  );
};

export default CanvasGame;
