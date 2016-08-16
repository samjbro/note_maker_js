var assert = require("./assert");
var noteObject = require("../../src/note-model.js")
var noteListModel = require("../../src/note-list-model.js")
var noteListView = require("../../src/note-list-view.js")

function testDisplayZeroNotes() {
  var note = noteObject.Note;
  var list = new noteListModel.List(note);
  var view = new noteListView.ListView(list);
  assert.isEqual(view.display(), "<ul></ul>")
};
function testDisplayOneNote() {
  var text = "I am a new note"
  var note = noteObject.Note;
  var list = new noteListModel.List(note);
  var view = new noteListView.ListView(list);

  list.write(text);
  assert.isEqual(view.display(), "<ul><li>I am a new note</li></ul>")
};
function testDisplayTwoNotes() {
  var text1 = "I am the first note"
  var text2 = "I am the second note"
  var note = noteObject.Note;
  var list = new noteListModel.List(note);
  var view = new noteListView.ListView(list);

  list.write(text1);
  list.write(text2);
  assert.isEqual(view.display(), "<ul><li>I am the first note</li><li>I am the second note</li></ul>")
};

testDisplayZeroNotes();
testDisplayOneNote();
testDisplayTwoNotes();
