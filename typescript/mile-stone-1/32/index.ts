// ordinalNumbers.ts
let numbers2: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers2.forEach((number) => {
  if (number == 1) {
    console.log("1st");
  } else if (number == 2) {
    console.log("2nd");
  } else if (number == 3) {
    console.log("3rd");
  } else {
    console.log(`${number}th`);
  }
});
