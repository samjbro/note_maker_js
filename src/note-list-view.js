var NoteList = require("../src/note-list-model").NoteList;

(function(exports){
  function NoteListView(noteList) {
    this.noteListModel = noteList;
  }

  NoteListView.prototype.returnList = function(){
    list.notes.forEach(function(note){
      return "<li><div>"+ note.text + "</li></div>";
    });
  };

  exports.NoteListView = NoteListView;

})(this);
