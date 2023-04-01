const openButton = document.querySelector('.openButton')
const closeButton = document.querySelector('.closeButton')
const overlay = document.querySelector('.modalOverlay')


openButton.addEventListener("click", function(){
    if (overlay.classList == ('modalOverlay')){
        overlay.classList.add('open')
    }

})

closeButton.addEventListener("click", function(){
    if (overlay.classList.contains('open')){
        overlay.classList.remove('open')
    }
    
})

// overlay.addEventListener("click", dunction(){
    
// })

