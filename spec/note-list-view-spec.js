var isTrue = require("../src/asserts.js").isTrue;
var NoteList = require("../src/note-list-model.js").NoteList;
var NoteListView = require("../src/note-list-view.js").NoteListView;

function returnsHTMLString() {
  notelist = new NoteList;
  notelist.saveNote("hello");
  notelist.saveNote("goodbye");
  view = new NoteListView(notelist);
  isTrue(view.returnList() === "<ul><li><div>hello</div></li><li><div>goodbye</div></li></ul>");
}
