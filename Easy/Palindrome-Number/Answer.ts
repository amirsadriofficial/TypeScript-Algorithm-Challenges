function isPalindrome(x: number): boolean {
  var str = x.toString().split("").reverse().join("");
  if (x === parseInt(str)) {
    return true;
  } else {
    return false;
  }
}
