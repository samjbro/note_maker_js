
var noteList = new NoteList();
noteList.store("Favourite drink: seltzer");
var singleNoteView = new SingleNoteView(noteList.list()[0]);

function displaysSingleNote() {
  assert.isTrue(singleNoteView.displayHTML() === "<div>Favourite drink: seltzer</div>");
}

displaysSingleNote();
