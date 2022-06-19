import React, { useState } from "react";
import { notes } from "../Midi";
import styles from "./Keyboard.module.css";

export default function Keyboard() {
  const [octave, setOctave] = useState(4);
  const [activeNote, setActiveNote] = useState(null);
  const [currentNote, setCurrentNote] = useState(null);

  function raiseOctave() {
    if (octave < 8) {
      setOctave((prev) => prev + 1);
    }
  }
  function lowerOctave() {
    if (octave > 1) {
      setOctave((prev) => prev - 1);
    }
  }
  function handleKeyDown(e) {
    const key = e.key;
    const isNoteKey = notes[key];
    // console.log("key -> ", key);
    if (isNoteKey) {
      notes[key] && notes[key].play(octave);
      setActiveNote(notes[key].note + octave);
      setCurrentNote(notes[key].note + octave);
    }
    if (key == "ArrowUp") {
      raiseOctave();
    }
    if (key == "ArrowDown") {
      lowerOctave();
    }
  }
  function handleKeyUp(e) {
    const key = e.key;
    const isNoteKey = notes[key];
    if (isNoteKey) {
      notes[key] && notes[key].play(octave);
      setActiveNote(null);
    }
  }
  const keyClass = (note) =>
    `${styles.key} ${styles.flex} ${styles.flexBottom} ${
      styles.flexCenter
    }    ${/#/.test(note) ? styles.black : styles.white} ${
      note + octave === activeNote ? styles.active : ""
    }`;
  return (
    <>
      <p>octave: {octave}</p>
      <p>last note played: {currentNote}</p>
      <div
        className={styles.keyboard}
        tabIndex={0}
        onKeyDown={handleKeyDown}
        onKeyUp={handleKeyUp}
      >
        <button onClick={raiseOctave}>Raise Octave</button>
        {Object.keys(notes).map((note) => {
          const _note = notes[note].note;
          return (
            <div key={_note} className={keyClass(_note)}>
              <p>{_note}</p>
            </div>
          );
        })}
        <button onClick={lowerOctave}>Lower Octave</button>
      </div>
    </>
  );
}
