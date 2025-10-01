
function carousel() {

    const track = document.querySelector(".carousel_track");
    const items = document.querySelectorAll(".item");
    const prevBtn = document.getElementById("leftButton");
    const nextBtn = document.getElementById("rightButton");

    let index = 0;

    function updateCarousel() {
        track.style.transform = `translateX(${-index * 100}%)`;
    }

    // Botões
    nextBtn.addEventListener("click", () => {
        if (index < items.length - 1) {
            index++;
            updateCarousel();
        }
    });

    prevBtn.addEventListener("click", () => {
        if (index > 0) {
            index--;
            updateCarousel();
        }
    });

    // Drag com mouse/touch
    let startX = 0;
    let isDragging = false;

    track.addEventListener("mousedown", (e) => {
        isDragging = true;
        startX = e.pageX;
    });

    track.addEventListener("mouseup", (e) => {
        if (!isDragging) return;
        let endX = e.pageX;
        if (startX - endX > 50 && index < items.length - 1) {
            index++;
        } else if (endX - startX > 50 && index > 0) {
            index--;
        }
        updateCarousel();
        isDragging = false;
    });

    track.addEventListener("touchstart", (e) => {
        isDragging = true;
        startX = e.touches[0].pageX;
    });

    track.addEventListener("touchend", (e) => {
        if (!isDragging) return;
        let endX = e.changedTouches[0].pageX;
        if (startX - endX > 50 && index < items.length - 1) {
            index++;
        } else if (endX - startX > 50 && index > 0) {
            index--;
        }
        updateCarousel();
        isDragging = false;
    });
    $(document).ready(function () {
        // Inicializa todos os EasyZoom
        var $easyzoom = $('.easyzoom').easyZoom();
    });
} export default carousel;