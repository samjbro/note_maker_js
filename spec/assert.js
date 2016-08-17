(function(exports) {

  function isTrue(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + "is not truthy");
    } else {
      return console.log("Passed");
    }
  };
  exports.assert = { isTrue: isTrue }
})(this);
