// shrinkingGuestList.ts
let guests4: string[] = [
  "Galileo Galilei",
  "Albert Einstein",
  "Stephen Hawking",
  "Nikola Tesla",
  "Marie Curie",
  "Leonardo da Vinci",
];
console.log("Sorry, we can only invite two people for dinner.");
while (guests4.length > 2) {
  let removedGuest = guests4.pop();
  console.log(`Sorry ${removedGuest}, we can't invite you to dinner.`);
}
guests4.forEach((guest) =>
  console.log(`Dear ${guest}, you are still invited to dinner.`)
);
guests4 = [];
console.log(guests4);
