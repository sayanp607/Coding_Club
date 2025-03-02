function appendValue(value) {
  document.getElementById("display").value += value;
}
function clearDisplay() {
  document.getElementById("display").value = "";
}
function calculateResult() {
  try {
    document.getElementById("display").value = eval(
      document.getElementById("display").value
    );
  } catch {
    document.getElementById("display").value = "Error";
  }
}
function addToHistory(entry) {
  let historyList = document.getElementById("history-list");
  let newEntry = document.createElement("p");
  newEntry.textContent = entry;
  historyList.prepend(newEntry);
}
