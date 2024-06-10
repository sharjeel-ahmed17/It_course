// sandwiches.ts
function make_sandwich(...items: string[]): void {
  console.log(
    `You ordered a sandwich with the following items: ${items.join(", ")}.`
  );
}
make_sandwich("Ham", "Cheese", "Lettuce");
make_sandwich("Turkey", "Tomato", "Mayo");
make_sandwich("Bacon", "Egg", "Avocado");
