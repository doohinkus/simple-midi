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
  // console.log(keyBoard.notes[0]);
  const [activeKey, setActiveKey] = useState(null);
  const [activeNote, setActiveNote] = useState(null);
  return (
    <div
      className="App"

      // role="main"
    >
      <h1>Midi Keyboard</h1>
      <div
        style={{
          display: "flex",
          overflow: "hidden",
          border: "1px solid lime",
        }}
        tabIndex={0}
        onKeyDown={(e) => {
          e.stopPropagation();

          const note = keyBoard.notes.filter((note) => note.key === e.key)[0];
          if (note) {
            note.playNote();
            setActiveNote(note.getNote());
          }
        }}
        // onKeyUp={(e) => setActiveNote(null)}
      >
        {keyBoard.notes.map((note) => (
          <div
            onClick={(e) => {
              e.stopPropagation();
              note.playNote();
              setActiveNote(note.getNote());
            }}
            style={{
              width: "3rem",
              height: "10rem",
              backgroundColor: "hotpink",
            }}
            key={note.getNote()}
            className={`${activeNote === note.getNote() ? "active" : ""}`}
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
