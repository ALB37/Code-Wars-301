function solution(str){ //eslint-disable-line
  const newArr = str.split('');
  const ansArr = [];
  for (let i = str.length - 1; i >= 0; i--){
    ansArr.push(newArr[i]);
  }
  return ansArr.join('');
}
