const loadText = document.querySelector('.text')
const background = document.querySelector('.bg')

let load = 0

let int = setInterval(blur, 30)

function blur() {
    load++

    if(load > 99) {
        clearInterval(int)
    }

    loadText.innerText = `${load}%`

    if(load == 100) {
        loadText.innerText = 'Loading Complete'
        loadText.classList.remove('loading-text')
        loadText.classList.add('complete-text')
    }
    background.style.filter = `blur(${opacityScale(load, 0, 100, 50, 0)}px)`
}

const opacityScale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}