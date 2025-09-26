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
  // 14 horas em milissegundos
  let countDownTime = 14 * 60 * 60 * 1000; 

  function updateCountdown() {
    let hours = Math.floor((countDownTime / (1000 * 60 * 60)) % 24);
    let minutes = Math.floor((countDownTime / (1000 * 60)) % 60);
    let seconds = Math.floor((countDownTime / 1000) % 60);

    document.getElementById("countdown").innerText =
      `${hours}h ${minutes}m ${seconds}s`;

    if (countDownTime > 0) {
      countDownTime -= 1000;
    } else {
      document.getElementById("countdown").innerText = "Expirado!";
    }
  }

  // Atualiza a cada 1 segundo
  setInterval(updateCountdown, 1000);

  // Chamada inicial
  updateCountdown();