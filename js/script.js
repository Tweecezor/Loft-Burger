var hamburger_close = document.getElementById('close-hamburger');
var hamburger_open = document.getElementById('hamburger-menu-open');
var hamburger_menu = document.getElementById('hamburger-menu');
hamburger_open.addEventListener('click',function(){
    hamburger_menu.classList.add('hamburger-menu-visible');
    document.body.classList.add('no-scroll');
})
hamburger_close.addEventListener('click',function(){
    hamburger_menu.classList.remove('hamburger-menu-visible');
    document.body.classList.remove('no-scroll');
})