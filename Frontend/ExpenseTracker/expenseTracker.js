let total = 0;
function addExpense() {
  const desc = document.getElementById("desc").value;
  const amount = parseFloat(document.getElementById("amount").value);
  if (desc === "" || isNaN(amount) || amount <= 0) {
    alert("Please enter a valid description and amount");
    return;
  }
  total += amount;
  document.getElementById("total").innerText = total.toFixed(2);
  const expenseList = document.getElementById("expenses");
  const expenseItem = document.createElement("div");
  expenseItem.classList.add("expense-item");
  expenseItem.innerHTML = `<span>${desc}</span> <span>$${amount.toFixed(
    2
  )}</span>`;
  expenseList.appendChild(expenseItem);
  document.getElementById("desc").value = "";
  document.getElementById("amount").value = "";
}
