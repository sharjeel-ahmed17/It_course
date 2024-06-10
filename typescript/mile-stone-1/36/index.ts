// largeShirts.ts
function make_shirt2(
  size: string = "Large",
  message: string = "I love TypeScript"
): void {
  console.log(
    `The shirt size is ${size} and it has the message: '${message}' printed on it.`
  );
}
make_shirt2();
make_shirt2("Medium");
make_shirt2("Small", "Hello World!");
