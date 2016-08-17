var Note = require("../src/note-model").Note;
var isTrue = require("../src/asserts").isTrue;

function testNotesTextInstantiation() {
  var note = new Note("My favourite language is JavaScript");
  isTrue(note.text == "My favourite language is JavaScript");
}

testNotesTextInstantiation();
