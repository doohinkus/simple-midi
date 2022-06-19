import * as Tone from "tone";

export const synth = new Tone.PolySynth().toDestination();

export const notes = {
  a: {
    note: "C",
    play(octave) {
      synth.triggerAttackRelease([this.note + octave], "16n");
    },
  },
  s: {
    note: "C#",
    play(octave) {
      synth.triggerAttackRelease([this.note + octave], "16n");
    },
  },
  d: {
    note: "D",
    play(octave) {
      synth.triggerAttackRelease([this.note + octave], "16n");
    },
  },
  f: {
    note: "D#",
    play(octave) {
      synth.triggerAttackRelease([this.note + octave], "16n");
    },
  },
  g: {
    note: "E",
    play(octave) {
      synth.triggerAttackRelease([this.note + octave], "16n");
    },
  },
  h: {
    note: "F",
    play(octave) {
      synth.triggerAttackRelease([this.note + octave], "16n");
    },
  },
  j: {
    note: "F#",
    play(octave) {
      synth.triggerAttackRelease([this.note + octave], "16n");
    },
  },
};

export const record = [];
