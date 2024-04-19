const clouds = [...document.querySelectorAll('.header-cloud')]
const boat = document.querySelector('.header-boat')

window.addEventListener('scroll', () => {

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

function str(x = 0) {
    title.innerHTML += text[x]
    x++
    if (x < text.length) {
        setTimeout(() => {
            str(x)
        }, 200);
    }
}
str()

// parallax

const parallaxBox = document.querySelector('.parallax-box')
const parallaxBall = [...document.querySelectorAll('.parallax-ball')]

parallaxBox.addEventListener("mousemove", (event) => {
    parallaxBall.forEach(balls => {
        const speed = balls.getAttribute('data-speed')
        const x = ((window.innerWidth - event.pageX) * speed) / 10
        const y = ((window.innerHeight - event.pageY) * speed) / 10

        balls.style.transform = `translate(${x}px,${y}px)`
    });
})

// Timer 

const timerNum = [...document.querySelectorAll('.timer-num')]
const timer = document.querySelector('.timer')

window.addEventListener('scroll',function scrollTimer(){

    if(this.scrollY >= timer.offsetTop - timer.offsetHeight){
        timer.style.background = 'red'
        timerStop()
        this.removeEventListener('scroll',scrollTimer)
    }
})

function timerStop () {
    for(let i = 0; i < timerNum.length; i++){
        let count = timerNum[i].getAttribute('data-num')

        function calcCount (k = 0) {
            timerNum[i].innerHTML = k
            k++
            if(k <= count){
                setTimeout(() =>{
                    calcCount(k)
                }, 5);
            }
        }
        calcCount()
    }
}