'use strict';

function abbrevName(name){
  let nameArray = name.split(' ');
  let firstName = nameArray.shift();
  let lastName = nameArray.shift();
  let firstInit = firstName.charAt();
  let lastInit = lastName.charAt();
  return `${firstInit}.${lastInit}`;
}

abbrevName();
