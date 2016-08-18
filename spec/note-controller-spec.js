describe("NoteController", function(){
  it("controller can be instantiated", function(){
    var list = new NoteList();
    var view = new NoteListView(list);
    var controller = new NoteController(view);
    isTrue(controller.view === view);
  });

  it("inserts html into index", function(){
    var list = new NoteList();
    list.saveNote("zee");
    var view = new NoteListView(list);
    // var app = document.createElement("div", {id: "app"});
    var appElement = {id: "app"}
    document.getElementById = function(){
      return appElement;
    };
    var controller = new NoteController(view);
    controller.insert();
    var htmlOutput = view.returnList();
    // var appElement = document.getElementById("app");
    // console.log(htmlOutput);
    // console.log(appElement.innerHTML);
    // appElement.innerHTML = "hello";
    console.log(appElement);
    isTrue(htmlOutput === appElement.innerHTML);
    document.getElementbyId = document.__proto__.getElementById;
  });
});
