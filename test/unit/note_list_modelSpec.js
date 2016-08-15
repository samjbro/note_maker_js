var assert = require("./assert");
var noteListModel = require("../../src/note-list-model.js")
var noteObject = require("../../src/note-model.js")

function testListStoresNote(){
  var text = "I am a new note"
  var note = noteObject.Note;
  var list = new noteListModel.List(note);

  list.write(text);
  var newNote = list.readList()[0];
  assert.isEqual(newNote.readNote(), text);
};

testListStoresNote();
