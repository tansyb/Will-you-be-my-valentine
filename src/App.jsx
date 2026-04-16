import { useState } from "react";
import "./App.css";
import bg1 from "./assets/background1.png";
import bg2 from "./assets/background2.png";


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
  const [noPos, setNoPos] = useState({ top: "70%", left: "55%" });

  // generates random pos
  function runAway() {
    const top = Math.random() * 80 + 5;  // 5–85%
    const left = Math.random() * 80 + 5; // 5–85%
    setNoPos({ top: `${top}%`, left: `${left}%` });
  }

  return (
    <div className="scene">

      {/* closed letter scene */}
      <div
        className="bg-layer"
        style={{ backgroundImage: `url(${bg1})` }}
      ></div>
      <div
        className="opening-text"
      >Open Me</div>

      {/* open letter scene */}
      <div
        className={`bg-layer bg-layer-top ${isOpened ? "opened" : ""}`}
        style={{ backgroundImage: `url(${bg2})` }}
        
      >

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

        {/* if yes button is press, goes to black screen */}
        {answered && (
          <div className="black-screen" />
        )}

        <button
          className="btn btn-yes"
          onClick={() => setAnswered(true)}
        >
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
          {!isOpened && (
            <div className="clickable-envelope" onClick={() => setIsOpened(true)}/>
          )}
      </div>
    </div>
  );
}

export default App;
