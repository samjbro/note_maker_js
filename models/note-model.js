(function(exports) {

  function Note(id, text) {
    this.id = id
    this._save_note = text;
  }

  Note.prototype.text = function () {
    return this._save_note;
  };

  exports.Note = Note;
})(this);
