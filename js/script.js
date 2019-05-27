//Гамбургер меню открытие и закрытие 
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

//Акордеон меню Наша команда
const team = document.querySelector('.team__list'),
      team_item = document.querySelectorAll('.personal'),
      personal = document.querySelectorAll('.personal__name');
      team_length = team_item.length;
team.addEventListener('click',function(){
    for(let i =0;i<team_length;i++){
        team_item[i].classList.remove('personal--active');
    }
    for(let i = 0; i<team_length; i++){
        personal[i].addEventListener('click',function(e){
            e.stopPropagation();
            e.preventDefault();
            if(team_item[i].classList.contains('personal--active')){
                team_item[i].classList.remove('personal--active');
            } else{
                for(let i =0; i< team_length;i++){
                    team_item[i].classList.remove('personal--active');
                }
                team_item[i].classList.add('personal--active');
            }
        })
    }
       
})
//Акордеон Меню
const menu = document.querySelector('.menu__nav'),
      menu_item = document.querySelectorAll('.assortment'),
      menu_length = menu_item.length;
menu.addEventListener('click',function(){
    for(let i=0; i < menu_length; i++){
        menu_item[i].classList.remove('assortment--active');
    }
    for(let i=0; i < menu_length; i++){
        menu_item[i].addEventListener('click',function(e){
            e.preventDefault();
            e.stopPropagation();
            if(menu_item[i].classList.contains('assortment--active')){
                menu_item[i].classList.remove('assortment--active');
            } else{
                for(let i=0; i < menu_length; i++){
                    menu_item[i].classList.remove('assortment--active');
                }
                menu_item[i].classList.add('assortment--active');
            }
        })
    }
})
