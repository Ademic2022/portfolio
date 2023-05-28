const container = document.querySelector(".container")
const btnPop = document.querySelector(".btnLogin-popup")
const registerLink = document.querySelector(".register-link")
const loginLink = document.querySelector(".login-link")
const closeIcon = document.querySelector(".icon-close")
const containerBox = document.querySelector(".container-box")
const elements = document.querySelector(".section-content")
const header = document.querySelector("#header")
const slider = document.querySelectorAll(".slider")
const home_btn = document.querySelector("#home-btn")


registerLink.addEventListener("click", ()=> {
    container.classList.add("active")
})
loginLink.addEventListener("click", ()=> {
    container.classList.remove("active")
})
btnPop.addEventListener("click", ()=> {
    container.classList.add("active-popup")
    containerBox.style.display = 'block'
})
closeIcon.addEventListener("click", ()=> {
    container.classList.remove("active-popup")
    containerBox.style.display = 'none'
})



window.onscroll = function () { 
    if (document.body.scrollTop >= 100 || document.documentElement.scrollTop >= 100) {
        header.classList.add("height")
        // home_btn.classList.add('active')
    } 
    else {
        header.classList.remove("height")
    }
};
window.onload = ()=>{
    header.classList.remove("height")
}
slider.forEach((e) => {
    e.addEventListener("mouseover", ()=>{
        e.children[0].classList.add('slides')
        e.children[1].style.color = '#06b9f7'
    })
    e.addEventListener("mouseout", ()=>{
        e.children[0].classList.remove('slides')
        e.children[1].style.color = '#162938'
    })
})
// Active navigation link tracking on scroll
window.addEventListener('scroll', function() {
    var navButtons = document.querySelectorAll('.nav-btn');
    var sections = document.querySelectorAll('section');
  
    sections.forEach(function(section, index) {
      var rect = section.getBoundingClientRect();
      if ((rect.top <= 1 && rect.top <= window.innerHeight) || window.scrollY === 0) {
        navButtons.forEach(function(btn) {
          btn.classList.remove('active');
        });
        if (navButtons[index]) {
          navButtons[index].classList.add('active');
        }
      }
    });
  });
  
// Smooth scrolling for navigation links
var navLinks = document.querySelectorAll('a.nav-btn');

navLinks.forEach(function(link) {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    var target = document.querySelector(this.getAttribute('href'));
    if (target.getAttribute('id') === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
