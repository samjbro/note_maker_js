(function(exports) {
  var isEqual = function(p1, p2) {
    if(p1 === p2){
    console.log("pass");
  } else {
    console.log("fail");
  };
  };
  var doesArrayContain = function(array, object){
    if(array.includes(object)){
      console.log("pass");
    }
  };
  exports.isEqual = isEqual;
  exports.doesArrayContain = doesArrayContain;
})(this);
