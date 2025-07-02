n// Visitor count feature added

document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio script loaded');

    // Visitor count using localStorage
    const visitorCountKey = 'visitorCount';
    let count = localStorage.getItem(visitorCountKey);
    if (count === null) {
        count = 0;
    } else {
        count = parseInt(count, 10);
    }
    count++;
    localStorage.setItem(visitorCountKey, count);

    // Update visitor count display
    const visitorCountElement = document.getElementById('visitor-count');
    if (visitorCountElement) {
        visitorCountElement.textContent = `You have visited this site ${count} time${count > 1 ? 's' : ''}.`;
    }
});
