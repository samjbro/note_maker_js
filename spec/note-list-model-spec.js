var assert = require("./assert");
var NoteList = require("../models/note-list-model")

var notelist = new NoteList();

function storesListOfNotes() {
  notelist.store('note')
  assert.isTrue(notelist.listArr === notelist.list() )
};

function displayListOfNotes() {
  assert.isTrue(notelist.listArr === notelist.list() )
};


storesListOfNotes();

displayListOfNotes();
