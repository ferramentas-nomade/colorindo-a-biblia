
function carousel() {
    const card = document.querySelectorAll(".card");
    const prevBtn = document.getElementById("prev-button");
    const nextBtn = document.getElementById("next-button");

    let currentSlide = 0;

    function hideCard() {
        card.forEach(item => item.classList.remove('on'));
    }

    function showCard() {
        card[currentSlide].classList.add('on');
    }

    function nextBtnCard() {
        hideCard();
        if (currentSlide === card.length - 1) {
            currentSlide = 0
        } else {
            currentSlide++
        }
        showCard();
    }
    function prevBtnCard() {
        hideCard();
        if (currentSlide === 0) {
            currentSlide = card.length - 1
        } else {
            currentSlide--
        }
        showCard();
    }
    showCard();
    
    prevBtn.addEventListener('click', prevBtnCard);
    nextBtn.addEventListener('click', nextBtnCard);
} export default carousel;
