// Select all filter buttons and blog post cards
const buttons = document.querySelectorAll('.filter-btn');
const posts = document.querySelectorAll('.post-card');

// Add click event to each filter button
buttons.forEach(function(button) {
  button.addEventListener('click', function() {
    // 1. Remove 'active' class from all buttons
    buttons.forEach(function(btn) {
      btn.classList.remove('active');
});

    // 2. Add 'active' class to the clicked button
    button.classList.add('active');

    // 3. Get the selected category from the button's data attribute
    const category = button.dataset.category;

    // 4. Loop through all posts and show/hide based on category
    posts.forEach(function(post) {
      if (category === 'all' || post.dataset.category === category) {
        post.style.display = 'block'; // Show matching posts
} else {
        post.style.display = 'none'; // Hide non-matching posts
}
});
});
});





// Scroll-triggered animation using Intersection Observer
const blogCards = document.querySelectorAll('.post-card');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('reveal');

      // Set custom delay using --delay
      const index = [...blogCards].indexOf(entry.target);
      entry.target.style.setProperty('--delay', `${index * 0.1}s`);

      observer.unobserve(entry.target);
}
});
}, { threshold: 0.1});

blogCards.forEach(card => {
  observer.observe(card);
});




console.log(`Revealing: ${entry.target.querySelector('h3').textContent}`);

