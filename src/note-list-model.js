(function(exports) {

  function NoteList() {
    this.notes = [];
  }

    NoteList.prototype.saveNote = function(noteObject) {
      this.notes.push(noteObject);
    };

  exports.NoteList = NoteList;

})(this)
