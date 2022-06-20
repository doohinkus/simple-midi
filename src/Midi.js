import * as Tone from "tone";

export const synth = new Tone.PolySynth().toDestination();
export async function startTone() {
  await Tone.start();
}
export const notes = {
  a: {
    note: "C",
    key: "a",
    play(octave) {
      synth.triggerAttackRelease([this.note + octave], "16n");
    },
  },
  s: {
    note: "C#",
    key: "s",
    play(octave) {
      synth.triggerAttackRelease([this.note + octave], "16n");
    },
  },
  d: {
    note: "D",
    key: "d",
    play(octave) {
      synth.triggerAttackRelease([this.note + octave], "16n");
    },
  },
  f: {
    note: "D#",
    key: "f",
    play(octave) {
      synth.triggerAttackRelease([this.note + octave], "16n");
    },
  },
  g: {
    note: "E",
    key: "g",
    play(octave) {
      synth.triggerAttackRelease([this.note + octave], "16n");
    },
  },
  h: {
    note: "F",
    key: "h",
    play(octave) {
      synth.triggerAttackRelease([this.note + octave], "16n");
    },
  },
  j: {
    note: "F#",
    key: "j",
    play(octave) {
      synth.triggerAttackRelease([this.note + octave], "16n");
    },
  },
};

export const record = [];
