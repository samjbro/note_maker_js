(function(exports){
  function blah() {
}

blah.prototype.newNote = function(text) {
  this.text = text;
  return this.text;
};

module.exports = blah;

})(this);
