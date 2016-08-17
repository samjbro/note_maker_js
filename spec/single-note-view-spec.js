
var note = new Note("Favourite drink: seltzer");
var singleNoteView = new SingleNoteView(note);

function displaysSingleNote() {
  assert.isTrue(singleNoteView.displayHTML() === "<div>Favourite drink: seltzer</div>");
}

displaysSingleNote();
