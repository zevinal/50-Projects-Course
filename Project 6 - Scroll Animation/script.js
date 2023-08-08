const contentBox = document.querySelectorAll('.box')

window.addEventListener('scroll', boxes)

function boxes() {
    const trigger = window.innerHeight / 5 * 4

    contentBox.forEach(box => {
        const boxTop = box.getBoundingClientRect().top
        
        if(boxTop < trigger) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}