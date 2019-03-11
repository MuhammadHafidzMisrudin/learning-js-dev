const isPalindrome = (someString) => {
  strPalindrome = false;

  console.log("someString.split('') => ", someString.split(''));
  console.log("someString.split('').reverse() => ", someString.split('').reverse());
  console.log("someString.split('').reverse().join('') => ", someString.split('').reverse().join(''));

  if (someString == someString.split('').reverse().join('')) {
    // alert(string + ' is palindrome.');
    strPalindrome = true;
  } else {
    // alert(string + ' is not palindrome.');
    strPalindrome = false;
  }
  return strPalindrome;
}

console.log(isPalindrome("inma"));
console.log();
console.log(isPalindrome("racecar"));

// isPalindrome("racecar");
