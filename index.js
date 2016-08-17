var list = new NoteList();
list.saveNote("Favourite drink: Red bull");
var view = new NoteListView(list);
view.returnList();
console.log(view);
var controller = new NoteController(view);
controller.insert();
