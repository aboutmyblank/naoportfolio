document.addEventListener("DOMContentLoaded", function() {
  // Select the "About" link and the hidden sections
  const aboutLink = document.getElementById("bioLink");
  const bioSection = document.getElementById("bio");
  const cvSection = document.getElementById("CV");

  // Set initial display for sections to 'none' (hidden)
  bioSection.style.display = "none";
  cvSection.style.display = "none";

  // Add a click event listener to the "About" link
  aboutLink.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default anchor behavior

    // Toggle display of bio and CV sections
    if (bioSection.style.display === "none") {
      bioSection.style.display = "block";
      cvSection.style.display = "block";
    } else {
      bioSection.style.display = "none";
      cvSection.style.display = "none";
    }
  });
});

