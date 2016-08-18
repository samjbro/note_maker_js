var noteList = new NoteList();
var noteListView = new NoteListView(noteList);

viewReturnsHtmlZeroNotes();
viewReturnsHtmlOneNote();
viewReturnsHtmlMultipleNote()

function viewReturnsHtmlZeroNotes(){
  assert.isTrue(noteListView.displayNotes() === "<ul></ul>");
};

function viewReturnsHtmlOneNote(){
  noteList.store("Favourite food: pesto");
  assert.isTrue(noteListView.displayNotes() === "<ul><li><a href='#0'>Favourite food: pesto</a></li></ul>");
};

function viewReturnsHtmlMultipleNote(){
  noteList.store("Favourite drink: tea");
  assert.isTrue(noteListView.displayNotes() === "<ul><li><a href='#0'>Favourite food: pesto</a></li><li><a href='#1'>Favourite drink: tea</a></li></ul>");
};
