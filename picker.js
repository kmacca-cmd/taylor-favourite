let rawSongs = JSON.parse(localStorage.getItem("songs")) || [];
let allSongs = rawSongs.map(name => ({
  name,
  era: "Any",
  spotify: "https://open.spotify.com/search/" + encodeURIComponent(name + " Taylor Swift")
}));

let songs = [...allSongs];
songs.sort(() => Math.random() - 0.5);

let current = [];
let completed = 0;
let totalMatchups = songs.length - 1;

function updateProgress() {
  document.getElementById("progress").innerText =
    `${completed} of ${totalMatchups} matchups complete`;
  document.getElementById("round").innerText =
    `🎤 ${songs.length + 1} songs remaining`;
}

function nextRound() {
  updateProgress();

  if (songs.length === 1) {
    document.getElementById("game").style.display = "none";
    document.getElementById("result").style.display = "block";
    document.getElementById("winner").innerText = songs[0].name;
    document.getElementById("spotify").href = songs[0].spotify;
    document.getElementById("pain").innerText =
      "How painful was this? " + painLevel();
    return;
  }

  current = [songs.shift(), songs.shift()];
  document.getElementById("song1").innerText = current[0].name;
  document.getElementById("song2").innerText = current[1].name;
}

function pick(choice) {
  completed++;
  songs.push(current[choice]);
  nextRound();
}

function painLevel() {
  if (completed < 10) return "🙂 Chill";
  if (completed < 20) return "😬 Stressful";
  if (completed < 30) return "😭 Emotionally devastating";
  return "💀 I need a lie down";
}

function resetSongs() {
  songs = [...allSongs];
  songs.sort(() => Math.random() - 0.5);
  completed = 0;
  totalMatchups = songs.length - 1;
  document.getElementById("game").style.display = "block";
  document.getElementById("result").style.display = "none";
  nextRound();
}

function deepCuts() {
  alert("Deep cuts mode coming next – this version keeps it stable ❤️");
}

function reputationOnly() {
  alert("Reputation mode visual coming next 🖤");
}

function restart() {
  window.location.href = "index.html";
}

nextRound();
