(function(exports){
  function NoteController(view){
    this.view = view;
  }

  NoteController.prototype.insert = function(){
    console.log(document);
    var app = document.getElementById("app");
    app.innerHTML = this.view.returnList();
  };
  exports.NoteController = NoteController;

})(this);
