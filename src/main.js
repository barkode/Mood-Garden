import './style.css'

import { renderHome } from './pages/home.js'
import { renderGarden } from './pages/garden.js'
import { renderAnalytics } from './pages/analytics.js'
import { renderHistory } from './pages/history.js'

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
}

window.addEventListener('hashchange', router)
window.addEventListener('load', router)