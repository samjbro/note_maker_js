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
    isTrue(htmlOutput === appElement.innerHTML);
    document.getElementById = document.__proto__.getElementById;
  });

  it("loads page corresponding to hash", function(){
    var list = new NoteList();
    list.saveNote("zee");
    var view = new NoteListView(list);
    var controller = new NoteController(view);
    // console.log('controller.showNote: ', controller.showNote)

    var appElement = {id: "app"};
    document.getElementById = function(){
      return appElement;
    };

    controller.getIdByHash = function(){return '0'}
    controller.showNote()
    // console.log(appElement);
    isTrue(appElement.innerHTML === "<div>zee</div>")

  });

  it('allows user to enter a new note', function(){
    var list = new NoteList();
    var view = new NoteListView(list);
    var controller = new NoteController(view);
    var noteForm = {textGoesHere : {value: ""},
                    submit: showNote};
    var appElement = {id: 'app'};
    function showNote(){controller.showNote();};

    var string = "This is a note. I am noting this down."
    noteForm.textGoesHere.value = string
    noteForm.submit();
    isTrue(appElement.innerHTML === ("<li>" + string + "</div>"));
  });



});
