import './style.css'
import './main.css'

import { renderHome } from './pages/home.js'
import { renderGarden } from './pages/garden.js'
import { renderAnalytics } from './pages/analytics.js'
import { renderHistory } from './pages/history.js'

import { showTeamModal } from "./pages/team.js"
import { showHowToUseModal } from "./pages/howtouse.js"

const routes = {
    '/': renderHome,
    '/garden': renderGarden,
    '/analytics': renderAnalytics,
    '/history': renderHistory
}

function router() {
    const path = location.hash.replace('#', '') || '/'
    const page = routes[path] || renderHome

    const app = document.getElementById('app')
    app.innerHTML = ''

    page()

    const teamBtn = document.getElementById("teamBtn")
    const howToUseBtn = document.getElementById("howToUseBtn")

    if (teamBtn) {
        teamBtn.addEventListener("click", showTeamModal)
    }

    if (howToUseBtn) {
        howToUseBtn.addEventListener("click", showHowToUseModal)
    }
}

window.addEventListener('hashchange', router)
window.addEventListener('load', router)