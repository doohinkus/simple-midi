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
export class Synth {
  constructor() {
    this.synth = new Tone.PolySynth().toDestination();
  }
}
export class Note extends Synth {
  setRoot(root) {
    this.root = root;
  }
  setOctave(octave) {
    this.octave = octave;
  }
  setNote() {
    this.note = this.root + this.octave;
  }
  setKeyTrigger(key) {
    this.key = key;
  }
  playNote() {
    console.log(this.synth, " ", this.note, " ", this.key);
    this.synth.triggerAttackRelease(this.note, "16n");
  }
}
