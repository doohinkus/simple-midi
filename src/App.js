import React from "react";
import "./App.css";
import Keyboard from "./Keyboard/Keyboard";
import { Note } from "./Midi";

function App() {
  const c = new Note();
  c.setKeyTrigger("s");
  c.setRoot("C");
  c.setOctave(4);
  c.setNote();

  return (
    <div className="App" role="main">
      <h1>Midi Keyboard</h1>
      <button
        onKeyPress={(e) => {
          if (e.key === c.key) c.playNote();
        }}
        onClick={() => c.playNote()}
      >
        play C
      </button>
      {/* <Keyboard />
       */}
    </div>
  );
}

export default App;
