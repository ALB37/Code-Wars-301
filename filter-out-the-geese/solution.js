function gooseFilter (birds) { // eslint-disable-line
  var geese = ['African', 'Roman Tufted', 'Toulouse', 'Pilgrim', 'Steinbacher'];
  return birds.filter(e => !geese.includes(e))
}
