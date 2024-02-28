// 1-1 Write a JavaScript program to check if a given string is upper case or not. // 


const isUpperCase = str => str === str.toUpperCase();
console.log(isUpperCase('Good Day')); 
console.log(isUpperCase('Welcome'));
console.log(isUpperCase('ok'));



// 1-2 Write a JavaScript program to make a given string upper case . // 


const isUpperCase = str =>str.toUpperCase();
console.log(isUpperCase('Good Day')); 
console.log(isUpperCase('Welcome'));
console.log(isUpperCase('ok'));


// 2- Write a JavaScript program to check whether the given argument is a string. // 

const isString = val => typeof val === 'string';
console.log(isString('25'));


// 3- Write a JavaScript program that will return true if the given number is even, false otherwise. // 

const isEven = num => num % 2 === 0;

console.log(isEven(5));
console.log(isEven(38));
console.log(isEven(99));
console.log(isEven(100)); 


// 4- Write a JavaScript program to get the last element from a given array. // 


const array1 = [5, 12, 50, 130, 85];

const found = array1.findLast((element) => element );

console.log(found);



// 4 Other method 

 let isString = value => typeof value === 'string';
 console.log(isString(9))
 let event= number => number%2==0
 console.log(event(9))
 let last= arr => arr.slice(-1)[0]
 console.log(last([1,3,4]))
 let last= arr => arr.slice(-1)
 let isString = value => typeof value === 'string';
 let upp = str => str.toUpperCase() ===str;




// 5 Write a JavaScript program to reverse the order of the characters in the string // 


const reverseString = str => [...str].reverse().join('');

console.log(reverseString('Connection')); 
console.log(reverseString('Beautiful'));


