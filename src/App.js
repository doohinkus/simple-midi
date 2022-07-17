import React from "react";
import "./App.css";
import { NoteFactory } from "./Midi";
import Keyboard from "./Keyboard/Keyboard";

const keyBoard = new NoteFactory();
keyBoard.makeNotesFromArray([
  { root: "C", octave: 4, key: "a" },
  { root: "C#", octave: 4, key: "q" },
  { root: "D", octave: 4, key: "s" },
  { root: "D#", octave: 4, key: "w" },
  { root: "E", octave: 4, key: "d" },
  { root: "F", octave: 4, key: "f" },
  { root: "F#", octave: 4, key: "r" },
  { root: "G", octave: 4, key: "g" },
  { root: "G#", octave: 4, key: "t" },
  { root: "A", octave: 4, key: "h" },
  { root: "A#", octave: 4, key: "y" },
]);
function App() {
  return (
    <div className="App" role="main" data-testid="app">
      <h1>Midi Keyboard</h1>
      <Keyboard keyBoard={keyBoard} />
    </div>
  );
}

export default App;
