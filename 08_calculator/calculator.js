const add = function(a,b) {
	return(a+b);
};

const subtract = function(a,b) {
	return(a-b);
};

const sum = function(arr) {
  //let sum=0;
	//for(i in arr) {sum+=arr[i];}
  //return sum;
  return arr.reduce((sum, current) => (sum+current), 0);
};

const multiply = function(arr) {
  //let mul=1;
  //for(i in arr) {mul*=arr[i];}
  //return mul;
  return arr.reduce((product, current) => product*current);
};

const power = function(a,b) {
	return Math.pow(a,b);
};

const factorial = function(num) {
	return (num===0)? 1 : num*factorial(num-1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
