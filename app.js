let menu = document.querySelector('nav ul')
let hamburger= document.querySelector('nav .mobile')
hamburger.addEvenetListener('click',function()
{
    menu.classList.toggle('show')
})