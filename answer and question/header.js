//nav bar btn
let btn = document.querySelector('.nav-mobile i')
let btnClose = document.querySelector('#for-header i')
let navBar = document.getElementById('head')

btn.onclick = ()=>{
    console.log('good');
    navBar.style.clipPath = `circle(686px at 0% 0%)`
}
btnClose.onclick = ()=>{
    navBar.style.clipPath = `circle(0px at 0% 0%)`
}