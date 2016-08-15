(function(exports) {
var Note = function(string) {
  this.savedText = string;
};

 Note.prototype.readNote = function(){
   return this.savedText;
 };
  exports.Note = Note;
})(this);
