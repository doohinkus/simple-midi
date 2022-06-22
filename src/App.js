import React, { useState } from "react";
import "./App.css";
import { NoteFactory } from "./Midi";

const keyBoard = new NoteFactory();
keyBoard.makeNotesFromArray([
  { root: "C", octave: 4, key: "a" },
  { root: "C#", octave: 4, key: "s" },
  { root: "D", octave: 4, key: "d" },
  { root: "D#", octave: 4, key: "f" },
  { root: "E", octave: 4, key: "g" },
  { root: "F", octave: 4, key: "h" },
  { root: "F#", octave: 4, key: "j" },
]);

function App() {
  const [activeNote, setActiveNote] = useState(null);
  function handleNoteDown(e) {
    e.stopPropagation();
    const note = keyBoard.notes.filter((note) => note.key === e.key)[0];
    if (note) {
      note.playNote();
      setActiveNote(note.getNote());
    }
  }
  function handleNoteUp(e) {
    e.stopPropagation();
    setActiveNote(null);
  }
  return (
    <div className="App" role="main">
      <h1>Midi Keyboard</h1>
      <div
        className="keyboard"
        tabIndex={0}
        onKeyDown={handleNoteDown}
        onKeyUp={handleNoteUp}
      >
        {keyBoard.notes.map((note) => (
          <div
            onMouseDown={(e) => {
              e.stopPropagation();
              note.playNote();
              setActiveNote(note.getNote());
            }}
            onMouseUp={handleNoteUp}
            key={note.getNote()}
            className={`key flexBottom ${note.isSharp() ? "black" : "white"} ${
              activeNote === note.getNote() ? "active" : ""
            }`}
          >
            <p>{note.getNote()}</p>
          </div>
        ))}
      </div>
      {/* <Keyboard />
       */}
    </div>
  );
}

export default App;
