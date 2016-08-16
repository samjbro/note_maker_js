var assert = require("./asserts");
var note = require("../src/note-model");

function testNotesTextInstantiation() {
  var note = new Note();
  note.newNote("My favourite language is JavaScript")
  assert.isTrue(note.text == "My favourite language is JavaScript")
};

testNotesTextInstantiation()
