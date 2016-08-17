// var NoteList = require("../src/note-list-model").NoteList;

(function(exports){
  function NoteListView(noteList) {
    this.noteListModel = noteList;
  }

  NoteListView.prototype.returnList = function(){
    var listhtml = this.noteListModel.getNotes();
    var mappedlist = listhtml.map(function(note){
      return "<li>" + note.getText() + "</li>";
    });

    return "<ul>" + mappedlist.join("") + "</ul>";
  };

  exports.NoteListView = NoteListView;

})(this);
