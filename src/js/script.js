const video = document.getElementById("meuVideo");
const playBtn = document.getElementById("playBtn");
document.getElementById("btnPlayPause").addEventListener("click", playPause);
document.getElementById("btnMute").addEventListener("click", muteUnmute);
document.getElementById("btnFull").addEventListener("click", fullscreen);

// Play e Pause com botão central
playBtn.addEventListener("click", () => {
    if (video.paused) {
        video.play();
        playBtn.style.display = "none";
    } else {
        video.pause();
        playBtn.style.display = "block";
    }
});
//pausar ao psssar por cima entrada
video.addEventListener("mouseenter", () => {
    playBtn.style.display = "block";
});

video.addEventListener("mouseleave", () => {
    if (video.paused === false) {
        playBtn.style.display = "none";
    }
});
video.addEventListener("ended", () => {
    video.currentTime = 0;   // volta para 0 segundos
    playBtn.style.display = "block"; // mostra o botão central de play
    video.load();
});
// Botão Play/Pause nos controles
function playPause() {
    if (video.paused) {
        video.play();
        playBtn.style.display = "none";
    } else {
        video.pause();
        playBtn.style.display = "block";
    }
}

// Botão Mute/Unmute
function muteUnmute() {
    video.muted = !video.muted;
}

// Botão Tela cheia
function fullscreen() {
    if (video.requestFullscreen) {
        video.requestFullscreen();
    }
}

function startCountdown(elementId, durationHours) {
    const countdownElement = document.getElementById(elementId);
    if (!countdownElement) return; // se não existir, não faz nada ✅

    let time = durationHours * 60 * 60; // horas em segundos

    const timer = setInterval(() => {
        const hours = Math.floor(time / 3600);
        const minutes = Math.floor((time % 3600) / 60);
        const seconds = time % 60;

        countdownElement.textContent =
            `${hours}h ${minutes}m ${seconds}s`;

        if (time <= 0) {
            clearInterval(timer);
            countdownElement.textContent = "Oferta Expirada ⌛";
        }

        time--;
    }, 1000);
}

 $(function() {
    var $easyzoom = $('.easyzoom').easyZoom();
  });
// Inicia dois contadores diferentes
startCountdown("countdown1", 14); // 14 horas para Heróis da Bíblia
startCountdown("countdown2", 6); // 14 horas para Milagres de Jesus
