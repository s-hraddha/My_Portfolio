let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark')
    navbar.classList.toggle('active')
}

let sections = document.querySelectorAll('section')
let navlinks = document.querySelectorAll('header nav a')

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
                // document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        };

    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active')
};

ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay:200,
});

ScrollReveal().reveal('.home-content, heading', {origin:'top' });
ScrollReveal().reveal('.home-img, .service-container, .projects-box, .contact form', {origin:'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', {origin:'left' });
ScrollReveal().reveal('.home-content p, .about-content', {origin:'right' });

const typed = new Typed('#multiple-text',{
    strings: ['Frontend Developer','Backend Developer', 'Python Developer', 'Software Developer'],
    typeSpeed:70,
    backSpeed:70,
    backDelay:1000,
    loop:true,
});

function sendMail() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission
    
        // Validate form inputs (optional)
        let name = document.querySelector('input[name="user_name"]').value;
        let email = document.querySelector('input[name="user_email"]').value;
        let phone = document.querySelector('input[name="user_phone"]').value;
        let subject = document.querySelector('input[name="subject"]').value;
        let message = document.querySelector('textarea[name="message"]').value;
    
        if (!name || !email || !phone || !subject || !message) {
            alert('Please fill in all fields.');
            return;
        }
    
        // Send form data to EmailJS
        emailjs.sendForm('service_p8k3wzm', 'template_cifz2g4', this)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                alert('Email sent successfully!');
                document.getElementById('contact-form').reset(); // Clear the form after submission
            }, function(error) {
                console.log('FAILED...', error);
                alert('Failed to send email. Please try again.');
            });
    });
}
