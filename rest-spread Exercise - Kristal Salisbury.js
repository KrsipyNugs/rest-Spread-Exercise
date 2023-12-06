// ES5 Function that takes a variable number of arguments
function filterOutOdds() {
    var nums = Array.prototype.slice.call(arguments);
    return nums.filter(function(num) {
      return num % 2 === 0
    });
  }

// ES2015 Function that takes a variable number of arguments
const filterOutOdds = (...args) => args.filter(v => v % 2 === 0)

// findMin - Write a function called findMin that accepts a variable number of arguments and returns the smallest argument.
// Make sure to do this using the rest and spread operator.
const findMin = (...args) => Math.min(...args)
findMin(1,4,12,-3) 
findMin(1,-1) 
findMin(3,1) 

// mergeObjects - Write a function called MergeObjects that accepts two objects and returns a new object which contains all the keys and values of the first object and second object
const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2})
mergeObjects({a:1, b:2}, {c:3, d:4}) 

// doubleAndReturnArgs - Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. The function should return a new array with the original array values and all of additional arguments doubled.
const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map(v => v *2)]
doubleAndReturnArgs([1,2,3],4,4)
doubleAndReturnArgs([2],10,4) 

// Slice and Dice
const removeRandom = items => {
    let idx = Math.floor(Math.random() * items.length);
    return [...items.slice(0, idx), ...items.slice(idx + 1)];
  }

  const extend = (array1, array2) => {
    return [...array1, ...array2];
  }
  
  const addKeyVal = (obj, key, val) => {
  
    let newObj = { ...obj }
    newObj[key] = val;
    return newObj;

  }

  const removeKey = (obj, key) => {
  
    let newObj = { ...obj }
    delete newObj[key]
    return newObj;
  
  }
  
  const combine = (obj1, obj2) => {
    return { ...obj1, ...obj2 };
  }
  
  const update = (obj, key, val) => {

    let newObj = { ...obj }
    newObj[key] = val;
    return newObj;
  
  }