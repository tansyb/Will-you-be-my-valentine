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

  return (
    <div className="scene">
      <div
        className="bg-layer"
        style={{ backgroundImage: `url(${bg1})` }}
        // add in the title for open me
      ></div>
      <div
        className="opening-text"
      >Open Me</div>

      <div
        className={`bg-layer bg-layer-top ${isOpened ? "opened" : ""}`}
        style={{ backgroundImage: `url(${bg2})` }}
        
      >
        <div className="bg2-text">
          {words.map((word, wi) => (
            <AnimatedWord
              key={wi}
              word={word}
              startIndex={text.indexOf(word)}
            />
          ))}
        </div>
      </div>
      {!isOpened && (
        <div className="clickable-envelope" onClick={() => setIsOpened(true)}/>
      )}
    </div>
  );
}

export default App;
