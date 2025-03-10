document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const toggleTheme = document.getElementById("toggleTheme");
  const scrollBtn = document.getElementById("scrollToTop");
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");
  const closeMenu = document.getElementById("closeMenu");
  const menuToggleButton = document.querySelector(".menu-toggle-btn");

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
  navLinks.style.transform = "translateX(100%)";
  navLinks.style.position = "fixed"; // Prevents layout shifts

  // Open menu when clicking the hamburger button
  hamburger.addEventListener("click", function (event) {
    event.stopPropagation(); // Prevents immediate closing
    navLinks.style.transform = "translateX(0)"; // Slide in
  });

  // Close menu when clicking the cross button
  closeMenu.addEventListener("click", function () {
    navLinks.style.transform = "translateX(100%)"; // Slide out
  });

  // Close menu when clicking anywhere outside the menu
  document.addEventListener("click", function (event) {
    if (!navLinks.contains(event.target) && !hamburger.contains(event.target)) {
      navLinks.style.transform = "translateX(100%)"; // Hide menu
    }
  });

  // Prevent clicks inside the menu from closing it
  navLinks.addEventListener("click", function (event) {
    event.stopPropagation();
  });

  // Stop closing menu when clicking the toggle button inside
  if (menuToggleButton) {
    menuToggleButton.addEventListener("click", function (event) {
      event.stopPropagation(); // Prevents menu from closing
      document.body.classList.toggle("dark-mode");

      // Save theme preference
      const isDarkMode = document.body.classList.contains("dark-mode");
      menuToggleButton.textContent = isDarkMode ? "☀️" : "🌙";
      localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    });

    // Load theme preference inside the menu on page load
    if (localStorage.getItem("theme") === "dark") {
      document.body.classList.add("dark-mode");
      menuToggleButton.textContent = "☀️";
    }
  }
});

// scroll button
const scrollBtn = document.getElementById("scrollToTop");

window.onscroll = function () {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    scrollBtn.style.display = "flex";
  } else {
    scrollBtn.style.display = "none";
  }
};

scrollBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// footer

// Share functionality
const currentURL = encodeURIComponent(window.location.href);

document.getElementById(
  "facebookShare"
).href = `https://www.facebook.com/sharer/sharer.php?u=${currentURL}`;
document.getElementById(
  "twitterShare"
).href = `https://twitter.com/intent/tweet?url=${currentURL}&text=Check%20this%20out!`;
document.getElementById(
  "linkedinShare"
).href = `https://www.linkedin.com/sharing/share-offsite/?url=${currentURL}`;
document.getElementById(
  "whatsappShare"
).href = `https://api.whatsapp.com/send?text=Check%20this%20out:%20${currentURL}`;

document.addEventListener("DOMContentLoaded", function () {
  const messageInput = document.getElementById("message");
  const charCount = document.getElementById("charCount");
  const maxLength = messageInput.getAttribute("maxlength");

  messageInput.addEventListener("input", function () {
    let currentLength = messageInput.value.length;
    charCount.textContent = `${currentLength} / ${maxLength}`;

    // *Change color if limit is close*
    if (currentLength > maxLength * 0.9) {
      charCount.style.color = "red"; // Alert user when near limit
    } else {
      charCount.style.color = "#555"; // Normal state
    }
  });
});

// document.addEventListener("DOMContentLoaded", function () {
//   const greetingContainer = document.getElementById("greeting");

//   function getGreeting() {
//       let hours = new Date().getHours();
//       let greetingText = "";

//       if (hours >= 5 && hours < 12) {
//           greetingText = "Good Morning!";
//       } else if (hours >= 12 && hours < 17) {
//           greetingText = "Good Afternoon!";
//       } else if (hours >= 17 && hours < 21) {
//           greetingText = "Good Evening!";
//       } else {
//           greetingText = "Good Night!";
//       }

//       alert(greetingText);
//   }

