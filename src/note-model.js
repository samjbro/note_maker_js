(function(exports){
  function Note() {
}

Note.prototype.newNote = function(text) {
  this.text = text;
  return this.text;
};

module.exports = Note;

})(this);
