// Load songs from localStorage
let songs = JSON.parse(localStorage.getItem("songs")) || [];

if (songs.length < 2) {
  alert("No songs found. Please select songs first.");
  window.location.href = "index.html";
}

let currentPair = [];
let round = 0;
const totalRounds = songs.length - 1;

// Shuffle
songs.sort(() => Math.random() - 0.5);

// DOM elements
const song1Btn = document.getElementById("song1");
const song2Btn = document.getElementById("song2");
const progress = document.getElementById("progress");
const result = document.getElementById("result");
const game = document.getElementById("game");
const winnerText = document.getElementById("winner");
const spotifyLink = document.getElementById("spotify");

// Progress text
function updateProgress() {
  progress.innerText = `${round} of ${totalRounds} matchups complete`;
}

// Next matchup
function nextRound() {
  updateProgress();

  if (songs.length === 1) {
    showWinner();
    return;
  }

  currentPair = [songs.shift(), songs.shift()];
  song1Btn.innerText = currentPair[0];
  song2Btn.innerText = currentPair[1];
}

// Pick a song
song1Btn.onclick = () => pick(0);
song2Btn.onclick = () => pick(1);

function pick(index) {
  round++;
  songs.push(currentPair[index]);
  nextRound();
}

// Winner screen
function showWinner() {
  game.style.display = "none";
  result.style.display = "block";

  const winner = songs[0];
  winnerText.innerText = winner;
  spotifyLink.href =
    "https://open.spotify.com/search/" +
    encodeURIComponent(winner + " Taylor Swift");
}

// Restart
function restart() {
  localStorage.removeItem("songs");
  window.location.href = "index.html";
}

// Start
nextRound();
