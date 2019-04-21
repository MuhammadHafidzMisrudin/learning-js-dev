const arrayOne = [1,2,3,4,[5,6,7],8,9,[10,11,[12,13,14,15,[16,17]]],18,19,[20]];
console.log(arrayOne);
console.log();

const sumArrowFn = (x, y) => {
  return x+y;
}

console.log("return sumArrowFn: ", sumArrowFn(2,5));
console.log();

function sum(x) {
  return function (y) {
    return function (z) {
      return x+y+z;
    }
  }
}

console.log("return sum()()(): ", sum(2)(3)(4));
console.log();

function sumTwo(x,y,z) {
  if (x) {
    if (y) {
      if (z) {
        return x+y+z;
      }
    }
  }
}

console.log("return sumTwo: ", sumTwo(2,3,4));
console.log();


const arrayTwo = [1,2,3,4,5];
updatedArrayTwo = [...arrayTwo];
console.log(updatedArrayTwo.push(...arrayTwo));
console.log("new array: ", updatedArrayTwo);
console.log("new array length: ", updatedArrayTwo.length);
