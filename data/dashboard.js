/* Dashboard */

/* Start of now listening list */
function list_attente(art, song, picture) {
  let title = document.querySelector("aside", "player");
  let attente = document.createElement("div");
  let cancion = document.createElement("p");
  let artist = document.createElement("p");
  let image = document.createElement("img");
  // adding classes
  attente.setAttribute("class", "attente");
  cancion.setAttribute("class", "cancion");
  image.setAttribute("class", "img-att");
  image.setAttribute("src", "./img/" + picture);
  // adding info
  cancion.innerHTML = song;
  artist.innerHTML = art;
  // now appending
  title.appendChild(attente);
  attente.appendChild(cancion);
  attente.appendChild(artist);
  attente.appendChild(image);
}
elements = [
  ["Natural", "Imagine Dragons", "natural.jpg"],
  ["Dakiti", "Bad Bunny & Jhay Cortez", "badbunny.jpg"],
  ["Toxic", "Brithney Spears", "brit.jpg"],
  ["Afterhours", "The Weeknd", "afterhours.jpg"],
  ["Balance ton quoi", "Angele", "Brol.jpg"],
  ["Valerie", "Amy Winehouse", "amy.jpg"],
  ["The resistance", "Muse", "the-resistance.jpg"],
];
var mapping = elements.map(function (params) {
  list_attente(params[1], params[0], params[2]);
});

/* Start Recommendations play list */

function recommended(picture, song, art, link) {
  let parent = document.querySelector("section", "recommendations");
  let rec = document.createElement("div");
  let titre_song = document.createElement("p");
  let artist = document.createElement("p");
  let image = document.createElement("img");
  let lien = document.createElement("a");
  let button = document.createElement("button");
  let youtube = document.createElement("i");
  // adding classes
  rec.setAttribute("class", "element-attente");
  image.setAttribute("class", "img-rec");
  image.setAttribute("src", "../img/" + picture);
  button.setAttribute("class", "video-player");
  youtube.setAttribute("class", "fab fa-youtube fa-3x");
  lien.setAttribute("href", "https://www.youtube.com/watch?v=" + link);
  // adding info
  titre_song.innerHTML = song;
  artist.innerHTML = art;
  // now appending
  parent.appendChild(rec);
  rec.appendChild(image);
  rec.appendChild(titre_song);
  rec.appendChild(artist);
  rec.appendChild(lien);
  lien.appendChild(button);
  button.appendChild(youtube);
}
items = [
  ["mod.jpg", "Mood", "24kGoldn", "GrAchTdepsU"],
  ["positions.png", "Positions", "Ariana Grande", ""],
  ["afterhours.jpg", "The Weeknd", "Blinding Lights", ""],
  ["holy.png", "Holy", "Justin Bieber", ""],
  ["Future-Nostalgia.jpg", "Levitating", "Dua lipa", ""],
  ["bang.jpg", "Bang!", "AJR", ""],
  ["ava.jpg", "Kings & Queens", "Ava Max", ""],
  ["positions.png", "34+35", "Ariana Grande", ""],
];
var adding = items.map(function (key) {
  recommended(key[0], key[1], key[2], key[3]);
});
