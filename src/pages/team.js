export function showTeamModal() {
    let modal = document.getElementById('teamModal');

    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'teamModal';
        modal.classList.add('modal');

        modal.innerHTML = `
            <div class="modal-content">
                <button class="close-modal">&times;</button>
                <h2>🌿 Meet the Mood-Garden Team</h2>

                <div class="team-member">
                    <h3>Colm Woods</h3>
                    <p>How To Use & Team Pages</p>
                    <div class="social-links">
                        <a href="https://github.com/colmwoods" target="_blank">GitHub</a>
                        <a href="https://linkedin.com/in/YOUR-LINK" target="_blank">LinkedIn</a>
                    </div>
                </div>

                <div class="team-member">
                    <h3>Aishieee</h3>
                    <p>Home & Global Styling</p>
                    <div class="social-links">
                        <a href="#" target="_blank">GitHub</a>
                        <a href="#" target="_blank">LinkedIn</a>
                    </div>
                </div>

                <div class="team-member">
                    <h3>akashebaev-ux</h3>
                    <p>Mood Logging</p>
                    <div class="social-links">
                        <a href="#" target="_blank">GitHub</a>
                        <a href="#" target="_blank">LinkedIn</a>
                    </div>
                </div>

                <div class="team-member">
                    <h3>barkode</h3>
                    <p>Storage System</p>
                    <div class="social-links">
                        <a href="#" target="_blank">GitHub</a>
                        <a href="#" target="_blank">LinkedIn</a>
                    </div>
                </div>

                <div class="team-member">
                    <h3>11florin</h3>
                    <p>Garden Rendering</p>
                    <div class="social-links">
                        <a href="#" target="_blank">GitHub</a>
                        <a href="#" target="_blank">LinkedIn</a>
                    </div>
                </div>

            </div>
        `;

        document.body.appendChild(modal);

        modal.querySelector('.close-modal').addEventListener('click', () => {
            modal.style.display = 'none';
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    }

    modal.style.display = 'flex';
}