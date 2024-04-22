document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("search-button").addEventListener("click", function () {
    var navbar = document.querySelector(".navbar");

    var searchInput = document.createElement("input");
    searchInput.type = "text";
    searchInput.placeholder = "Search...";
    searchInput.classList.add("search-input");

    navbar.appendChild(searchInput);

    searchInput.focus();

    this.style.display = "none";


    function removeSearchInput(e) {
      if (!navbar.contains(e.target)) {
        navbar.removeChild(searchInput);
        document.removeEventListener("click", removeSearchInput);
        document.getElementById("search-button").style.display = "block";
      }
    }

    document.addEventListener("click", removeSearchInput);
  });
});
