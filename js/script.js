const hamburger= document.querySelector('.hamburger')
const menu= document.querySelector('#menu')

hamburger.addEventListener('click',function(){
    hamburger.classList.toggle('open')
    
    menu.classList.toggle('hidden')
})