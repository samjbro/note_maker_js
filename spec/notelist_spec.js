var isTrue = require("../src/asserts").isTrue;
var NoteList = require("../src/notelist"); //points var to the exported NoteList class
// var Note = require("../src/note-model");

function listContainsEmptyArray() {
  var notelist = new NoteList;
  isTrue(notelist.notes == []);
}

listContainsEmptyArray();
