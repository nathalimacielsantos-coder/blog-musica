document.addEventListener('DOMContentLoaded', () => {

  // 1. Menu Mobile Toggle
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');

  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });

  // 2. Filtro de Pesquisa de Posts em Tempo Real
  const searchInput = document.getElementById('searchInput');
  const cards = document.querySelectorAll('.card');

  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();

    cards.forEach(card => {
      const title = card.querySelector('h2').textContent.toLowerCase();
      const text = card.querySelector('p').textContent.toLowerCase();

      if (title.includes(query) || text.includes(query)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });

});