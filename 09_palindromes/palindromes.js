const palindromes = function (string) {
  string = string.toUpperCase().replace(/\W/g, '');;
  const arr = string.split("");
  const arr2 = arr.reverse();
  const reversedString = arr2.join("");
  return(string===reversedString);
};

// Do not edit below this line
module.exports = palindromes;
