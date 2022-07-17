import React, { memo } from "react";
// import { useLoadCount } from "../../useLoadCount";
function Key({ note }) {
  // useLoadCount();

  return (
    <>
      <p style={{ height: "50%" }}></p>
      <p>{note.getKey()}</p>
    </>
  );
}
export default memo(Key);
