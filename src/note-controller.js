(function(exports){
  function NoteController(view){
    this._view = view;
  }

  NoteController.prototype.insert = function(){
    var app = document.getElementById("app");
    app.innerHTML = this._view.returnList();
  };

  NoteController.prototype.getNote = function() {
    return this._view.noteListModel.notes[this.getIdByHash()];
  };

  NoteController.prototype.getIdByHash = function(){
    return window.location.hash.split("#")[1];
  };

  NoteController.prototype.showNote = function(){
    var note = this.getNote();
    var singleNote = new SingleNoteView(note);
    var app = document.getElementById("app");
    app.innerHTML = singleNote.returnHTML();
  };

  NoteController.prototype.submitForm = function(){
    this._view.noteListModel.saveNote(event.target[0].value);
    this.insert();
    document.forms.noteForm.textGoesHere.value = "";
  };

  exports.NoteController = NoteController;

})(this);
