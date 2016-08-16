'use strict';

(function(exports){

  function isTrue(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
    }
  };

  function isFalse(assertionToCheck) {
    if (assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not falsey");
    }
  };

exports.isTrue = isTrue;
exports.isFalse = isFalse;

})(this);
