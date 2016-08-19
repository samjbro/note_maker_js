(function(exports){
  var list = new NoteList();
  var view = new NoteListView(list);
  var controller = new NoteController(view);

  window.addEventListener("hashchange", showNote);
  window.addEventListener("submit", submitForm);

  function showNote(){
    controller.showNote();
  };
  function submitForm(){
    event.preventDefault();
    controller.submitForm();
  };

})(this);
