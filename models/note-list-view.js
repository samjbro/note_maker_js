(function(exports){
  var NoteListView = function(noteList){
    this._noteList = noteList;
  };

  NoteListView.prototype.displayNotes = function(){
    var noteArray = this._noteList.list()
    var htmlString = "<ul>";
    for(var noteIndex = 0; noteIndex < noteArray.length; noteIndex++){
      var note = noteArray[noteIndex];
      htmlString += "<li><a href='#" + note.id + "'>" + note.text() + "</a></li>";
    }
    return htmlString + "</ul>";
  };

  exports.NoteListView = NoteListView;
})(this);
