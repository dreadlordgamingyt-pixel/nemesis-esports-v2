// Sticky Navbar Shadow
window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        navbar.style.background = "rgba(0,0,0,0.9)";
        navbar.style.boxShadow = "0 8px 30px rgba(0,0,0,.5)";
    } else {
        navbar.style.background = "rgba(0,0,0,.45)";
        navbar.style.boxShadow = "none";
    }
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){
            target.scrollIntoView({
                behavior:"smooth"
            });
        }
    });
});
const targetDate = new Date("July 12, 2026 20:00:00").getTime();

setInterval(() => {

    const now = new Date().getTime();

    const distance = targetDate - now;

    document.getElementById("days").innerHTML =
    Math.floor(distance/(1000*60*60*24));

    document.getElementById("hours").innerHTML =
    Math.floor((distance%(1000*60*60*24))/(1000*60*60));

    document.getElementById("minutes").innerHTML =
    Math.floor((distance%(1000*60*60))/(1000*60));

    document.getElementById("seconds").innerHTML =
    Math.floor((distance%(1000*60))/1000);

},1000);
