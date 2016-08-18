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
    var appElement = {id: "app"};
    document.getElementById = function(){
      return appElement;
    };
    var controller = new NoteController(view);
    controller.insert();
    var htmlOutput = view.returnList();
    console.log(appElement);
    isTrue(htmlOutput === appElement.innerHTML);
    document.getElementById = document.__proto__.getElementById;
  });

  it("loads page corresponding to hash", function(){
    var list = new NoteList();
    list.saveNote("zee");
    var view = new NoteListView(list);
    var appElement = {id: "app"};
    document.getElementById = function(){
      return appElement;
    };
    window.location.hash = "#0";
    isTrue(appElement.innerHTML === "<div>zee</div>");
  });
});
