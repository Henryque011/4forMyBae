
$('.carrousel').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    variableWidth: false,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev">❮</button>',
    nextArrow: '<button type="button" class="slick-next">❯</button>'
});


// contador
// script.js
document.addEventListener("DOMContentLoaded", function () {
    const startDate = new Date("2023-10-03T00:00:00");

    function updateTimer() {
        const now = new Date();
        const elapsedTime = now - startDate;

        const days = Math.floor(elapsedTime / (1000 * 60 * 60 * 24));
        const hours = Math.floor((elapsedTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);

        document.getElementById("days").textContent = days;
        document.getElementById("hours").textContent = hours;
        document.getElementById("minutes").textContent = minutes;
        document.getElementById("seconds").textContent = seconds;
    }

    updateTimer();
    setInterval(updateTimer, 1000);
});

