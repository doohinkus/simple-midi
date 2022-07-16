import React, { memo } from "react";
import { useLoadCount } from "../../useLoadCount";
function Key({ note }) {
  // useLoadCount();

  return (
    <>
      <p style={{ height: "50%" }}>
        {/* <span
          style={{
            background: "yellow",
            color: "var(--dark)",
            padding: ".25rem",
            textAlign: "left",
            display: "block",
          }}
        >
          {note.getNote()}
        </span> */}
      </p>
      <p>{note.getKey()}</p>
    </>
  );
}
export default memo(Key);
