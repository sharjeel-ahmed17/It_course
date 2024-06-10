// moreGuests.ts
let guests3: string[] = ["Albert Einstein", "Nikola Tesla", "Marie Curie"];
console.log("We found a bigger dinner table!");
guests3.unshift("Galileo Galilei");
guests3.splice(2, 0, "Stephen Hawking");
guests3.push("Leonardo da Vinci");
guests3.forEach((guest) =>
  console.log(`Dear ${guest}, you are invited to dinner.`)
);
