'use strict';

var replaceDots = function(str) {
  var thing = str;
  return thing.replace(/\./gm, '-');
};
replaceDots();
