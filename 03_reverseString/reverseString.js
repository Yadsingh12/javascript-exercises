const reverseString = function(str) {
    const arr = str.split("");
    for(let i=0; i<arr.length/2; i++) {
        let k = arr[i];
        arr[i] = arr[arr.length-i-1];
        arr[arr.length-i-1] = k;
    }
    return arr.join("");
};

// Do not edit below this line
module.exports = reverseString;
