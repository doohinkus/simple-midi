import React from "react";

export default function Key({ note }) {
  return (
    <>
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
    </>
  );
}
