class Song {
  constructor(title, artist, number) {
    this.title = title;
    this.artist = artist;
    this.number = number;
  }

  getValue(key) {
    return this[key];
  }
}