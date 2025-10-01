function carouselActive() {
    const prevBtn = document.getElementById("leftButton");
    const nextBtn = document.getElementById("rightButton");
    const items = ['item-1', 'item-2']; // ajuste se tiver mais itens
    let nextItemId = 0;
    let itemBase = document.getElementById(items[nextItemId]);

    // Ativa o primeiro item no carregamento
    itemBase.classList.add("active");
    itemBase.style.display = "flex";

    function showItem(index, direction = "next") {
        let oldItem = itemBase;

        // saída do item atual
        oldItem.classList.remove("active");
        oldItem.classList.add(direction === "next" ? "exit-left" : "exit-right");

        // próximo item
        nextItemId = (index + items.length) % items.length;
        itemBase = document.getElementById(items[nextItemId]);

        // posiciona o próximo item fora da tela
        itemBase.classList.remove("exit-left", "exit-right", "active");
        itemBase.classList.add(direction === "next" ? "from-right" : "from-left");
        itemBase.style.display = "flex";

        // força reflow para garantir animação
        void itemBase.offsetWidth;

        // anima entrada
        itemBase.classList.add("active");
        itemBase.classList.remove("from-right", "from-left");

        // esconde o antigo quando a transição acabar
        const onTransitionEnd = () => {
            oldItem.removeEventListener("transitionend", onTransitionEnd);
            oldItem.classList.remove("exit-left", "exit-right");
            oldItem.style.display = "none";
        };
        oldItem.addEventListener("transitionend", onTransitionEnd);
    }

    // --- Botões ---
    nextBtn.addEventListener("click", () => showItem(nextItemId + 1, "next"));
    prevBtn.addEventListener("click", () => showItem(nextItemId - 1, "prev"));

    // --- Arrastar com mouse + touch ---
    let startX = 0;
    let isDragging = false;
    const container = document.querySelector(".carousel_track");

    // Desktop
    container.addEventListener("mousedown", (e) => {
        startX = e.clientX;
        isDragging = true;
    });

    container.addEventListener("mouseup", (e) => {
        if (!isDragging) return;
        let endX = e.clientX;
        handleSwipe(endX - startX);
        isDragging = false;
    });

    container.addEventListener("mouseleave", () => {
        isDragging = false;
    });

    // Mobile / Tablet
    container.addEventListener("touchstart", (e) => {
        startX = e.touches[0].clientX;
        isDragging = true;
    });

    container.addEventListener("touchend", (e) => {
        if (!isDragging) return;
        let endX = e.changedTouches[0].clientX;
        handleSwipe(endX - startX);
        isDragging = false;
    });

    // --- Função genérica de swipe ---
    function handleSwipe(diff) {
        if (Math.abs(diff) > 50) { // só aceita arrastos grandes
            if (diff < 0) {
                showItem(nextItemId + 1, "next"); // arrastou para esquerda → próximo
            } else {
                showItem(nextItemId - 1, "prev"); // arrastou para direita → anterior
            }
        }
    }
}

export default carouselActive;
