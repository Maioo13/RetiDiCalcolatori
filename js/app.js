const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

// Aggiunge un event listener per il click sull'hamburger
hamburger.addEventListener('click', () => {
  // Aggiunge o rimuove la classe "show" al menu
  menu.classList.toggle('show');

  // Anima l'icona hamburger
  hamburger.classList.toggle('active');
});

function hidePreloader() {
  const preloader = document.getElementById('preloader');
  const mainContent = document.getElementById('main-content');

  // Nascondi il preloader
  preloader.style.display = 'none';

  // Mostra il contenuto principale
  mainContent.classList.remove('hidden');
}

// Aspetta un po' di tempo prima di mostrare il contenuto principale (es. 2 secondi)
window.onload = function() {
  setTimeout(hidePreloader, 1500); // 1500 millisecondi = 1,5 secondi
};
