const checkOddEven = (num) => {
  let output = "";
  for (var i = 0; i < num; i++) {
    if (i%2 === 0) {
      output = `${i} is Even number`;
      console.log(output);
    } else {
      output = `${i} is Odd number`;
      console.log(output);
    }
  }
}

checkOddEven(20);
