document
  .getElementById("feedback-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const formData = new FormData(this);
    const object = {};
    formData.forEach((value, key) => {
      object[key] = value;
    });
    console.log(object);

    fetch("WEB_APP_URL", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(object),
    })
      .then((response) => response.text())
      .then((data) => {
        console.log(data);
        alert("Feedback submitted successfully!");
        document.getElementById("feedback-form").reset();
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("An error occurred while submitting feedback.");
      });
  });
