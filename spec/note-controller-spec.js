// var list = {text: "Favourite drink: seltzer"}
// var noteList = {list: [list]}
// var appDiv = {innerHTML: "<div id='app'>Hello</div>"}

var div = {innerHTML: ""}

document.getElementById = function(){
  return div;
};
var noteList = new NoteList();
var noteController = new NoteController(noteList);

function appDisplaysNote(){
  noteController.displayView();
  assert.isTrue( div.innerHTML === "<ul><li><a href='#0'>Favourite drink: seltzer</a></li></ul>");
};

appDisplaysNote();
