// navbar toggle
const menuToggle = document.getElementById('menuToggle');
const navContainer = document.getElementById('navContainer');

function toggleMenu() {
    navContainer.classList.toggle('open');
    menuToggle.classList.toggle('open');
    document.body.style.overflow = navContainer.classList.contains('open') ? 'hidden' : '';
}

menuToggle.addEventListener('click', toggleMenu);

document.addEventListener('click', function(event) {
    if (!navContainer.contains(event.target) && event.target !== menuToggle && !menuToggle.contains(event.target)) {
        navContainer.classList.remove('open');
        menuToggle.classList.remove('open');
        document.body.style.overflow = '';
    }
});

// // prevent right clicks 
// document.addEventListener('contextmenu', function(event) {
//     event.preventDefault();
//   });