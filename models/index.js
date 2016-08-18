var noteController = new NoteController(new NoteList());
noteController._noteList.store("yo whatever");
noteController.displayView();

function displayNote(){
  noteController.showNote(noteController.getIdFromUrl(window.location))
};

window.addEventListener("hashchange", displayNote);
