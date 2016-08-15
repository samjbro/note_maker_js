var assert = require("./assert");
var noteModel = require("../../src/note-model.js")


function testNoteSavedCorrectly() {
  var text = "my first note";
  var note = new noteModel.Note(text);
  assert.isEqual(note.readNote(),text);
};

 testNoteSavedCorrectly();
