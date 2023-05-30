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

// Get the input elements, error message elements, and submit button
const inputs = document.querySelectorAll('.inputs');
const errorMessages = document.querySelectorAll('.error-message');
const submitButton = document.querySelector('.submit-button');

// Regular expression pattern for email validation
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Function to check if there are any error messages displayed
function checkErrors() {
  for (let i = 0; i < errorMessages.length; i++) {
    if (errorMessages[i].style.display === 'block') {
      return true; // Error message found, return true
    }
  }
  return false; // No error messages found, return false
}

// Function to check if all inputs are valid
function checkValidity() {
  let emailValid = true;

  inputs.forEach((input, index) => {
    if (input.value.trim() === '') {
      errorMessages[index].style.display = 'block';
    } else if (input.type === 'email' && !emailPattern.test(input.value.trim())) {
      errorMessages[index].style.display = 'block';
      emailValid = false;
    } else {
      errorMessages[index].style.display = 'none';
    }
  });

  return emailValid && !checkErrors();
}

// Add event listener to each input
inputs.forEach((input, index) => {
  input.addEventListener('blur', function() {
    if (!checkValidity()) {
      submitButton.disabled = true; // Disable the submit button
      submitButton.classList.remove('enabled')
    } else {
      submitButton.disabled = false; // Enable the submit button
      submitButton.classList.add('enabled')
    }
  });

  input.addEventListener('input', function() {
    if (input.value.trim() !== '') {
      errorMessages[index].style.display = 'none';
    }
    if (!checkValidity()) {
      submitButton.disabled = true; // Disable the submit button
      submitButton.classList.remove('enabled')
    } else {
      submitButton.disabled = false; // Enable the submit button
      submitButton.classList.add('enabled')

    }
  });
});
