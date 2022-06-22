import * as Tone from "tone";

export class Synth {
  constructor() {
    // if (!this.synth) {
    this.synth = new Tone.PolySynth().toDestination();
    // }
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
    // console.log(this.synth, " ", this.note, " ", this.key);
    this.synth.triggerAttackRelease(this.note, "16n");
  }
  getNote() {
    return this.note;
  }
  getKey() {
    return this.key;
  }
  getOctave() {
    return this.octave;
  }
  getRoot() {
    return this.root;
  }
  isSharp() {
    return /#/.test(this.note);
  }
}

export class NoteFactory {
  notes = [];
  makeNote({ key, octave, root }) {
    const note = new Note();
    note.setKeyTrigger(key);
    note.setRoot(root);
    note.setOctave(octave);
    note.setNote();
    this.notes.push(note);
  }
  makeNotesFromArray(arr) {
    for (let note of arr) {
      this.makeNote({
        key: note.key,
        octave: note.octave,
        root: note.root,
      });
    }
  }
}
