var note1 = new Note(1, "Hello");

noteTakesTextUponInstatiation();

function noteTakesTextUponInstatiation() {
  assert.isTrue(note1.text() === "Hello");
};
