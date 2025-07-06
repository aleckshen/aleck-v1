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

    // Ensure AM/PM is in uppercase
    timeString = timeString.replace(/\s?(am|pm)/i, match => ' ' + match.toUpperCase().trimStart());

    clockElement.textContent = timeString;
}

setInterval(updateClock, 1000);
updateClock();
