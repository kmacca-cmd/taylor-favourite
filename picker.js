<p id="progress"></p>
<p id="round"></p>

<div id="filters">
  <button onclick="deepCuts()">🔥 Deep Cuts Only</button>
  <button onclick="reputationOnly()">🖤 Reputation Only</button>
  <button onclick="resetSongs()">🔄 All Songs</button>
</div>

<div id="game">
  <button id="song1" onclick="pick(0)"></button>
  <button id="song2" onclick="pick(1)"></button>
</div>

<div id="result" style="display:none;">
  <h2>Your #1 Taylor Swift Song</h2>
  <h1 id="winner"></h1>
  <a id="spotify" target="_blank">🎧 Listen on Spotify</a>
  <p id="pain"></p>
  <button onclick="restart()">Play Again</button>
</div>
