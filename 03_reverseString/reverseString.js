const reverseString = function (myString) {
let result = myString.split("").reverse().join("");
return result;
};

console.log(reverseString('hello there'));

// Do not edit below this line
module.exports = reverseString;
