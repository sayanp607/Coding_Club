let timer;
let seconds = 0,
  minutes = 0,
  hours = 0;
let running = false;

function startStopwatch() {
  if (!running) {
    running = true;
    timer = setInterval(updateTime, 1000);
  }
}

function stopStopwatch() {
  running = false;
  clearInterval(timer);
}

function resetStopwatch() {
  running = false;
  clearInterval(timer);
  seconds = 0;
  minutes = 0;
  hours = 0;
  document.querySelector(".stopwatch").innerText = "00:00:00";
}

function updateTime() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }
  document.querySelector(".stopwatch").innerText = `${String(hours).padStart(
    2,
    "0"
  )}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}
