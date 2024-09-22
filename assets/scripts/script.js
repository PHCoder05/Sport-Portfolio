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
// Show button when user scrolls down 20px from the top of the document
window.onscroll = function() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    document.getElementById("scrollTopBtn").classList.remove("d-none");
  } else {
    document.getElementById("scrollTopBtn").classList.add("d-none");
  }
};

// Scroll to the top of the document
function scrollToTop() {
  window.scrollTo({top: 0, behavior: 'smooth'});
}
// scroll review
$(document).ready(function(){
    $('.testimonials-slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});