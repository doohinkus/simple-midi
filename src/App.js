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
    <div className="App">
      <h1>Midi Keyboard</h1>
      <div
        style={{
          display: "flex",
          overflow: "hidden",
          border: "1px solid lime",
          justifyContent: "center",
          margin: "auto",
        }}
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
            style={{
              width: "3rem",
              height: "10rem",
              border: "1px solid #333",
            }}
            key={note.getNote()}
            className={`${activeNote === note.getNote() ? "active" : ""}${
              note.isSharp() ? "sharp" : ""
            }`}
          >
            {note.getNote()} {note.isSharp() ? "sharp" : ""}
          </div>
        ))}
      </div>
      {/* <Keyboard />
       */}
    </div>
  );
}

export default App;
