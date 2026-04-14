import { useState } from "react";
import "./App.css";
import bg1 from "./assets/background1.png";
import bg2 from "./assets/background2.png";

function App() {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div className="scene">
      <div
        className="bg-layer"
        style={{ backgroundImage: `url(${bg1})` }}
      ></div>

      <div
        className={`bg-layer bg-layer-top ${isOpened ? "opened" : ""}`}
        style={{ backgroundImage: `url(${bg2})` }}
      ></div>
      {!isOpened && (
        <div className="clickable-envelope" onClick={() => setIsOpened(true)} />
      )}
    </div>
  );
}

export default App;
