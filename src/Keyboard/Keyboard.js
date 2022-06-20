import React, { useState } from "react";
import { notes } from "../Midi";
import styles from "./Keyboard.module.css";

export default function Keyboard() {
  const [octave, setOctave] = useState(4);
  const [activeNote, setActiveNote] = useState(null);
  const [currentNote, setCurrentNote] = useState(null);
  const [activeKey, setActiveKey] = useState(null);

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
    setActiveKey((prev) => key);
    if (isNoteKey) {
      notes[key].play(octave);
      setActiveNote(notes[key].note + octave);
      setCurrentNote(notes[key].note + octave);
    }
    if (key === "ArrowUp") {
      raiseOctave();
    }
    if (key === "ArrowDown") {
      lowerOctave();
    }
  }
  function handleKeyUp(e) {
    const key = e.key;
    const isNoteKey = notes[key];
    setActiveKey((prev) => null);

    if (isNoteKey) {
      notes[key] && notes[key].play(octave);
      setActiveNote(null);
    }
  }
  const activeClass = (key) => `${activeKey === key ? styles.active : ""}`;
  const keyClass = (note, key) =>
    `${styles.key} ${styles.flex} ${styles.flexBottom} ${styles.flexCenter} ${
      /#/.test(note) ? styles.black : styles.white
    } ${activeClass(key)}`;

  return (
    <>
      <p>octave: {octave}</p>
      <p>last note played: {currentNote}</p>
      <p>active key: {activeKey}</p>
      <div
        className={styles.keyboard}
        tabIndex={0}
        onKeyDown={handleKeyDown}
        onKeyUp={handleKeyUp}
      >
        <button onClick={raiseOctave} className={`${activeClass("ArrowUp")}`}>
          Raise Octave
        </button>
        {Object.keys(notes).map((note) => {
          const _note = notes[note].note;
          return (
            <div
              key={_note}
              className={keyClass(_note, notes[note].key)}
              data-note={note}
            >
              <p>{_note}</p>
            </div>
          );
        })}

        <button onClick={lowerOctave} className={`${activeClass("ArrowDown")}`}>
          Lower Octave
        </button>
      </div>
    </>
  );
}
