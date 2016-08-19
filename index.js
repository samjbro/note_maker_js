(function() {
  window.addEventListener("load", function() {
    var appDiv = document.getElementById("app");
    var formDiv = document.forms.noteForm;

    var list = new NoteList();
    list.saveNote("testing 123")

    var controller = new NoteController( appDiv,
                        new NoteListView(list));

    controller.insert();
  //   window.addEventListener("submit", submitForm);
  //
  //   function submitForm(){
  //     event.preventDefault();
  //     controller.submitForm();
  //   };
  });

})();


// (function(exports){
//   var list = new NoteList();
//   var view = new NoteListView(list);
//   var controller = new NoteController(view);
//
//   window.addEventListener("hashchange", showNote);
//
//   function showNote(){
//     controller.showNote();
//   };
//
// })(this);
