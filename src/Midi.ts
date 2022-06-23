import * as Tone from "tone";

export class Synth {
  synth!: any;
  constructor() {
    if (!this.synth) {
      this.synth = new Tone.PolySynth().toDestination();
    }
  }
}
export class Note extends Synth {
  root!: string;
  octave!: number;
  note!: string;
  key!: string;
  setRoot(root: string) {
    this.root = root;
  }
  setOctave(octave: number) {
    this.octave = octave;
  }
  setNote() {
    this.note = this.root + this.octave;
  }
  setKeyTrigger(key: string) {
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

interface NoteProps {
  key: string;
  octave: number;
  root: string;
}

export class NoteFactory {
  // components: {[key:string] : IComponent } = {};
  notes: any = [];
  makeNote({ key, octave, root }: NoteProps) {
    const note = new Note();
    note.setKeyTrigger(key);
    note.setRoot(root);
    note.setOctave(octave);
    note.setNote();
    this.notes.push(note);
  }
  makeNotesFromArray(arr: any) {
    for (let note of arr) {
      this.makeNote({
        key: note.key,
        octave: note.octave,
        root: note.root,
      });
    }
  }
}
