// FAQ Accordion Logic
document.addEventListener('DOMContentLoaded', () => {
    const accordionItems = document.querySelectorAll('.accordion-item');

    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        
        header.addEventListener('click', () => {
            // Close other open items
            const currentlyActive = document.querySelector('.accordion-item.active');
            if (currentlyActive && currentlyActive !== item) {
                currentlyActive.classList.remove('active');
            }

            // Toggle current item
            item.classList.toggle('active');
        });
    });

    // Countdown Timer Logic (15 minutes from now)
    const countdownElement = document.getElementById('countdown');
    if (countdownElement) {
        let timeInSeconds = 15 * 60; // 15 minutes

        const updateTimer = () => {
            const m = Math.floor(timeInSeconds / 60);
            const s = timeInSeconds % 60;

            document.getElementById('minutes').textContent = m.toString().padStart(2, '0');
            document.getElementById('seconds').textContent = s.toString().padStart(2, '0');

            if (timeInSeconds > 0) {
                timeInSeconds--;
            }
        };

        // Initial call
        updateTimer();
        setInterval(updateTimer, 1000);
    }
});
