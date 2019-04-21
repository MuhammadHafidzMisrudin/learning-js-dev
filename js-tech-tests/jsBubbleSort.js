const bubbleSort = (array) => {

  let arrLength = array.length;
  console.log("array length => ", arrLength);

  for (var i = 0; i < arrLength; i++) {
    console.log("current i => ", i);
    console.log("current arrLength => ", arrLength);

    console.log("current (arrLength-i-1) => ", (arrLength-i-1));
    for (var j = 0; j < (arrLength-i-1); j++) {
      console.log("current j => ", j);
      // console.log("current (arrLength-i-1) => ", (arrLength-i-1));

      // Compare the adjacent positions.
      if (array[j] > array[j+1]) {

        //Swap the numbers.
        let tempArr = array[j]; // Temporary variable to hold the current number.
        array[j] = array[j+1]; // Replace current number with adjacent number.
        array[j+1] = tempArr; // Replace adjacent number with current number.
      }
    }
  }

  console.log(array);
}

bubbleSort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]);
