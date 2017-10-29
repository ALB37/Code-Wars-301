function capitalize(s){ //eslint-disable-line
  let calc = function(parity){
    let strArr = s.split('');
    let ans = strArr.map(function(n, i){
      if (i % 2 === parity){
        return n.toUpperCase();
      } else {
        return n;
      }
    });
    return ans.join('');
  };
  return [calc(0), calc(1)];
}
