// CLOCK
function updateClock() {
    const clockElement = document.getElementById('clock');
    const now = new Date();

    const options = {
        timeZone: 'Pacific/Auckland',
        hour: 'numeric',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    };

    let timeString = now.toLocaleTimeString('en-NZ', options);

    // Ensure AM/PM is uppercase
    timeString = timeString.replace(/\s?(am|pm)/i, match => ' ' + match.toUpperCase().trimStart());

    clockElement.textContent = timeString;
}

setInterval(updateClock, 1000);
updateClock();


// DATE
function updateDate() {
    const dateElement = document.getElementById('date');
    const now = new Date();

    const options = {
        timeZone: 'Pacific/Auckland',
        month: 'long',
        day: '2-digit',
        year: 'numeric',
    };

    const formatter = new Intl.DateTimeFormat('en-NZ', options);
    const parts = formatter.formatToParts(now);

    const month = parts.find(p => p.type === 'month').value.toUpperCase();
    const day = parts.find(p => p.type === 'day').value.padStart(2, '0');
    const year = parts.find(p => p.type === 'year').value;

    dateElement.textContent = `${month} ${day}, ${year}`;
}

setInterval(updateDate, 1000 * 60);
updateDate();


// THEME TOGGLE + IMAGE SWITCHING 
const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');

    const isDark = document.body.classList.contains('dark-theme');
    const themeImages = document.querySelectorAll('.theme-img');

    themeImages.forEach(img => {
        const newSrc = isDark ? img.dataset.dark : img.dataset.light;
        if (img.src !== newSrc) {
            img.src = newSrc;
        }
    });
});
