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
  NoteController.prototype.displayNote = function(){
    window.addEventListener("hashchange", this._noteListView.showNoteForCurrentPage);
  };

  NoteController.prototype.showNote = function(id){
    var singleView = new SingleNoteView(this._noteList.list()[id]);
    document.getElementById('app').innerHTML = singleView.displayHTML();
  };
  NoteController.prototype.getIdFromUrl = function(location){
    return location.hash.split('#')[1];
  };

  exports.NoteController = NoteController;
})(this)
