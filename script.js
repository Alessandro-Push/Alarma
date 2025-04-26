let minutes = 2;
let seconds = 0;
const countdownElement = document.getElementById('countdown');
const tickSound = document.getElementById('tickSound');
const body = document.body;
const startButton = document.getElementById('startButton');
const startScreen = document.getElementById('startScreen');
const content = document.getElementById('content');

let isOrange = true;
let countdownInterval;

function startCountdown() {
    startScreen.style.display = 'none';
    content.style.display = 'block';
    updateCountdown();
    countdownInterval = setInterval(updateCountdown, 1000);
}

function updateCountdown() {
    let displayMinutes = minutes < 10 ? '0' + minutes : minutes;
    let displaySeconds = seconds < 10 ? '0' + seconds : seconds;
    countdownElement.textContent = `${displayMinutes}:${displaySeconds}`;

    // Alternar color de fondo
    if (isOrange) {
        body.style.backgroundColor = "#000000"; // Negro
    } else {
        body.style.backgroundColor = "#8B0000"; // Rojo oscuro
    }
    isOrange = !isOrange;

    // Reproducir sonido
    tickSound.play();

    if (minutes === 0 && seconds === 0) {
        clearInterval(countdownInterval);
        alert("¡Datos enviados automáticamente!");
        body.style.backgroundColor = "black";
    } else {
        if (seconds === 0) {
            minutes--;
            seconds = 59;
        } else {
            seconds--;
        }
    }
}

startButton.addEventListener('click', startCountdown);
