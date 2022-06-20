import React, { useState } from "react";
import { notes } from "../Midi";
import styles from "./Keyboard.module.css";
import Note from "./Note/Note";

export default function Keyboard() {
  const [octave, setOctave] = useState(4);
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
  function playNote(note, octave) {
    note.play(octave);
  }
  function handleKeyDown(e) {
    e.stopPropagation();

    const key = e.key;
    const isNoteKey = notes[key];
    setActiveKey((prev) => key);
    if (isNoteKey) {
      playNote(notes[key], octave);
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
    e.stopPropagation();
    const key = e.key;
    const isNoteKey = notes[key];
    setActiveKey((prev) => null);

    if (isNoteKey) {
      playNote(notes[key], octave);
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
        <button
          onClick={raiseOctave}
          className={`${styles.button} ${activeClass("ArrowUp")}`}
        >
          Raise Octave
        </button>
        {Object.keys(notes).map((note) => {
          const _note = notes[note];
          return (
            <Note
              _note={notes[note]}
              _class={keyClass(_note.note, _note.key)}
              octave={octave}
              key={_note.note}
              onClick={(e) => {
                e.stopPropagation();
                playNote(notes[note], octave);
              }}
            />
          );
        })}

        <button
          onClick={lowerOctave}
          className={`${styles.button} ${activeClass("ArrowDown")}`}
        >
          Lower Octave
        </button>
      </div>
    </>
  );
}
