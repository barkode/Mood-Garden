import {getGardenHTML} from "./garden.js";

export function renderHomePage() {
    const container = document.getElementById("page-home");
    if (!container) return;

    container.innerHTML = `
                            <div>
                            <h2 class="text-xl font-semibold">Good morning 🌿</h2>
                            <p class="text-sm text-white/60 mt-1">How are you feeling today?</p>
                        </div>
                        <div class="grid grid-cols-1 gap-4 sm:grid-cols-3">
                            <button data-page="log"
                                    class="flower nav-link flex flex-col items-center gap-3 rounded-2xl bg-white/10 px-3 py-6 text-center text-sm hover:bg-white/20">
                                <span class="text-5xl">🌸</span>
                                <span class="font-medium">Log Today's Mood</span>
                                <span class="text-xs text-white/50">Track how you feel</span>
                            </button>
                            <button data-page="garden"
                                    class="flower nav-link flex flex-col items-center gap-3 rounded-2xl bg-white/10 px-3 py-6 text-center text-sm hover:bg-white/20">
                                <span class="text-5xl">🌻</span>
                                <span class="font-medium">Visit Your Garden</span>
                                <span class="text-xs text-white/50">See your mood flowers</span>
                            </button>
                            <button data-page="analytics"
                                    class="flower nav-link flex flex-col items-center gap-3 rounded-2xl bg-white/10 px-3 py-6 text-center text-sm hover:bg-white/20">
                                <span class="text-5xl">🌺</span>
                                <span class="font-medium">View Analytics</span>
                                <span class="text-xs text-white/50">Understand your patterns</span>
                            </button>
                        </div>
                        <div class="rounded-2xl bg-white/5 p-4 border border-white/10">
                            <p class="text-sm font-medium mb-2">🌱 This week's streak</p>
                            <div class="flex gap-2">
                                ${getGardenHTML(7)}
                            </div>
                        </div>`;
}