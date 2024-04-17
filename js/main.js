const clouds = [...document.querySelectorAll('.header-cloud')]
const boat = document.querySelector('.header-boat')

window.addEventListener('scroll',() => {

    clouds.forEach(cloud => {

        let speed = cloud.getAttribute('data-speed')
        let boatSpeed = boat.getAttribute('data-speed')

        cloud.style.transform = `translateX(${this.scrollY * speed}px)`
        boat.style.transform = `translateX(${this.scrollY * boatSpeed}px )`
    });
})

const title = document.querySelector('.header-title')

console.log(title)
const text = title.innerHTML
console.log(text)
title.innerHTML = null

function str (x = 0) {
    title.innerHTML += text[x]
    x++
    if(x < text.length) {
        setTimeout(() => {
            str(x)
        }, 200);
    }
}
str()