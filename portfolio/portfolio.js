const container = document.querySelector(".container")
const btnPop = document.querySelector(".btnLogin-popup")
const registerLink = document.querySelector(".register-link")
const loginLink = document.querySelector(".login-link")
const closeIcon = document.querySelector(".icon-close")
const containerBox = document.querySelector(".container-box")
const elements = document.querySelector(".section-content")
const header = document.querySelector("#header")
const slider = document.querySelectorAll(".slider")
const a = document.querySelectorAll(".a")


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