import { useRef } from "react";

export function useLoadCount() {
  let count = useRef(0);
  console.log(`renders: ${count.current++}`);
}
