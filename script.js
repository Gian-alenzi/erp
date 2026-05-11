// تشغيل الموسيقى

const music = new Audio("saxophone.mp3");

music.loop = true;

window.addEventListener("click", () => {

    music.play();

}, { once:true });


// ظهور العناصر بسلاسة

const cards = document.querySelectorAll(".course-card");

window.addEventListener("scroll", () => {

    cards.forEach(card => {

        const cardTop = card.getBoundingClientRect().top;

        if(cardTop < window.innerHeight - 100){

            card.style.opacity = "1";

            card.style.transform = "translateY(0)";
        }
    });
});


// تأثير الماوس على الـ CD

const cd = document.querySelector(".cd");

document.addEventListener("mousemove", (e)=>{

    let x = (window.innerWidth / 2 - e.pageX) / 40;

    let y = (window.innerHeight / 2 - e.pageY) / 40;

    cd.style.transform =
    `rotate(${x}deg) translateY(${y}px)`;
});