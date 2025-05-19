// JavaScript för att hantera knappklick

document.addEventListener("DOMContentLoaded", () => {
    // Hämta alla "Learn More"-knappar
    const buttons = document.querySelectorAll(".model-card button");

    

    // Back to home funkar ordentligt
    const backToHome = document.querySelector('nav a[href="porsche.html"]');
    if (backToHome) {
        backToHome.addEventListener("click", (e) => {
            e.preventDefault();
            window.location.href = "porsche.html";
        });
    }

    //Bättre smooth scroll  
    const navbarLinks = document.querySelectorAll('nav a');

    navbarLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');

            // Hantera externa länkar
            if (targetId.startsWith("http") || targetId.endsWith(".html")) {
                return;
            }

            e.preventDefault();

            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Auto-scroll 
    if (window.location.hash) {
        const targetElement = document.querySelector(window.location.hash);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
});

//Mjuk scrollning
document.documentElement.style.scrollBehavior = 'smooth';

//Karta
document.addEventListener("DOMContentLoaded", () => {
    const map = L.map('karta').setView([59.4116184, 18.0379567], 13); // Coordinates for Rinkebyvägen 5, Danderyd

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([59.4116184, 18.0379567]).addTo(map)
        .bindPopup('Rinkebyvägen 5, 182 36 Danderyd')
        .openPopup();
});
