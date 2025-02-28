let startTime, interval;
const textElement = document.getElementById("text");
const inputElement = document.getElementById("input");
const timeElement = document.getElementById("time");
const speedElement = document.getElementById("speed");

inputElement.addEventListener("input", () => {
  if (!startTime) {
    startTime = new Date().getTime();
    interval = setInterval(updateTime, 1000);
  }
  checkTypingSpeed();
});

function updateTime() {
  const elapsedTime = (new Date().getTime() - startTime) / 1000;
  timeElement.textContent = Math.floor(elapsedTime);
}

function checkTypingSpeed() {
  const wordsTyped = inputElement.value.trim().split(/\s+/).length;
  const elapsedTime = (new Date().getTime() - startTime) / 1000 / 60;
  speedElement.textContent = Math.floor(wordsTyped / elapsedTime) || 0;
}

function resetTest() {
  clearInterval(interval);
  startTime = null;
  inputElement.value = "";
  timeElement.textContent = "0";
  speedElement.textContent = "0";
}
