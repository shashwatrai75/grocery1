document.addEventListener("DOMContentLoaded", function () {
    const darkModeButton = document.getElementById("dark-mode-toggle");
    const body = document.body;
    let darkModeEnabled = false;

    darkModeButton.addEventListener("click", function () {
        darkModeEnabled = !darkModeEnabled;
        body.style.backgroundImage = darkModeEnabled ? "url('image\naya.jpg')" : "url('image\urban-oasis-1[6].jpg')";
    });
});
