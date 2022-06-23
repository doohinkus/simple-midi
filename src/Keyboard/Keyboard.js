import React, { useRef, useState } from "react";
import Key from "./Key";
export default function Keyboard({ keyBoard }) {
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
          <Key note={note} />
        </div>
      ))}
    </div>
  );
}
