import React, { useState } from "react";
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
