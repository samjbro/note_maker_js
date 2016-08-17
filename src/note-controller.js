(function(exports){
  function NoteController(view){
    this.view = view;
  }

  NoteController.prototype.insert = function(){
    var app = document.getElementbyId("app");
    app.innerHTML = this.view.returnList();
  };
  exports.NoteController = NoteController;

})(this);
