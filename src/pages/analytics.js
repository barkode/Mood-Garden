export function renderAnalytics() {
    const container = document.getElementById("page-analytics");
    if (!container) return;
    container.getElementById('page-analytics').innerHTML = `
    <div>
                            <h2 class="text-xl font-semibold">Analytics 📊</h2>
                            <p class="text-sm text-white/60 mt-1">Your mood patterns over time</p>
                        </div>
                        <div class="grid grid-cols-1 gap-4 sm:grid-cols-3">
                            <div class="rounded-2xl bg-white/10 p-4 text-center">
                                <div class="text-3xl mb-1">🌻</div>
                                <div class="text-2xl font-bold">68%</div>
                                <div class="text-xs text-white/60 mt-1">Happy days</div>
                            </div>
                            <div class="rounded-2xl bg-white/10 p-4 text-center">
                                <div class="text-3xl mb-1">🔥</div>
                                <div class="text-2xl font-bold">12</div>
                                <div class="text-xs text-white/60 mt-1">Day streak</div>
                            </div>
                            <div class="rounded-2xl bg-white/10 p-4 text-center">
                                <div class="text-3xl mb-1">📅</div>
                                <div class="text-2xl font-bold">47</div>
                                <div class="text-xs text-white/60 mt-1">Total entries</div>
                            </div>
                        </div>
                        <div class="rounded-2xl bg-white/5 border border-white/10 p-4">
                            <p class="text-sm font-medium mb-3">Mood distribution</p>
                            <div class="flex flex-col gap-2 text-sm">
                                <div class="flex items-center gap-3"><span class="w-6">🌻</span>
                                    <div class="flex-1 bg-white/10 rounded-full h-2">
                                        <div class="bg-yellow-400 h-2 rounded-full" style="width:68%"></div>
                                    </div>
                                    <span class="text-white/60 w-8 text-right">68%</span>
                                </div>
                                <div class="flex items-center gap-3"><span class="w-6">🌸</span>
                                    <div class="flex-1 bg-white/10 rounded-full h-2">
                                        <div class="bg-pink-400 h-2 rounded-full" style="width:15%"></div>
                                    </div>
                                    <span class="text-white/60 w-8 text-right">15%</span>
                                </div>
                                <div class="flex items-center gap-3"><span class="w-6">🥀</span>
                                    <div class="flex-1 bg-white/10 rounded-full h-2">
                                        <div class="bg-purple-400 h-2 rounded-full" style="width:10%"></div>
                                    </div>
                                    <span class="text-white/60 w-8 text-right">10%</span>
                                </div>
                                <div class="flex items-center gap-3"><span class="w-6">🌾</span>
                                    <div class="flex-1 bg-white/10 rounded-full h-2">
                                        <div class="bg-amber-400 h-2 rounded-full" style="width:7%"></div>
                                    </div>
                                    <span class="text-white/60 w-8 text-right">7%</span>
                                </div>
                            </div>
                        </div>
                    
  `
}