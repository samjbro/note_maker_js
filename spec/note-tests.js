var Note = require("./note-model");
var isTrue = require("./asserts").isTrue;

function testNotesTextInstantiation() {
  var note = new Note;
  note.newNote("My favourite language is JavaScript");
  isTrue(note.text == "My favourite language is JavaScript");
};

testNotesTextInstantiation()
