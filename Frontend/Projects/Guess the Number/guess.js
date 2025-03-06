let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
    let guess = parseInt(document.getElementById("guess").value);
    let message = document.getElementById("message");

    if (isNaN(guess) || guess < 1 || guess > 100) {
        message.innerText = "Please enter a valid number between 1 and 100.";
        return;
    }

    attempts++;

    if (guess === randomNumber) {
        message.innerText = `🎉 Correct! You guessed it in ${attempts} attempts.`;
    } else if (guess < randomNumber) {
        message.innerText = "Too low! Try again.";
    } else {
        message.innerText = "Too high! Try again.";
    }
}

function resetGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById("message").innerText = "";
    document.getElementById("guess").value = "";
}