(function(exports) {

  function Note(text) {
    this.save_note = text;
  }

  Note.prototype.text = function () {
    return this.save_note;
  };

  module.exports = Note;
})(this);
