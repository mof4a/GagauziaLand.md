const menu = document.querySelector('.menu');
const bars = document.querySelectorAll('.bar');

menu.addEventListener('click', function() {
  bars.forEach(bar => {
    bar.classList.toggle('rotated');
  });
});
function toggleMenu() {
    const menu = document.querySelector('.side-menu');
    const menuIcon = document.querySelector('.menu');
    menu.classList.toggle('open');
    menuIcon.classList.toggle('rotated');
}
document.querySelector('.menu').addEventListener('click', toggleMenu);


