import React, { useState, useRef } from "react";
import { handleNoteDown } from "../Midi";
import styles from "./Note.module.css";

export default function Note({ noteValue, color, keyCode }) {
  const [isActive, setIsActive] = useState(false);
  const ref = useRef();
  // todo navigate with arrow keys
  function handlePressStart(e) {
    handleNoteDown({ noteValue }, e);
    setIsActive((prev) => true);
  }
  function handlePressEnd(e) {
    setIsActive((prev) => false);
  }

  function handleKeyPress(e) {
    if (e.keyCode == 32 || e.keyCode == keyCode) {
      handleNoteDown({ noteValue }, e);
      // ref.current.focus();
    }
  }

  return (
    <div
      onMouseDown={handlePressStart}
      tabIndex={0}
      role="tab"
      onMouseUp={handlePressEnd}
      onMouseOut={handlePressEnd}
      onKeyDown={handleKeyPress}
      className={`${styles[color]} ${isActive ? styles["active"] : ""}`}
      data-note={`${noteValue}`}
    >
      {noteValue} {keyCode}
    </div>
  );
}
