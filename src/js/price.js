function priceInit() {
    // Função do contador
    function startCountdown(elementId, durationHours) {
        const countdownElement = document.getElementById(elementId);
        if (!countdownElement) return; // elemento não existe

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

    // Inicia os contadores apenas se o DOM tiver carregado
    startCountdown("countdown1", 14); 
    startCountdown("countdown2", 6);

    // EasyZoom — só se jQuery estiver carregado
    if (window.jQuery) {
        $(function() {
            const $easyzoom = $('.easyzoom').easyZoom();
        });
    }
}

export default priceInit;
