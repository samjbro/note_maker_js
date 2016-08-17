(function(exports) {

    function NoteList() {
      this._listArr = [];
    }

    NoteList.prototype.store = function (message) {
      var note = new Note(message);
      this._listArr.push(note);
    }

    NoteList.prototype.list = function () {
      return this._listArr;
    }

    exports.NoteList = NoteList;

})(this);
