// JavaScript för att hantera knappklick
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
     // Make "Back to home" buttons work
     const backToHome = document.querySelector("header p");
     if (backToHome) {
         backToHome.addEventListener("click", () => {
             window.location.href = "porsche.html";
         });
     }
 });


