// cars.ts
function car_info(
  manufacturer: string,
  model: string,
  ...options: { [key: string]: any }[]
): object {
  let car = { manufacturer, model };
  options.forEach((option) => Object.assign(car, option));
  return car;
}
console.log(car_info("Toyota", "Camry", { color: "Red", sunroof: true }));
console.log(car_info("Honda", "Civic", { color: "Blue", navigation: true }));
console.log(car_info("Ford", "Mustang", { color: "Black", spoiler: true }));
