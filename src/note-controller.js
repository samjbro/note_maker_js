// var app = document.getElementById("app");
// app.innerHTML = "howdy";

(function(exports){
  function NoteController(view){
    this.view = view;
  }

  NoteController.prototype.insert = function(){
    var app = document.getElementById("app");
    app.innerHTML = this.view.returnList();
  };

  exports.NoteController = NoteController;

})(this);
