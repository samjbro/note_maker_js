(function(exports){
  var ListView = function(list) {
    this.list = list;
  }

  ListView.prototype.display = function() {
    var notesArray = this.list.readList();
    var htmlOutput = notesArray[0].readNote();
    return "<ul><li>" + htmlOutput + "</li></ul>"
  };

  exports.ListView = ListView;
})(this);
