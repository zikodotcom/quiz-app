const hamburg = document.querySelector('.nav-mobile i')
const navbar =document.querySelector('#for-header')
const close =document.querySelector('#for-header i')
hamburg.addEventListener('click', ()=>{
    hamburg.style.display = 'none'
    navbar.style.display = 'flex'
    navbar.style.width = '100%'
})
close.addEventListener('click', ()=>{
    hamburg.style.display = 'block'
    navbar.style.display = 'none'
    navbar.style.width = '0%'
})