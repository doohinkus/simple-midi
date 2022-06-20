import React from "react";
// import styles from "./Note.module.css";

export default function Note({ _note, octave, _class }) {
  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        _note.play(octave);
      }}
      className={_class}
      data-note={_note.note}
    >
      <p>{_note.key}</p>
    </div>
  );
}
