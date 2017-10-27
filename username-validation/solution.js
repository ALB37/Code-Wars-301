'use strict';

function validateUsr(username) { //eslint-disable-line
  let res =  /^[a-z0-9_]{4,16}$/.test(username);
  return res;
}
