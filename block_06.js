


console.log('------------------------------- Block 06 start -----------------------------------------')


console.log('------------------------------------------------------------------------')

// Exercise 1

var objj = {
    name: "luke",
    lastname: "skywalker"
}
console.log('Exercise: 1', objj)

console.log('------------------------------------------------------------------------')

// Exercise 2 
function addToObj (argument1, argument2){

    let result = { };
    result[argument1] = argument2;
    //console.log(result[argument1])

    return  result
}
console.log('Exercise: 2', addToObj('age',22)) // {age:22} 
console.log('Exercise: 2', addToObj('name','Jason')) // {name:'Jason'}  

console.log('------------------------------------------------------------------------')

// Exercise 3
function modifyObject(object, key, value) {
    object[key] = value;
    return object;
}

let obj = {};
console.log('Exercise: 3', modifyObject(obj, 'a', 1)); // {a: 1}
console.log('Exercise: 3', modifyObject(obj, 'b', 2)); // {a: 1, b: 2}
console.log('Exercise: 3', modifyObject(obj, 'c', 3)); // {a: 1, b: 2, c: 3}

console.log('------------------------------------------------------------------------')

// Exercise 4
let movies = ['matrix', 'the dark knight', 'a beautiful mind', 'american pie'];

function addToList(moviesArray) {
    let MovieList = [];
    moviesArray.forEach((movie, index) => {
        MovieList.push({ title: movie, id: index });
    });
    return MovieList;
}
console.log('Exercise: 4', addToList(movies));

console.log('------------------------------------------------------------------------')

// Exercise 5
function swap(argument) {
    let swappedObject = {};
    Object.keys(argument).forEach(key => {
        swappedObject[argument[key]] = key;
    });
    return swappedObject;
}
console.log('Exercise: 5', swap({ name: 'Antonello', lastname: 'sanna' })); 
console.log('Exercise: 5', swap({ age: 55 })); 

console.log('------------------------------------------------------------------------')

// Exercise 6
// EMPTY
console.log('Exercise: 6', 'EMPTY'); 


console.log('------------------------------------------------------------------------')

// Exercise 7
// EMPTY
console.log('Exercise: 7', 'EMPTY'); 

console.log('------------------------------------------------------------------------')

// Exercise 8

let objjj = { a: 20, b: 26, c: 0 };

function last(argument) {
    let keys = Object.keys(argument);
    let lastKey = keys[keys.length - 1];
    let lastObj = {};
    lastObj[lastKey] = argument[lastKey];
    return lastObj;
}
console.log('Exercise: 8', last(objjj));

console.log('------------------------------------------------------------------------')

// Exercise 9
function sumAll(object) {
    if (!object || Object.keys(object).length === 0) {
        return 0;
    } else {
        return Object.values(object).reduce((total, value) => total + value, 0);
    }
}
console.log('Exercise: 9', sumAll({ a: 20, b: 26, c: 0 })); // 46 
console.log('Exercise: 9', sumAll({ a: 20, b: 26, c: -56 })); // -10 
console.log('Exercise: 9', sumAll({})); // 0 
console.log('Exercise: 9', sumAll()); // 0 

console.log('------------------------------------------------------------------------')

// Exercise 10
// EMPTY
console.log('Exercise: 10', 'EMPTY'); 

console.log('------------------------------------------------------------------------')

// Exercise 11
// EMPTY
console.log('Exercise: 11', 'EMPTY'); 

console.log('------------------------------------------------------------------------')

// Exercise 12
// EMPTY
console.log('Exercise: 12', 'EMPTY'); 

console.log('------------------------------------------------------------------------')

// Exercise 13
// EMPTY
console.log('Exercise: 13', 'EMPTY'); 

console.log('------------------------------------------------------------------------')

// Exercise 14
// EMPTY
console.log('Exercise: 14', 'EMPTY'); 

console.log('------------------------------------------------------------------------')

// Exercise 15
function sort(argument) {
    let sortedKeys = Object.keys(argument).sort((a, b) => argument[a] - argument[b]);
    let sortedObject = {};
    sortedKeys.forEach(key => {
        sortedObject[key] = argument[key];
    });
    return sortedObject;
}

console.log('Exercise: 15', sort({ a: 1, b: 20, c: 3, d: 4, e: 1, f: 4 })); // {a: 1, e: 1, c: 3, d: 4, f: 4, b: 20}
console.log('Exercise: 15', sort({ age: 22, year: 1999, a: 99, b: 3 })); // {b: 3, age: 22, a: 99, year: 1999}


console.log('------------------------------------------------------------------------')

// Exercise 16
// EMPTY
console.log('Exercise: 16', 'EMPTY'); 

console.log('------------------------------------------------------------------------')

// Exercise 17
function biggestNumber(object) {
    let maxNum = -Infinity;
    let maxKey = '';
    for (const key in object) {
        if (object[key] > maxNum) {
            maxNum = object[key];
            maxKey = key;
        }
    }
    return { num: maxNum, key: maxKey };
}

var obj1 = { a: 1, b: 20, c: 3, d: 4, e: 1, f: 4 };
console.log('Exercise: 17', biggestNumber(obj1)); // {num: 20, key: "b"} 

var obj2 = { a: 20, b: 26, c: 0 };
console.log('Exercise: 17', biggestNumber(obj2)); // {num: 26, key: "b"} 

console.log('------------------------------------------------------------------------')

console.log('------------------------------- Block 06 end -----------------------------------------')










