const container = document.querySelector(".container")
const btnPop = document.querySelector(".btnLogin-popup")
const registerLink = document.querySelector(".register-link")
const loginLink = document.querySelector(".login-link")
const closeIcon = document.querySelector(".icon-close")
const containerBox = document.querySelector(".container-box")
const elements = document.querySelector(".section-content")
const header = document.querySelector("#header")
const toggle = document.querySelectorAll(".toggle")
const home_btn = document.querySelector("#home-btn")
var start = false;


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

/*******************************************************************************************/
// SERVICES DYNAMIC DISPLAY // 
/*******************************************************************************************/
window.onload = ()=>{
  if (document.body.scrollTop >= 100 || document.documentElement.scrollTop >= 100) {
    header.classList.add("height")
  } 
  else {
      header.classList.remove("height")
  }
}
toggle.forEach((e) => {
    e.addEventListener("mouseover", ()=>{
        e.children[0].classList.add('toggle')
        e.children[1].style.color = '#06b9f7'
    })
    e.addEventListener("mouseout", ()=>{
        e.children[0].classList.remove('toggle')
        e.children[1].style.color = '#162938'
    })
})
/*******************************************************************************************/
// END OF SERVICES DYNAMIC DISPLAY // 
/*******************************************************************************************/

/*******************************************************************************************/
// ACTIVE NAVIGATION LINK TRACKING ON SCROLL // 
/*******************************************************************************************/
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
/*******************************************************************************************/
// END OF ACTIVE NAVIGATION LINK TRACKING ON SCROLL // 
/*******************************************************************************************/

/*******************************************************************************************/
// PAGE SMOOTH SCROLLING // 
/*******************************************************************************************/

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
/*******************************************************************************************/
// END OF PAGE SMOOTH SCROLLING // 
/*******************************************************************************************/

/*******************************************************************************************/
// CONTACT ME SECTION AND FORM VALIDATION // 
/*******************************************************************************************/

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
/*******************************************************************************************/
// END OF CONTACT ME SECTION AND FORM VALIDATION // 
/*******************************************************************************************/

/*******************************************************************************************/
// HOMEPAGE DYNAMIC DISPLAY // 
/*******************************************************************************************/ 
var typed = new Typed(".multiple-text", {
  strings:["Software Engineer","Frontend Developer", "Backend Developer"],
  typeSpeed: 20,
  backSpeed: 50,
  backDelay: 2000,
  loop: true,
  smartBackspace: true,
  shuffle: true,
  fadeOut: true,
  fadeOutClass: "typed-fade-out",
  fadeOutDelay: 500
})
/*******************************************************************************************/
// END OF HOMEPAGE DYNAMIC DISPLAY // 
/*******************************************************************************************/ 

/*******************************************************************************************/
// ANIMATE ON SCROLL DYNAMIC DISPLAY// 
/*******************************************************************************************/ 

let sections = document.querySelectorAll('section');
let scrollToTopBtn = document.querySelector("#scrollToTopbtn")
window.onscroll = () => {
  if (document.body.scrollTop >= 100 || document.documentElement.scrollTop >= 100) {
    header.classList.add("height");
    scrollToTopBtn.classList.add("show")

  } else {
    header.classList.remove("height");
    scrollToTopBtn.classList.remove("show")
  }
scrollToTopBtn.addEventListener("click", (e)=>{
  e.preventDefault()
  window.scrollTo({ top: 0, behavior: 'smooth' });
})
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;

    if (top >= offset && top < offset + height) {
      sec.classList.add('show-animate');
    } else {
      sec.classList.remove('show-animate');
    }
  });
};
/*******************************************************************************************/
// END OF ANIMATE ON SCROLL DYNAMIC DISPLAY // 
/*******************************************************************************************/ 

/*******************************************************************************************/
// COUNTER // 
/*******************************************************************************************/ 

// Function to increment the counter value
function count(e) {
  var max = parseInt(e.dataset.max); // Get the maximum value from the data-max attribute
  var currentValue = parseInt(e.textContent); // Get the current value from the element's textContent

  var count = setInterval(() => {
    // Increment the current value
    currentValue++;
    e.textContent = currentValue;

    // Check if the current value has reached the maximum value
    if (currentValue == max) {
      clearInterval(count); // Stop the counter
    }
  }, 8000 / max); // Divide the animation duration (8000ms) by the maximum value to get a smooth increment
}

document.addEventListener('DOMContentLoaded', () => {
  let stat = document.querySelectorAll('.counter');
  stat.forEach((e) => count(e));
});

/*******************************************************************************************/
// END OF COUNTER // 
/*******************************************************************************************/ 

/*******************************************************************************************/
// SLIDER // 
/*******************************************************************************************/ 
var counter = 1;
var direction = 1; // 1 for forward, -1 for backward

setInterval(() => {
  document.getElementById('radio' + counter).checked = true;
  
  counter += direction;
  
  if (counter >= 4) {
    counter = 4;
    direction = -1; // Change direction to backward
  } else if (counter <= 1) {
    counter = 1;
    direction = 1; // Change direction to forward
  }
}, 4000);

/*******************************************************************************************/
// END OF SLIDER // 
/*******************************************************************************************/ 

/*******************************************************************************************/
// ICON TOGGLER // 
/*******************************************************************************************/ 
function toggleIconClass(event) {
  var icon = document.getElementById('icon');
  var navigation = document.querySelector('.navigation');
  
  icon.classList.toggle('bx-list-ul');
  icon.classList.toggle('bx-x');
  if (icon.classList.contains('bx-x')){
    navigation.classList.add('show')
  }
  else{
    navigation.classList.remove('show')
  }
}
/*******************************************************************************************/
// END OF ICON TOGGLER // 
/*******************************************************************************************/ 

// function updateViewportHeight() {
//   var viewport = document.querySelector("meta[name=viewport]");
//   viewport.setAttribute("content", viewport.content + ", height=" + window.innerHeight);
// }

// window.addEventListener("load", updateViewportHeight);
// window.addEventListener("resize", updateViewportHeight);

/*******************************************************************************************/
// PRELOADER // 
/*******************************************************************************************/ 
var counter = 1;
window.addEventListener('load', function() {
  var preloader = document.querySelector('.loader_bg');

  setTimeout(function() {
    preloader.style.display = 'none';
  }, 2000);
});
/*******************************************************************************************/
// END OF PRELOADER // 
/*******************************************************************************************/ 
