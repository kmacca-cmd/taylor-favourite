console.log("picker.js loaded");

document.addEventListener("DOMContentLoaded", () => {
  const songs = JSON.parse(localStorage.getItem("songs")) || [];

  if (songs.length < 2) {
    alert("No songs found. Go back and select songs.");
    window.location.href = "index.html";
    return;
  }

  let pool = [...songs].sort(() => Math.random() - 0.5);
  let current = [];
  let round = 0;
  const total = pool.length - 1;

  const song1 = document.getElementById("song1");
  const song2 = document.getElementById("song2");
  const progress = document.getElementById("progress");
  const game = document.getElementById("game");
  const result = document.getElementById("result");
  const winnerText = document.getElementById("winner");
  const spotify = document.getElementById("spotify");

  function updateProgress() {
    progress.textContent = `${round} of ${total} matchups complete`;
  }

  function next() {
    updateProgress();

    if (pool.length === 1) {
      game.style.display = "none";
      result.style.display = "block";
      winnerText.textContent = pool[0];
      spotify.href =
        "https://open.spotify.com/search/" +
        encodeURIComponent(pool[0] + " Taylor Swift");
      return;
    }

    current = [pool.shift(), pool.shift()];
    song1.textContent = current[0];
    song2.textContent = current[1];
  }

  song1.onclick = () => choose(0);
  song2.onclick = () => choose(1);

  function choose(i) {
    round++;
    pool.push(current[i]);
    next();
  }

  next();
});
