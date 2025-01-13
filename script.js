// Counting animation for "Our Reach" section
const counters = document.querySelectorAll('.count');
const speed = 200; // Speed of counting animation

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;

        // Calculate increment
        const increment = target / speed;

        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(updateCount, 10);
        } else {
            counter.innerText = target.toLocaleString(); // Ensure proper formatting
        }
    };

    updateCount();
});

// Target follower counts
const followerCounts = {
    facebook: 444000,
    instagram: 58000,
    linkedin: 51000,
};

// Function to animate counting numbers
function animateCount(elementId, targetValue) {
    let currentValue = 0;
    const increment = Math.ceil(targetValue / 100); // Divide into 100 steps
    const element = document.getElementById(elementId);

    const interval = setInterval(() => {
        currentValue += increment;

        // Stop animation if the count reaches the target
        if (currentValue >= targetValue) {
            currentValue = targetValue;
            clearInterval(interval);
        }

        element.textContent = currentValue.toLocaleString(); // Format with commas
    }, 30); // Update every 30ms
}

// Start animation when the page loads
window.onload = () => {
    animateCount('facebook-count', followerCounts.facebook);
    animateCount('instagram-count', followerCounts.instagram);
    animateCount('linkedin-count', followerCounts.linkedin);
};
// JavaScript for adding interactivity (if needed)
// Ensure equal height for spotlight cards dynamically
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");
    let maxHeight = 0;
  
    cards.forEach((card) => {
      maxHeight = Math.max(maxHeight, card.offsetHeight);
    });
  
    cards.forEach((card) => {
      card.style.height = `${maxHeight}px`;
    });
  });
  
