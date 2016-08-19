(function(exports){
  function NoteController(appDiv, noteListView){
    this._appDiv = appDiv
    this._noteListView = noteListView;

    var self = this;

    this._setupClickNoteToViewFullText();
  }

  NoteController.prototype = {
    _setupClickNoteToViewFullText: function() {
      var self = this;
      window.addEventListener('hashchange', function() {
        var singleNote = new SingleNoteView(self.getNote());
        self._appDiv.innerHTML = singleNote.returnHTML();
      });
    }
  };

  NoteController.prototype.insert = function(){
    this._appDiv.innerHTML = this._noteListView.returnList();
  };

  NoteController.prototype.getNote = function() {
    return this._noteListView.noteListModel.notes[this.getIdByHash()];
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
    this._noteListView.noteListModel.saveNote(event.target[0].value);
    this.insert();
    document.forms.noteForm.textGoesHere.value = "";
  };

  exports.NoteController = NoteController;

})(this);
