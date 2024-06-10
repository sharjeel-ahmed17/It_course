// greatMagicians.ts
let magicians2: string[] = ["David Copperfield", "Harry Houdini", "Dynamo"];
function make_great(names: string[]): string[] {
  return names.map((name) => `The Great ${name}`);
}
show_magicians(make_great(magicians2));
