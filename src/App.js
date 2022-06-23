import React, { useState, useRef } from "react";
import "./App.css";
import { NoteFactory } from "./Midi";

const keyBoard = new NoteFactory();
keyBoard.makeNotesFromArray([
  { root: "C", octave: 4, key: "a" },
  { root: "C#", octave: 4, key: "q" },
  { root: "D", octave: 4, key: "s" },
  { root: "D#", octave: 4, key: "w" },
  { root: "E", octave: 4, key: "d" },
  { root: "F", octave: 4, key: "f" },
  { root: "F#", octave: 4, key: "r" },
  { root: "G", octave: 4, key: "g" },
  { root: "G#", octave: 4, key: "t" },
  { root: "A", octave: 4, key: "j" },
  { root: "A#", octave: 4, key: "u" },
]);
function App() {
  // keyBoard.notes[0].setOctave(1);
  // console.log(keyBoard.notes[0].getNote());
  const keys = useRef();
  const [activeNote, setActiveNote] = useState(null);
  const [octave, setOctave] = useState(3);
  function playNote(note) {
    note.setOctave(octave);
    note.setNote();
    setActiveNote((prev) => note.getNote());
    console.log(note);
    note.playNote();
  }
  function handleNoteDown(e) {
    e.stopPropagation();
    const note = keyBoard.notes.filter((note) => note.key === e.key)[0];
    if (note) {
      playNote(note);
    }
  }
  function handleNoteUp(e) {
    e.stopPropagation();
    setActiveNote(null);
    keys.current.focus();
  }
  return (
    <div className="App" role="main">
      <h1>Midi Keyboard</h1>
      <div
        className="keyboard"
        ref={keys}
        tabIndex={0}
        onKeyDown={handleNoteDown}
        onKeyUp={handleNoteUp}
      >
        {keyBoard.notes.map((note) => (
          <div
            onMouseDown={() => {
              playNote(note);
            }}
            onMouseUp={handleNoteUp}
            key={note.getNote()}
            className={`key ${note.isSharp() ? "black" : "white"} ${
              activeNote === note.getNote() ? "active" : ""
            }`}
          >
            <p style={{ height: "50%" }}>
              <span
                style={{
                  background: "yellow",
                  color: "var(--dark)",
                  padding: ".25rem",
                }}
              >
                {note.getNote()}
              </span>
            </p>
            <p>{note.getKey()}</p>
          </div>
        ))}
      </div>
      {/* <Keyboard />
       */}
    </div>
  );
}

export default App;
