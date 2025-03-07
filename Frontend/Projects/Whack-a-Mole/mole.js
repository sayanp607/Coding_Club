const grid = document.getElementById("grid");
const scoreDisplay = document.getElementById("score");
const startButton = document.getElementById("startBtn");
let score = 0;
let gameInterval;
let countdownTimer;
let gameDuration = 30; 


for (let i = 0; i < 9; i++) {
    const hole = document.createElement("div");
    hole.classList.add("hole");

    const mole = document.createElement("img");
    mole.src = "mole.png"; 
    mole.classList.add("mole");
    
    hole.appendChild(mole);
    grid.appendChild(hole);
}

// Game logic
let lastMole;
function randomMole() {
    const moles = document.querySelectorAll(".mole");
    const index = Math.floor(Math.random() * moles.length);
    
    if (moles[index] === lastMole) {
        return randomMole(); 
    }
    
    lastMole = moles[index];
    moles[index].classList.add("show");
    
    setTimeout(() => {
        moles[index].classList.remove("show");
    }, 1000);
}


document.querySelectorAll(".mole").forEach(mole => {
    mole.addEventListener("click", () => {
        if (gameInterval) { 
            score++;
            scoreDisplay.textContent = score;
            mole.classList.remove("show");
        }
    });
});

function startGame() {
    score = 0;
    scoreDisplay.textContent = score;
    let timeLeft = gameDuration;
    startButton.disabled = true; 

    gameInterval = setInterval(randomMole, 1000);

    countdownTimer = setInterval(() => {
        timeLeft--;
        if (timeLeft <= 0) {
            clearInterval(gameInterval); 
            clearInterval(countdownTimer); 
            alert(`Game Over! Your score: ${score}`);
            startButton.disabled = false; 
        }
    }, 1000);
}
