document.addEventListener('DOMContentLoaded', () => {
    let dayNight = document.querySelector(".dayNight");
    let banner = document.querySelector(".banner");

    dayNight.addEventListener("click", () => {
        banner.classList.toggle("night");
    });

    let typingEffect = new Typed("#text", {
        strings: ["Nitya Sheth", "a Coder", "a Developer"],
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 1000
    });
});
