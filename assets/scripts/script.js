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

// prevent right clicks 
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

$(document).ready(function(){
    $('.logo-carousel').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        arrows: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
});


// form <script>
function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}


        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (validateForm()) {
                var formData = new FormData(this);
                
                fetch('process_form.php', {
                    method: 'POST',
                    body: formData
                })
                .then(response => response.json())
                .then(data => {
                    if (data.success) {
                        showMessage('success', '<i class="fas fa-check-circle"></i>' + data.message);
                        document.getElementById('contactForm').reset();
                    } else {
                        showMessage('error', '<i class="fas fa-exclamation-circle"></i>' + data.message);
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                    showMessage('error', '<i class="fas fa-exclamation-circle"></i>An error occurred. Please try again later.');
                });
            }
        });

        // form Validation
        function validateForm() {
            let isValid = true;
            const name = document.querySelector('input[name="name"]');
            const phone = document.querySelector('input[name="phone"]');
            const email = document.querySelector('input[name="email"]');
            const message = document.querySelector('textarea[name="message"]');

            // Name validation
            if (name.value.trim() === '') {
                showError(name, 'nameError', 'Name is required');
                isValid = false;
            } else {
                clearError(name, 'nameError');
            }

            // Phone validation
            if (phone.value.trim() === '') {
                showError(phone, 'phoneError', 'Phone number is required');
                isValid = false;
            } else if (!/^\d{10}$/.test(phone.value.trim())) {
                showError(phone, 'phoneError', 'Please enter a valid 10-digit phone number');
                isValid = false;
            } else {
                clearError(phone, 'phoneError');
            }

            // Email validation
            if (email.value.trim() === '') {
                showError(email, 'emailError', 'Email is required');
                isValid = false;
            } else if (!isValidEmail(email.value)) {
                showError(email, 'emailError', 'Please enter a valid email address');
                isValid = false;
            } else {
                clearError(email, 'emailError');
            }

            // Message validation
            if (message.value.trim() === '') {
                showError(message, 'messageError', 'Message is required');
                isValid = false;
            } else if (message.value.trim().length < 10) {
                showError(message, 'messageError', 'Your message seems too short. Please provide more details.');
                isValid = false;
            } else {
                clearError(message, 'messageError');
            }

            return isValid;
        }

        function showError(input, errorId, errorMessage) {
            input.style.borderColor = '#dc3545';
            document.getElementById(errorId).textContent = errorMessage;
        }

        function clearError(input, errorId) {
            input.style.borderColor = '';
            document.getElementById(errorId).textContent = '';
        }

        function showMessage(type, html) {
            const messageContainer = document.getElementById('messageContainer');
            messageContainer.innerHTML = html;
            messageContainer.className = `message ${type} visible`;
            
            setTimeout(function() {
                messageContainer.classList.remove('visible');
            }, 5000);  // Hide after 5 seconds
        }

        // footer
        const currentYear = new Date().getFullYear();
        // Insert the year into the span
        document.getElementById('current-year').textContent = currentYear;