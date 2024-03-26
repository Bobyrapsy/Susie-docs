const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');
const time = document.querySelector('#time');
const navbar = document.querySelector('.nav-container');
const secondSection = document.querySelector('.second');

burger.addEventListener('click', () => {
    if (menu.classList.contains('hidden')){
        menu.classList.remove('hidden');
    } else {
        menu.classList.add('hidden');
    }
});

burger.addEventListener('click', () => {
    if (time.classList.contains('hidden')){
        time.classList.remove('hidden');
    } else {
        time.classList.add('hidden');
    }
});


//Mini Scroll Start

let scrollContainer = document.querySelector(".slide-div");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");
 
nextBtn.addEventListener("click", ()=>{
   scrollContainer.style.scrollBehavior = "smooth";
   scrollContainer.scrollLeft += 450;
});

backBtn.addEventListener("click", ()=>{
   scrollContainer.style.scrollBehavior = "smooth";
   scrollContainer.scrollLeft -= 450;
});

//Mini Scroll End

window.addEventListener('scroll', function () {
    const offset = window.scrollY;
    
    // Move the second section down as you scroll
    secondSection.style.transform = `translateY(${offset * -1.7}px)`;

    // Check if the navbar should drop down
    if (offset > navbar.offsetHeight) {
        navbar.classList.add('fixed-navbar');
    } else {
        navbar.classList.remove('fixed-navbar');
    }
});


//scroll reveal
ScrollReveal({
    reset: true,
    distance: '120px',
    duration: 2500,
    delay: 100
 });

 ScrollReveal().reveal('.first .box-1', {delay:500, origin: 'left'});
 ScrollReveal().reveal('.first .box-2', {delay:700, origin: 'bottom'});
 ScrollReveal().reveal('.second .h1', {delay:200, origin: 'left'});
 ScrollReveal().reveal('.second .sp-one', {delay:200, origin: 'bottom'});


