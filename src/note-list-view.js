(function(exports){
  var ListView = function(list) {
    this.list = list;
  }

  ListView.prototype.display = function() {
    var notesArray = this.list.readList();
    var htmlOutput = [];
    for(var note = 0; note < notesArray.length; note++){
      htmlOutput.push("<li>" + notesArray[note].readNote() + "</li>");
    }
    return "<ul>" + htmlOutput.join('') + "</ul>";
  };

  exports.ListView = ListView;
})(this);
