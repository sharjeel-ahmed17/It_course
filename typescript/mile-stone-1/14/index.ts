// changingGuestList.ts
let guests2: string[] = ["Albert Einstein", "Isaac Newton", "Marie Curie"];
console.log(`Unfortunately, ${guests2[1]} can't make it to the dinner.`);
guests2[1] = "Nikola Tesla";
guests2.forEach((guest) =>
  console.log(`Dear ${guest}, you are invited to dinner.`)
);
