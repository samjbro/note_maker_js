var noteList = new NoteList();
var noteListView = new NoteListView(noteList);

function viewReturnsHtmlZeroNotes(){
  assert.isTrue(noteListView.displayNotes() === "<ul></ul>");
};

function viewReturnsHtmlOneNote(){
  noteList.store("Favourite food: pesto");
  assert.isTrue(noteListView.displayNotes() === "<ul><li>Favourite food: pesto</li></ul>");
};

function viewReturnsHtmlMultipleNote(){
  noteList.store("Favourite drink: tea");
  assert.isTrue(noteListView.displayNotes() === "<ul><li>Favourite food: pesto</li><li>Favourite drink: tea</li></ul>");
};

viewReturnsHtmlZeroNotes();
viewReturnsHtmlOneNote();
viewReturnsHtmlMultipleNote()
