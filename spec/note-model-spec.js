
function noteTakesTextUponInstatiation() {
  var note = new Note("Hello");
  assert.isTrue(note.text() === "Hello");
};

noteTakesTextUponInstatiation();
