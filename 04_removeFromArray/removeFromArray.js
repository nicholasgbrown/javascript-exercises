
const removeFromArray = function(a, ...args) {

let result = a.filter((element) => { 
    return !args.includes(element);
});

return result;

};

// console.log(removeFromArray(["red", "yellow"], "red"));

// Do not edit below this line
module.exports = removeFromArray;
