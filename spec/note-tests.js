var Note = require("../src/note-model");
var isTrue = require("../src/asserts").isTrue;

function testNotesTextInstantiation() {
  var note = new Note;
  note.newNote("My favourite language is JavaScript");
  isTrue(note.text == "My favourite language is JavaScript");
}

testNotesTextInstantiation();
