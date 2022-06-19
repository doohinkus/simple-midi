import React from "react";
import "./App.css";
import Keyboard from "./Keyboard/Keyboard";
// import { startTone } from "./Midi";

function App() {
  return (
    <div className="App">
      {/* <button onClick={startTone}>start</button> */}
      <Keyboard />
    </div>
  );
}

export default App;
