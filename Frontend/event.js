document.addEventListener("DOMContentLoaded", function () {
  loadEvents();
});

// Function to show the event form
function showEventForm() {
  document.getElementById("event-form").style.display = "block";
}

// Function to hide the event form
function hideEventForm() {
  document.getElementById("event-form").style.display = "none";
}

function toggleEventForm() {
  let form = document.getElementById("eventForm");
  form.style.display = form.style.display === "none" ? "block" : "none";
}

function addEvent() {
  let name = document.getElementById("eventName").value;
  let date = document.getElementById("eventDate").value;
  let desc = document.getElementById("eventDesc").value;
  console.log(name);
  console.log(date);
  console.log(desc);

  if (name === "" || date === "" || desc === "") {
    alert("Please fill in all event details.");
    return;
  }

  let container = document.getElementById("hackathon-container");

  let card = document.createElement("div");
  card.classList.add("hackathon-card");

  card.innerHTML = `
        <h3>${name}</h3>
        <p class="event-date">📅 ${date}</p>
        <p class="event-desc">${desc}</p>
        <button class="register-btn">Register</button>
    `;

  container.appendChild(card);

  // Clear input fields
  document.getElementById("eventName").value = "";
  document.getElementById("eventDate").value = "";
  document.getElementById("eventDesc").value = "";

  // Hide the form after adding the event
  toggleEventForm();
}
// Function to save events in local storage
function saveEvent(event) {
  let events = JSON.parse(localStorage.getItem("events")) || [];
  events.push(event);
  localStorage.setItem("events", JSON.stringify(events));
}

// Function to load events from local storage
function loadEvents() {
  let events = JSON.parse(localStorage.getItem("events")) || [];
  let eventContainer = document.getElementById("event-container");

  events.forEach((event) => {
    let newEvent = document.createElement("div");
    newEvent.classList.add("hackathon-card");

    newEvent.innerHTML = `
            <h3>${event.title}</h3>
            <p class="event-date">📅 ${event.date}</p>
            <p class="event-desc">${event.desc}</p>
            <button class="register-btn">Register</button>
        `;

    eventContainer.appendChild(newEvent);
  });
}

// Function to search events
function searchEvents() {
  let searchText = document.getElementById("search-bar").value.toLowerCase();
  let events = document.querySelectorAll(".hackathon-card");

  events.forEach((event) => {
    let title = event.querySelector("h3").innerText.toLowerCase();
    if (title.includes(searchText)) {
      event.style.display = "block";
    } else {
      event.style.display = "none";
    }
  });
}

// scroll button
const scrollBtn = document.getElementById("scrollToTop");

window.onscroll = function () {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
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
