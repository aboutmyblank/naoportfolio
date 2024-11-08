// Select the overlay div and all project images
const overlay = document.getElementById('image-overlay');
const projectImages = document.querySelectorAll('.projects img');
const projectsContainer = document.querySelector('.projects');

// Show overlay when hovering over each image
projectImages.forEach((img) => {
  img.addEventListener('mouseenter', function () {
    overlay.style.backgroundImage = `url(${img.src})`;
    overlay.style.display = 'block';
    overlay.style.opacity = '1';
  });
});

// Hide overlay when the cursor leaves the `.projects` container
projectsContainer.addEventListener('mouseleave', function () {
  overlay.style.opacity = '0';
  setTimeout(() => {
    overlay.style.display = 'none';
  }); // Wait for the fade-out transition
});
