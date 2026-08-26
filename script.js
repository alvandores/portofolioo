// =========================
// Fachrieocean PORTFOLIO
// =========================


// =========================
// THEME MODE
// =========================

const themeButton = document.getElementById("themeButton");

if (themeButton) {

    themeButton.addEventListener("click", () => {

        document.body.classList.toggle("navy-mode");

        if (document.body.classList.contains("navy-mode")) {

            themeButton.textContent = "☀️";

            localStorage.setItem("theme", "navy");

        } else {

            themeButton.textContent = "🌙";

            localStorage.setItem("theme", "light");

        }

    });


    // LOAD SAVED THEME

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "navy") {

        document.body.classList.add("navy-mode");

        themeButton.textContent = "☀️";

    } else {

        themeButton.textContent = "🌙";

    }

}


// =========================
// MUSIC PLAYER
// =========================

const music = document.getElementById("music");
const musicButton = document.getElementById("musicButton");
const musicTitle = document.getElementById("musicTitle");


if (music && musicButton) {

    // PLAY / PAUSE

    musicButton.addEventListener("click", async () => {

        try {

            if (music.paused) {

                await music.play();

                musicButton.textContent = "Ⅱ";

                if (musicTitle) {
                    musicTitle.textContent = "Playing...";
                }

            } else {

                music.pause();

                musicButton.textContent = "▶";

                if (musicTitle) {
                    musicTitle.textContent = "Paused";
                }

            }

        } catch (error) {

            console.error("Music error:", error);

            if (musicTitle) {
                musicTitle.textContent =
                    "Music file tidak ditemukan";
            }

        }

    });


    // MUSIC ERROR

    music.addEventListener("error", () => {

        console.error("File music.mp3 gagal dimuat.");

        if (musicTitle) {
            musicTitle.textContent =
                "Music unavailable";
        }

    });

}


// =========================
// NAVIGATION
// =========================

const navLinks =
    document.querySelectorAll(".nav-menu a");

navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        navLinks.forEach((item) => {
            item.classList.remove("active");
        });

        link.classList.add("active");

    });

});


// =========================
// SCROLL NAVIGATION
// =========================

const sections =
    document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach((section) => {

        const sectionTop =
            section.offsetTop - 180;

        const sectionBottom =
            sectionTop + section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionBottom
        ) {

            currentSection = section.id;

        }

    });


    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + currentSection
        ) {

            link.classList.add("active");

        }

    });

});


// =========================
// PROJECT CARD
// =========================

const projectCards =
    document.querySelectorAll(".project-card");

projectCards.forEach((card) => {

    card.addEventListener("click", () => {

        card.classList.toggle("selected");

    });

});


// =========================
// BACK TO TOP
// =========================

const backToTop =
    document.querySelector("footer a");

if (backToTop) {

    backToTop.addEventListener("click", (event) => {

        event.preventDefault();

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}


// =========================
// CURRENT YEAR
// =========================

const footerYear =
    document.querySelector("footer p");

if (footerYear) {

    footerYear.textContent =
        "© " +
        new Date().getFullYear() +
        " Fachrieocean ";

}


// =========================
// PAGE LOAD
// =========================

console.log(
    "Fachrieocean Portfolio loaded successfully."
);

// =========================
// MINIMAL METEOR EFFECT
// =========================

const meteorContainer =
    document.querySelector(".meteor-container");

function createMeteor() {

    if (!meteorContainer) return;

    // jumlah meteor random: 5 - 7
    const meteorCount =
        Math.floor(Math.random() * 3) + 5;

    for (let i = 0; i < meteorCount; i++) {

        const meteor =
            document.createElement("div");

        meteor.classList.add("meteor");

        // posisi random
        meteor.style.left =
            Math.random() * 100 + "%";

        meteor.style.top =
            Math.random() * 35 + "%";

        // ukuran sedikit berbeda
        const size =
            Math.random() * 2 + 2.5;

        meteor.style.width = size + "px";
        meteor.style.height = size + "px";

        // kecepatan sedikit berbeda
        const duration =
            Math.random() * 0.8 + 1;

        meteor.style.animationDuration =
            duration + "s";

        // delay kecil agar tidak jatuh persis bersamaan
        meteor.style.animationDelay =
            Math.random() * 0.5 + "s";

        meteorContainer.appendChild(meteor);

        // hapus setelah selesai
        setTimeout(() => {
            meteor.remove();
        }, (duration + 0.6) * 1000);

    }

}


// muncul setiap 10 detik
setInterval(createMeteor, 10000);

// =========================
// AUTO HIDE NAVBAR
// =========================

const navbar = document.querySelector(".navbar");

let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {

    if (!navbar) return;

    const currentScrollY = window.scrollY;


    // =========================
    // MASIH DI BAGIAN PROFILE
    // =========================

    if (currentScrollY <= 150) {

        navbar.classList.remove("navbar-hidden");

        lastScrollY = currentScrollY;

        return;
    }


    // =========================
    // SCROLL KE BAWAH
    // =========================

    if (currentScrollY > lastScrollY) {

        navbar.classList.add("navbar-hidden");

    }


    // =========================
    // SCROLL KE ATAS
    // =========================

    else if (currentScrollY < lastScrollY) {

        navbar.classList.remove("navbar-hidden");

    }


    lastScrollY = currentScrollY;

});