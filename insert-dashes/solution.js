'use strict';

function insertDash(num) { // eslint-disable-line
  let numArr = num.toString().split('');
  for (let i = 0; i < numArr.length - 1; i++){
    if (numArr[i] % 2 !== 0 && numArr[i + 1] % 2 !== 0){
      numArr.splice((i + 1), 0, '-');
      i++;
    }
  }
  return numArr.join('');
}
