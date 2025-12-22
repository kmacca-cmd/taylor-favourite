let albums = [
  "Taylor Swift",
  "Fearless",
  "Speak Now",
  "Red",
  "1989",
  "Reputation",
  "Lover",
  "Folklore",
  "Evermore",
  "Midnights",
  "TTPD",
  "Life of a Showgirl"
];

albums.sort(() => Math.random() - 0.5);
let current = [];

function nextAlbum() {
  if (albums.length === 1) {
    document.getElementById("game").style.display = "none";
    document.getElementById("result").style.display = "block";
    document.getElementById("winner").innerText = albums[0];
    return;
  }

  current = [albums.shift(), albums.shift()];
  document.getElementById("a1").innerText = current[0];
  document.getElementById("a2").innerText = current[1];
}

function pickAlbum(choice) {
  albums.push(current[choice]);
  nextAlbum();
}

nextAlbum();

