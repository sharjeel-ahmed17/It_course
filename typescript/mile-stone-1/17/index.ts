// seeingTheWorld.ts
let places: string[] = [
  "Japan",
  "Australia",
  "Canada",
  "Switzerland",
  "New Zealand",
];
console.log("Original order:", places);
console.log("Alphabetical order:", [...places].sort());
console.log("Original order:", places);
console.log("Reverse alphabetical order:", [...places].sort().reverse());
console.log("Original order:", places);
places.reverse();
console.log("Reversed order:", places);
places.reverse();
console.log("Original order:", places);
places.sort();
console.log("Alphabetical order:", places);
places.sort((a, b) => b.localeCompare(a));
console.log("Reverse alphabetical order:", places);
