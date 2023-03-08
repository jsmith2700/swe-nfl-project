const openInfoButtons = document.querySelectorAll('[data-info-target')
const closeInfoButtons = document.querySelectorAll('[data-close-button')
const overlay = document.getElementById('overlay')

openInfoButtons.forEach(button => {
    button.addEventListener('click', () => {
        const info = document.querySelector(button.dataset.infoTarget)
        openInfo(info)
    })
})
closeInfoButtons.forEach(button => {
    button.addEventListener('click', () => {
        const info = button.closest('.info')
        closeInfo(info)
    })
})

function openInfo(info) { 
    if (info == null) return
    info.classList.add('active')
    overlay.classList.add('active')
}

function closeInfo(info) { 
    if (info == null) return
    info.classList.remove('active')
    overlay.classList.remove('active')
}