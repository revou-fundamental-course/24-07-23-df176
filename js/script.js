// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.menu');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


// scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('navbar nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            //active navbar links
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('navbar nav a[href*=' + id + ']').classList.add('active');
            });
            //active sections for animation on scroll
            sec.classList.add('show-animate');
        }
        // if want to use animation that repeats on scroll use this
        sec.classList.remove('show-animate');
    });


    // sticky navbar
    let navbar = document.querySelector('navbar');
    navbar.classList.toggle('sticky', window.scrollY > 100);


    // remove toggle icon and navbar when click navbar links (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}

// image modal
const allGalleryItem = document.querySelectorAll('.gallery-item');
const imgModalDiv = document.getElementById('img-modal-box');
const modalCloseBtn = document.getElementById('modal-close-btn');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');
let imgIndex = 0;

allGalleryItem.forEach((galleryItem) => {
    galleryItem.addEventListener('click', () => {
        imgModalDiv.style.display = "block";
        let imgSrc = galleryItem.querySelector('img').src;
        imgIndex = parseInt(imgSrc.split("-")[1].substring(0, 1));
        showImageContent(imgIndex);
    })

    modalCloseBtn.addEventListener('click', () => {
        imgModalDiv.style.display = "none";
    })
});





document.getElementById("contactForm").onsubmit = function(event) {
    event.preventDefault();
    validateForm();
};

function validateForm() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const destination = document.getElementById("destination").value;

    // Reset error messages
    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("destinationError").textContent = "";

    let isValid = true;

    if (name === "") {
        document.getElementById("nameError").textContent = "Harap masukkan nama";
        isValid = false;
    }

    if (email === "") {
        document.getElementById("emailError").textContent = "Harap masukkan email";
        isValid = false;
    }

    if (destination === "") {
        document.getElementById("destinationError").textContent = "Harap masukkan destinasi";
        isValid = false;
    }
}


    function validateForm() {
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const destination = document.getElementById("destination").value;
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Reset error messages
        document.getElementById("nameError").textContent = "";
        document.getElementById("emailError").textContent = "";
        document.getElementById("destinationError").textContent = "";

        let isValid = true;

        if (name === "") {
            document.getElementById("nameError").textContent = "Harap masukkan nama";
            isValid = false;
        } else if (!/^[a-zA-Z ]+$/.test(name)) {
            document.getElementById("nameError").textContent = "Nama tidak dapat menggunakan angka";
            isValid = false;
        }

        if (email === "") {
            document.getElementById("emailError").textContent = "Harap masukkan email";
            isValid = false;
        } else if (!emailPattern.test(email)) {
            document.getElementById("emailError").textContent = "Harap masukkan email yang benar";
            isValid = false;
        }

        if (destination === "") {
            document.getElementById("destinationError").textContent = "Harap masukkan destinasi";
            isValid = false;
        }
    }
