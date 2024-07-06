import { name } from "./types/index.js";

// tpye in ts

let name1: string = "usman";
let myage: number = 234;
let isStudent: boolean = true;

let arr: number[] = [1, 2, 4, 5];
let str: string[] = ["a", "b", "c", "d", "e", "f"];
let anyData: any[] = [
  "ture",
  "false",
  false,
  true,
  null,
  undefined,
  123,
  213,
  23,
];
let bool: boolean[] = [true, false];

let limitedData: [number, string, boolean] = [12, "sharjeel", true];

// console.log(str);
// console.log(arr);
// console.log(anyData);
// console.log("hello world");
// console.log(name);
// console.log(isStudent);
// console.log(name1);
// console.log(myage);
// console.log(limitedData);
// console.log(bool);

// how to create custom type in ts

type mystr = string;
let str1: mystr = "sharjeel";

type myNum = number;
let num: myNum = 234;

type isActice = boolean;
let isActive: isActice = true;

type myArr = number[];
let arr1: myArr = [1, 2, 4, 5];

interface Student {
  name: string;
  classNo: number;
  rollNo: number;
}

let myStudentList: Student[] = [
  { name: "gufran", classNo: 12, rollNo: 123 },
  { name: "ashar", classNo: 12, rollNo: 123 },
  { name: "kashan", classNo: 12, rollNo: 123 },
];

let student: Student = {
  name: "usman",
  classNo: 12,
  rollNo: 123,
};

console.log(student.name);
console.log(str1);
console.log(num);
console.log(arr1);
console.log(isActive);
console.log(myStudentList[1].name);
