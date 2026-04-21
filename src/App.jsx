import { useState } from "react";
import "./App.css";
import bg1 from "./assets/background1.png";
import bg2 from "./assets/background2.png";
import bgMusic from "./assets/sounds/jazz-bg-music-loop.mp3";
import chime from "./assets/sounds/chime-short.mp3";
import vinyl from "./assets/vinyl.png";

import confetti from "canvas-confetti";
import confettiPop from "./assets/sounds/confetti-pop.mp3";
import endscreen from "./assets/endscreen.png";

// For the letter fade in
function AnimatedWord({ word, startIndex }) {
  return (
    <span className="word">
      {word.split("").map((char, i) => (
        <span
          key={i}
          className="letter"
          style={{ animationDelay: `${(startIndex + i) * 0.06}s` }}
        >
          {char}
        </span>
      ))}
    </span>
  );
}

function App() {
  const [isOpened, setIsOpened] = useState(false);
  const text = "Will you be my Valentine?";
  const words = text.split(" ");
  const [answered, setAnswered] = useState(false);

  // random position for the No button
  const [noPos, setNoPos] = useState({ top: "60%", left: "55%" });

  // generates random pos
  function runAway() {
    const top = Math.random() * 80 + 5; // 5–85%
    const left = Math.random() * 80 + 5; // 5–85%
    setNoPos({ top: `${top}%`, left: `${left}%` });
  }

  // handle confetti effects after 'Yes' is clicked
  function handleYes() {
    const audio = new Audio(confettiPop);
    audio.play();

    confetti({
      particleCount: 150,
      spread: 80,
      origin: { y: 0.6 },
      colors: ["#ff6b9d", "#ffd6e7", "#ff9eb5", "#ffffff", "#ffb3c6"],
    });

    setTimeout(() => {
      confetti({
        particleCount: 100,
        spread: 120,
        origin: { y: 0.4 },
        colors: ["#ff6b9d", "#ffd6e7", "#ff9eb5", "#ffffff", "#ffb3c6"],
      });
    }, 300);
    setAnswered(true);
  }

  function handleOpen() {
  const audio = new Audio(chime);
  audio.play();

  setIsOpened(true);
}

  return (
    <div className="scene">
      <audio autoPlay loop>
        <source src={bgMusic} type="audio/mpeg" />
      </audio>
      <img src={vinyl} className="vinyl" />

      {/* closed letter scene */}
      <div
        className="bg-layer"
        style={{ backgroundImage: `url(${bg1})` }}
      ></div>
      <div className="opening-text">Open Me</div>

      {/* open letter scene */}
      <div
        className={`bg-layer bg-layer-top ${isOpened ? "opened" : ""}`}
        style={{ backgroundImage: `url(${bg2})` }}
      />
      <div
        className={`bg-layer bg-layer-top ${answered ? "opened" : ""}`}
        style={{ backgroundImage: `url(${endscreen})` }}
      />

      {/* before envelope is opened */}
      {!isOpened && (
        <div className="clickable-envelope" onClick={handleOpen} />
      )}

      {/* after envelope is opened */}
      {isOpened && !answered && (
        <>
          {/* animated text "will you be my valentine?" */}
          <div className="bg2-text">
            {words.map((word, wi) => (
              <AnimatedWord
                key={wi}
                word={word}
                startIndex={text.indexOf(word)}
              />
            ))}
          </div>

          <button className="btn btn-yes" onClick={handleYes}>
            Yes!
          </button>

          {/* on hover, no button runs away to random pos */}
          <button
            className="btn btn-no"
            style={{ top: noPos.top, left: noPos.left }}
            onMouseEnter={runAway}
            onClick={runAway}
          >
            No way!
          </button>
        </>
      )}

      {isOpened && answered && (
        <>
          <div className="end-scene-date">
            14.02
          </div>  
          <div className="end-scene-seat">
            NEXT 2 ME
          </div>
          <div className="end-scene-text">
            Save the date
          </div>
        </>
      )}
    </div>
  );
}

export default App;
