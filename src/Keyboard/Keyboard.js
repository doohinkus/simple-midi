import React, { useRef, useState, memo, useCallback } from "react";
import Key from "./Key";
import Button from "./Button";
import { useLoadCount } from "../useLoadCount";
function Keyboard({ keyBoard }) {
  const keys = useRef();
  const [activeNote, setActiveNote] = useState(null);
  const [octave, setOctave] = useState(3);
  function playNote(note) {
    note.setOctave(octave);
    note.setNote();
    setActiveNote((prev) => note.getNote());
    // console.log(note);
    note.playNote();
  }
  function handleKeyDown(e) {
    e.stopPropagation();
    const key = e.key;
    const note = keyBoard.notes.filter((note) => note.key === key)[0];

    if (note) playNote(note);
    if (key === "ArrowUp") handleRaiseOctave();
    if (key === "ArrowDown") handleLowerOctave();
  }
  function handleNoteUp(e) {
    e.stopPropagation();
    setActiveNote(null);
    keys.current.focus();
  }
  function handleRaiseOctave() {
    if (octave < 6) setOctave((prev) => prev + 1);
  }
  function handleLowerOctave() {
    if (octave > 1) setOctave((prev) => prev - 1);
  }
  const _handleLowerOctave = useCallback(handleLowerOctave, [octave]);
  const _handleRaiseOctave = useCallback(handleRaiseOctave, [octave]);
  return (
    <div
      className="keyboard"
      data-testid="keyboard"
      ref={keys}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onKeyUp={handleNoteUp}
    >
      <Button handleClick={_handleLowerOctave}>Lower Octave</Button>

      {keyBoard?.notes?.map((note) => (
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
      <Button handleClick={_handleRaiseOctave}>Increase Octave</Button>
    </div>
  );
}
export default memo(Keyboard);
