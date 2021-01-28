/* Dashboard */

/* Start of now listening list */
//<i class="fas fa-play"></i>;
function list_attente(art, song, picture) {
  // Selecting elements
  let title = document.querySelector("aside", "player");
  let attente = document.createElement("div");
  let cancion = document.createElement("p");
  let artist = document.createElement("p");
  let image = document.createElement("img");
  let play = document.createElement("button");
  //  let playIcon = document.createElement("i");
  // adding classes
  attente.setAttribute("class", "attente");
  cancion.setAttribute("class", "cancion");
  artist.setAttribute("class", "artist");
  image.setAttribute("class", "img-att");
  play.setAttribute("class", " play-btn fas fa-play");
  //  playIcon.setAttribute("class", "fas fa-play");
  image.setAttribute("src", "../img/" + picture);
  // adding info
  cancion.innerHTML = song;
  artist.innerHTML = art;
  // now appending
  title.appendChild(attente);
  attente.appendChild(play);
  //  play.appendChild(playIcon);
  attente.appendChild(cancion);
  attente.appendChild(artist);

  attente.appendChild(image);
}
let elements = [
  ["Natural", "Imagine Dragons", "natural.jpg"],
  ["Dakiti", "Bad Bunny & Jhay Cortez", "badbunny.jpg"],
  ["Toxic", "Brithney Spears", "brit.jpg"],
  ["Save your tears", "The Weeknd", "afterhours.jpg"],
  ["Balance ton quoi", "Angele", "Brol.jpg"],
  ["Valerie", "Amy Winehouse", "amy.jpg"],
  ["The resistance", "Muse", "the-resistance.jpg"],
];
var mapping = elements.map(function (params) {
  list_attente(params[1], params[0], params[2]);
});
// MUSIC PLAYER DISPLAYER  NOW//
let player = document.querySelector(".artist-playing");
let playerSongTitle = document.querySelector(".player-song-title");
let playerSongArtist = document.querySelector(".player-song-artist");
let playerSongAlbum = document.querySelector(".big-thumbnail");
let playerSong = document.querySelector("player-song");

createAudio("algorithm");

/* create an audio player */
function createAudio(songName) {
  let player = document.querySelector(".music-player");
  if (!document.querySelector("audio")) {
    let audio = document.createElement("audio");
    audio.setAttribute("controls", "");
    audio.setAttribute("src", "../assets/mp3/" + songName + ".mp4");
    audio.setAttribute("class", "player-song");
    audio.setAttribute("type", "audio/mp3");
    player.appendChild(audio);
  } else {
    let audio = player.querySelector("audio");
    audio.setAttribute("src", "../assets/mp3/" + songName + ".mp4");
    audio.load();
    audio.play();
    console.log(audio.src);
  }
}

/* Play now event */
let playButtons = document.querySelectorAll(".play-btn");
for (const button of playButtons) {
  button.addEventListener("click", (e) => {
    let myParent = e.target.parentNode;
    /* Reemplace the song name */
    let title = myParent.querySelector(".cancion").innerText;
    let artist = myParent.querySelector(".artist").innerText;
    let album = myParent.querySelector(".img-att").src;
    //let song = ;
    playerSongTitle.innerText = title;
    playerSongArtist.innerText = artist;
    playerSongAlbum.src = album;
    createAudio(title);
  });
}

/* for playButtons.addEventListener("click", (e) => {
  let myParent = e.target.parentNode;
  let title = document.querySelector(".cancion").innerText;
  playerSongTitle.innerText = title;
  console.log(title);
});
 */
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
let items = [
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

/* NOW LISTENING PLAYER */