//   getGreeting();
// });
function signup() {
  let name = document.getElementById("signup-name").value;
  let email = document.getElementById("signup-email").value;
  let password = document.getElementById("signup-password").value;
  let degree = document.getElementById("signup-degree").value;
  let profilePhoto = document.getElementById("signup-profile-photo").files[0];
  let skills = document.getElementById("signup-skills").value;
  let phone = document.getElementById("signup-phone").value;
  let address = document.getElementById("signup-address").value;
  let message = document.getElementById("signup-message");

  if (!name || !email || !password) {
    message.style.color = "red";
    message.innerText = "Please fill in all required fields.";
    return;
  }

  if (localStorage.getItem(email)) {
    message.style.color = "red";
    message.innerText = "User already exists!";
  } else {
    let userData = {
      name,
      email,
      password,
      degree,
      skills,
      phone,
      address,
      profilePhoto: profilePhoto ? profilePhoto.name : "",
    };

    localStorage.setItem(email, JSON.stringify(userData));
    message.style.color = "green";
    message.innerText = "Signup successful! Redirecting to Home...";
    setTimeout(() => (window.location.href = "index.html"), 2000);
  }
}

function login() {
  let username = document.getElementById("login-username").value.trim();
  let password = document.getElementById("login-password").value.trim();
  let message = document.getElementById("login-message");

  // Validation: Check if fields are empty
  if (!username || !password) {
    message.style.color = "red";
    message.innerText = "Please enter both email and password.";
    return;
  }

  // Get stored user data
  let storedUserData = localStorage.getItem(username);

  if (storedUserData) {
    let userData = JSON.parse(storedUserData); // Parse JSON data
    if (userData.password === password) {
      localStorage.setItem("loggedInUser", username);
      message.style.color = "green";
      message.innerText = "Login successful! Redirecting...";
      setTimeout(() => (window.location.href = "index.html"), 2000);
    } else {
      message.style.color = "red";
      message.innerText = "Invalid credentials!";
    }
  } else {
    message.style.color = "red";
    message.innerText = "User not found!";
  }

  getGreeting();
}
document.addEventListener("DOMContentLoaded", function () {
  const text = "Coding Club";
  let index = 0;
  // console.log(text);
  function typeEffect() {
    document.getElementById("typingText").textContent = text.slice(0, index);
    index++;
    if (index <= text.length) {
      setTimeout(typeEffect, 100);
    } else {
      document.getElementById("typingText").style.borderRight = "none";
    }
  }
  typeEffect();
});

document.addEventListener("DOMContentLoaded", function () {
  const overlay = document.getElementById("overlay");

  // Check if greeting has already been shown in this session
  if (!sessionStorage.getItem("greetingShown")) {
    overlay.style.display = "flex"; // Show greeting card
    sessionStorage.setItem("greetingShown", "true"); // Mark as shown
  } else {
    overlay.style.display = "none"; // Hide greeting card
  }

  document.querySelector(".close-btn").addEventListener("click", function () {
    overlay.style.display = "none";
  });
});

// searchbar function
function searchProjects() {
  const searchBar = document.getElementById("searchBar");
  const filter = searchBar.value.toLowerCase();
  const projectCards = document.querySelectorAll(".project-card");
  let noResults = true; // Assume no results initially

  projectCards.forEach((card) => {
    const title = card.querySelector("h3").textContent.toLowerCase();
    const description = card.querySelector("p").textContent.toLowerCase();

    if (title.includes(filter) || description.includes(filter)) {
      card.style.display = "block"; // Show matching project
      noResults = false; // We found a match
    } else {
      card.style.display = "none"; // Hide non-matching project
    }
  });

  // Get the No Results message element
  const noResultsMessage = document.getElementById("noResults");

  if (noResults) {
    noResultsMessage.style.display = "block"; // Show the message if no results
  } else {
    noResultsMessage.style.display = "none"; // Hide the message if results are found
  }
}

// Function to clear search
function clearSearch() {
  document.getElementById("searchBar").value = "";
  searchProjects(); // Reset search
}
