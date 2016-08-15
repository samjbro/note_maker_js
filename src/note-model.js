
(function(exports) {
var Note = function(string) {
  this.savedNote = string;
};

 Note.prototype.readNote = function(){
   return this.savedNote;
 };
  exports.Note = Note;
})(this);
