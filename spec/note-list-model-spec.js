var isTrue = require("../src/asserts").isTrue;
var NoteList = require("../src/note-list-model").NoteList; //points var to the exported NoteList class
var Note = require("../src/note-model").Note;

function listContainsEmptyArray() {
  var notelist = new NoteList;
  isTrue(Array.isArray(notelist.notes));
}

function arrayContainsNoteObjects() {
  var notelist = new NoteList;
  notelist.saveNote("I am a note");
  var note = notelist.notes[0];
  isTrue(notelist.notes.includes(note));
}

function returnsNotesFromList() {
  var notelist = new NoteList;
  var note1 = new Note;
  var note2 = new Note;
  notelist.notes = [note1, note2];
  isTrue(notelist.getNotes() == notelist.notes);

}

listContainsEmptyArray();
arrayContainsNoteObjects();
returnsNotesFromList();
