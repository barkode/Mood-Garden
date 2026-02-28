export function renderHome() {
    document.getElementById('app').innerHTML = `

    <div class="container">

      <h1>🌱 Mood Garden</h1>

      <p class="subtitle">
        Track your mood and grow your digital garden
      </p>

      <div class="menu">

        <a href="#/garden" class="card">
          🌿 Garden
          <p>See your mood plants</p>
        </a>

        <a href="#/analytics" class="card">
          📊 Analytics
          <p>View mood statistics</p>
        </a>

        <a href="#/history" class="card">
          📅 History
          <p>See past moods</p>
        </a>

      </div>

    </div>
  `
}