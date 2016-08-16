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


//
// // Has a method that, when called, returns a string of HTML that represents the note list model.
// //  For example:
// <ul>
// <li><div>Favourite food: pesto</div></li>
// <li><div>Favourite drink: seltzer</div></li>
// </ul>.
