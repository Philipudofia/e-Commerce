let nav =  document.querySelectorAll('.navLinks1')
let toogleBar = document.querySelector('#toogleBar')
let navLinks = document.querySelector('.navLinks')

function active() {
    for (let i = 0; i < nav.length; i++) {
        nav[i].addEventListener('click', function addActive() {
            navLinks.classList.remove('display')
        })
    }
    toogleBar.addEventListener('click',function () {
        navLinks.classList.toggle('display')

    })
    // do {
    //     toogleBar.innerHTML = '<i class="fas fa-close"></i>'
    // } while (navLinks.style.right = "0%");
}
active()

let closeBtn = document.querySelector('.closeBtnn')
let right2 = document.querySelector('.right2')
let right1 = document.querySelector('.right111')
let img = right1.querySelectorAll('img')
let c1 = right1.querySelectorAll('.c1')
let description = right2.querySelector(".description")
let appendedImg = right2.querySelector("#gallery")

for (let i = 0; i < img.length; i++) {
    const imgg = img[i];
    imgg.addEventListener('click',function() {
        appendedImg.src = imgg.src
        right1.style.transform = "scale(0)"
        right2.style.transform = "scale(1)"
    })
}
for (let b = 0; b < c1.length; b++) {
    const c11 = c1[b];
    let text = c11.querySelector('.text')
    c11.addEventListener('click', function () {
       description.innerHTML = text.innerHTML
    })
}
closeBtn.addEventListener('click',function (e) {
    e.preventDefault
    right2.style.transform = "scale(0)"
    right1.style.transform = "scale(1)"
})