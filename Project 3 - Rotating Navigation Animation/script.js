const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector('.container')
const mac = document.querySelector('.mac')

open.addEventListener('click', () => {
    container.classList.add('show-nav');
    mac.classList.add('visible')
})

close.addEventListener('click', () => {
    container.classList.remove('show-nav');
    mac.classList.remove('visible')
})