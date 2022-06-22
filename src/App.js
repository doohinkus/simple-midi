import React from "react";
import "./App.css";
import Keyboard from "./Keyboard/Keyboard";
import { NoteFactory } from "./Midi";

function App() {
  const keyBoard = new NoteFactory();
  keyBoard.makeNotesFromArray([
    { root: "C", octave: 4, key: "a" },
    { root: "C#", octave: 4, key: "s" },
    { root: "D", octave: 4, key: "d" },
  ]);
  console.log(keyBoard.notes[0]);
  return (
    <div className="App" role="main">
      <h1>Midi Keyboard</h1>
      {keyBoard.notes.map((note) => (
        <div
          onKeyPress={(e) => {
            if (e.key === note.getKey()) note.playNote();
          }}
        >
          {note.isSharp() ? "sharp" : ""}
          <button onClick={() => note.playNote()}>{note.getNote()}</button>
        </div>
      ))}
      {/* <Keyboard />
       */}
    </div>
  );
}

export default App;
