// JavaScript för att hantera knappklick

document.addEventListener("DOMContentLoaded", () => {
    // Hämta alla "Learn More"-knappar
    const buttons = document.querySelectorAll(".model-card button");

    buttons.forEach((button, index) => {
        button.addEventListener("click", () => {
            switch (index) {
                case 0:
                    window.location.href = "911.html";
                    break;
                case 1:
                    window.location.href = "spyder.html";
                    break;
                case 2:
                    window.location.href = "taycan.html";
                    break;
                default:
                    alert("Page not found");
            }
        });
    });

    // Ensure "Back to Home" buttons work correctly
    const backToHome = document.querySelector('nav a[href="porsche.html"]');
    if (backToHome) {
        backToHome.addEventListener("click", (e) => {
            e.preventDefault();
            window.location.href = "porsche.html";
        });
    }

    // Improved smooth scrolling for internal links
    const navbarLinks = document.querySelectorAll('nav a');

    navbarLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');

            // Handle external links
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

    // Auto-scroll if there's a hash in the URL (e.g., #contact)
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

// Aktivera mjuk scrollning i hela dokumentet
document.documentElement.style.scrollBehavior = 'smooth';
