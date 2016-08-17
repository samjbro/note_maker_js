(function(exports){
  var NoteController = function(noteList){
    this._noteList = noteList;
    this._noteList.store("Favourite drink: seltzer");
    this._noteListView = new NoteListView(noteList);
  };

  NoteController.prototype.displayView = function(){
    var element = document.getElementById('app');
    element.innerHTML = this._noteListView.displayNotes();
  }

  exports.NoteController = NoteController;
})(this)
