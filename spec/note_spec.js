var bob = require("../src/note");
var isTrue = require("../src/asserts").isTrue;

function testNotesTextInstantiation() {
  var note = new bob;
  note.newNote("My favourite language is JavaScript");
  isTrue(note.text == "My favourite language is JavaScript");
}

testNotesTextInstantiation();
