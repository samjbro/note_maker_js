var isTrue = require("../src/asserts").isTrue;
var NoteList = require("../src/note-list-model").NoteList; //points var to the exported NoteList class
var Note = require("../src/note-model").Note;

function listContainsEmptyArray() {
  var notelist = new NoteList;
  isTrue(Array.isArray(notelist.notes));
}

function arrayContainsNoteObjects() {
  var notelist = new NoteList;
  var note = new Note("I am a note");
  notelist.saveNote(note);
  isTrue(notelist.notes.includes(note));
}

listContainsEmptyArray();
arrayContainsNoteObjects();
