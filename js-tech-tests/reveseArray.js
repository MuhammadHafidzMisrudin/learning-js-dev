const reverseArray = (array) => {
  let reverseArr = [];
  let newArray = array.reverse();

  for (var i = 0; i < array.length; i++) {
  reverseArr.push(newArray[i]);
  }

  console.log(reverseArr);
}


const sortArray = (array) => {
  let sortArr = [];
  let newArray = array.sort((a, b) => a - b); // sort elements in order.
  // let newArray = array.sort((a, b) => b - a); // sort elements in reverse order.

  for (var i = 0; i < array.length; i++) {
  sortArr.push(newArray[i]);
  }

  console.log(sortArr);
}

reverseArray([-3,1,100,310,299, false, 0, 5, 10]);
sortArray([-3,1,100,310,299, -20, 0, 2, 19]);
