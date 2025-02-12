//script.js
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const toggleTheme = document.getElementById("toggleTheme");
  const scrollBtn = document.getElementById("scrollToTop");

  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      alert("Thank you for contacting us!");
      form.reset();
    });
  }

  // Scroll button visibility
  if (scrollBtn) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 200) {
        scrollBtn.style.display = "flex";
      } else {
        scrollBtn.style.display = "none";
      }
    });

    scrollBtn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // Theme Toggle
  if (toggleTheme) {
    toggleTheme.addEventListener("click", function () {
      document.body.classList.toggle("dark-mode");

      // Save theme preference
      const isDarkMode = document.body.classList.contains("dark-mode");
      toggleTheme.textContent = isDarkMode ? "☀️" : "🌙";
      localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    });

    // Load theme preference on page load
    if (localStorage.getItem("theme") === "dark") {
      document.body.classList.add("dark-mode");
      toggleTheme.textContent = "☀️";
    }
  }
});
