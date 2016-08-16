(function(exports) {

    function NoteList() {
      this.listArr = [];
    }

    NoteList.prototype.store = function (message) {
      this.listArr.push(message);
    }

    NoteList.prototype.list = function () {
      return this.listArr;
    }

    module.exports = NoteList;

})(this);
