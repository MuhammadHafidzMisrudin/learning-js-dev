const linearSearch = (array, target) => {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === target) {
      console.log(i);
      return i;
    }
  }
  return -1;
}

console.log(linearSearch([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213], 64));
