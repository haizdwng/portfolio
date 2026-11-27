const menu = document.getElementById('menu');
const links = document.getElementById('links');

const closeMenu = () => {
  links.classList.remove('opened');
  menu.setAttribute('aria-expanded', 'false');
};

menu.addEventListener('click', () => {
  const opened = links.classList.toggle('opened');
  menu.setAttribute('aria-expanded', opened);
});

links.addEventListener('click', (event) => {
  if (event.target.closest('a')) closeMenu();
});

document.addEventListener('click', closeMenu());