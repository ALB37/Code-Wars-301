function cubeOdd(arr) { // eslint-disable-line
  if (arr.some(isNaN)) return undefined;
  if (arr.length === 0) return undefined;
  if (typeof arr.reduce(x => x) !== 'number') return undefined;
  let oddNums = arr.map(x => Math.pow(x, 3)).filter(x => x % 2 !== 0);
  if (oddNums.length === 0) return 0;
  return oddNums.reduce(((a,b) => a + b));
}
