(function(exports){
  var List = function(object) {
    this.objects = object;
    this.storage = [];
  };

  List.prototype.write = function(text){
    var note = new this.objects(text);
    this.storage.push(note);
  };

  List.prototype.readList = function(){
    return this.storage;
  };

  exports.List = List;
})(this);
