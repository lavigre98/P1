import confetti from 'canvas-confetti';

// Es llança automàticament en carregar el script
confetti({
    particleCount: 150,
    spread: 70,
    origin: { y: 0.6 }
});

// Busquem el títol que ja tenim a l'HTML
const titol = document.getElementById('titolQueCanviaDeColor');

if (titol) {
    titol.addEventListener('click', () => {
        // Al fer clic, el títol canvia de color
        titol.style.color = '#e67e22'; 
        console.log("Has clicat el títol!");
    });
}