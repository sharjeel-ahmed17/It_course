// moreConditionalTests.ts
let string1 = "Hello";
let string2 = "hello";
console.log("Is string1 == string2? I predict False.");
console.log(string1 == string2);

console.log("Is string1 != string2? I predict True.");
console.log(string1 != string2);

console.log(
  "Is string1.toLowerCase() == string2.toLowerCase()? I predict True."
);
console.log(string1.toLowerCase() == string2.toLowerCase());

let num1 = 10;
let num2 = 20;
console.log("Is num1 == num2? I predict False.");
console.log(num1 == num2);

console.log("Is num1 != num2? I predict True.");
console.log(num1 != num2);

console.log("Is num1 > num2? I predict False.");
console.log(num1 > num2);

console.log("Is num1 < num2? I predict True.");
console.log(num1 < num2);

console.log("Is num1 >= 10? I predict True.");
console.log(num1 >= 10);

console.log("Is num2 <= 20? I predict True.");
console.log(num2 <= 20);

let isTrue = true;
let isFalse = false;
console.log("Is isTrue && isFalse? I predict False.");
console.log(isTrue && isFalse);

console.log("Is isTrue || isFalse? I predict True.");
console.log(isTrue || isFalse);

let arr = [1, 2, 3];
console.log("Is 2 in the array? I predict True.");
console.log(arr.includes(2));

console.log("Is 4 not in the array? I predict True.");
console.log(!arr.includes(4));
