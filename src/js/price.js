function priceInit() {
    function startCountdown(id, hours) {
        const el = document.getElementById(id);
        if (!el) return;

        let time = hours * 60 * 60;

        setInterval(() => {
            const h = Math.floor(time / 3600);
            const m = Math.floor((time % 3600) / 60);
            const s = time % 60;

            el.textContent = `${h}h ${m}m ${s}s`;

            if (time <= 0) {
                el.textContent = "Oferta Expirada ⌛";
            }

            time--;
        }, 1000);
    }

    // único contador ativo
    startCountdown("countdown1-mobile", 14);
}

export default priceInit;
