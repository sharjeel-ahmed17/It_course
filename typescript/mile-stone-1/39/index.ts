// album.ts
function make_album(artist: string, title: string, tracks?: number) {
  let album = { artist, title };
  if (tracks) {
    album["tracks"] = tracks;
  }
  return album;
}
console.log(make_album("Artist1", "Title1"));
console.log(make_album("Artist2", "Title2", 12));
console.log(make_album("Artist3", "Title3"));
