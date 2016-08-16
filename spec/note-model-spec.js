var assert = require("./assert");
var Note = require("../models/note-model")

function noteTakesTextUponInstatiation() {
  var note = new Note("Hello");
  assert.isTrue(note.text() === "Hello");
};

noteTakesTextUponInstatiation();
