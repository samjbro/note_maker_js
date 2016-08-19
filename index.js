(function() {
  window.addEventListener("load", function() {
    var appDiv = document.getElementById("app");
    var formDiv = document.forms.noteForm;
    new NoteController( appDiv,
                        formDiv,
                        new NoteListView(new NoteList));
  });

})();
