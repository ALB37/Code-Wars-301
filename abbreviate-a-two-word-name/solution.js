'use strict';

function abbrevName(name){
  let nameArray = name.split(' ');
  let firstName = nameArray.shift();
  let lastName = nameArray.shift();
  let firstInit = firstName.charAt().toUpperCase();
  let lastInit = lastName.charAt().toUpperCase();
  return `${firstInit}.${lastInit}`;
}

abbrevName();
