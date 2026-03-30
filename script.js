//Toggle icon navbar

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-mark');
    navbar.classList.toggle('active');
}
//Read more
let readMoreBtn = document.querySelector('.about-content .btn');
let dots = document.getElementById('dots');
let moreText = document.getElementById('more');
readMoreBtn.onclick = () => {
    if(dots.style.display === 'none'){
        dots.style.display = 'inline';
        readMoreBtn.innerHTML = 'Read more';
        moreText.style.display = 'none';
    }   
    else{
        dots.style.display = 'none';
        readMoreBtn.innerHTML = 'Read less';
        moreText.style.display = 'inline';
    }
}

//read more for services
let readMoreBtn2 = document.querySelector('.services-box .btn');
let readMoreBtnDesign = document.querySelector('.services-box:nth-child(2) .btn');
let readMoreBtnResponsive = document.querySelector('.services-box:nth-child(3) .btn');
let dots2 = document.getElementById('dots2');
let moreText2 = document.getElementById('more2');
let dotsDesign = document.getElementById('dots-design');
let moreDesign = document.getElementById('more-design');
let dotsResponsive = document.getElementById('dots-responsive');
let moreResponsive = document.getElementById('more-responsive');
readMoreBtn2.onclick = () => {
    if(dots2.style.display === 'none'){
        dots2.style.display = 'inline'; 
        readMoreBtn2.innerHTML = 'Read more';
        moreText2.style.display = 'none';
    }   
    else{
        dots2.style.display = 'none';
        readMoreBtn2.innerHTML = 'Read less';
        moreText2.style.display = 'inline';
    }
}
readMoreBtnDesign.onclick = () => {
    if(dotsDesign.style.display === 'none'){    
        dotsDesign.style.display = 'inline';
        readMoreBtnDesign.innerHTML = 'Read more';
        moreDesign.style.display = 'none';
    }       
    else{
        dotsDesign.style.display = 'none';
        readMoreBtnDesign.innerHTML = 'Read less';
        moreDesign.style.display = 'inline';
    }
}
readMoreBtnResponsive.onclick = () => {
    if(dotsResponsive.style.display === 'none'){    
        dotsResponsive.style.display = 'inline';
        readMoreBtnResponsive.innerHTML = 'Read more';
        moreResponsive.style.display = 'none';
    }
    else{
        dotsResponsive.style.display = 'none';
        readMoreBtnResponsive.innerHTML = 'Read less';
        moreResponsive.style.display = 'inline';
    }
}
const form = document.getElementById("contactForm");
const msg = document.getElementById("msg");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    // Get values
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let messageText = document.getElementById("message").value.trim();

    // Validation
    if (name === "" || email === "" || messageText === "") {
        msg.innerHTML = "❌ Please fill all required fields!";
        msg.style.color = "red";
        return;
    }

    // Email validation
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        msg.innerHTML = "❌ Enter valid email!";
        msg.style.color = "red";
        return;
    }

    // Success
    msg.innerHTML = "✅ Message submitted successfully!";
    msg.style.color = "green";

    // Reset form
    form.reset();

    // Remove message after 4 seconds
    setTimeout(() => {
        msg.innerHTML = "";
    }, 4000);
});
//Remove toggle icon and navbar when click navbar link (scroll)
let navLink = document.querySelectorAll('header nav a');    
navLink.forEach(n => n.onclick = () => {
    menuIcon.classList.remove('fa-mark');
    navbar.classList.remove('active');
});


//Scroll sections active link

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    //Sticky navbar
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
    //Remove toggle icon and navbar when click navbar link (scroll)
    menuIcon.classList.remove('fa-mark');
    navbar.classList.remove('active');
}
//Scroll reveal

ScrollReveal({  
    //reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});
ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });
//Typed js
const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer','Web Developer'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true
});
