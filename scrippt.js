// JavaScript code
document.addEventListener("DOMContentLoaded", function() {
  // Function to handle search button click
  document.getElementById("search-button").addEventListener("click", function() {
    // Get the navbar element
    var navbar = document.querySelector(".navbar");

    // Create a search input field
    var searchInput = document.createElement("input");
    searchInput.type = "text";
    searchInput.placeholder = "Search...";
    searchInput.classList.add("search-input");

    // Append the search input field to the navbar
    navbar.appendChild(searchInput);

    // Focus on the search input field
    searchInput.focus();

    // Hide the search button
    this.style.display = "none";

    // Function to remove search input field when clicking outside of it
    function removeSearchInput(e) {
      if (!navbar.contains(e.target)) {
        navbar.removeChild(searchInput);
        document.removeEventListener("click", removeSearchInput);
        document.getElementById("search-button").style.display = "block";
      }
    }

    // Listen for clicks outside of the search input field
    document.addEventListener("click", removeSearchInput);
  });
});
