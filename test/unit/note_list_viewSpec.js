var assert = require("./assert");
var noteObject = require("../../src/note-model.js")
var noteListModel = require("../../src/note-list-model.js")
var noteListView = require("../../src/note-list-view.js")

function testDisplayOneNote() {
  var text = "I am a new note"
  var note = noteObject.Note;
  var list = new noteListModel.List(note);
  var view = new noteListView.ListView(list);

  list.write(text);
  assert.isEqual(view.display(), "<ul><li>I am a new note</li></ul>")
};

testDisplayOneNote();
