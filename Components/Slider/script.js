const slides = document.querySelector(".slides");
const totalSlides = document.querySelectorAll(".slide").length;
let currentIndex = 0;

function updateSlide() {
    let angle = (360 / totalSlides) * currentIndex;
    slides.style.transform = `rotateY(-${angle}deg)`;
}

document.querySelector(".right").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlide();
});

document.querySelector(".left").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlide();
});
