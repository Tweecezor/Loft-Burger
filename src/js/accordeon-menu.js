
//Акордеон Меню
(function(){
const menu = document.querySelector('.menu__nav'),
      menu_item = document.querySelectorAll('.assortment'),
      menu_length = menu_item.length;
const fullmenu = document.querySelector('.menu');
menu.addEventListener('click',function(){
    for(let i=0; i < menu_length; i++){
        menu_item[i].classList.remove('assortment--active');
    }
    for(let i=0; i < menu_length; i++){
        menu_item[i].addEventListener('click',function(e){
            e.preventDefault();
            e.stopPropagation();
            console.log(i);
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
fullmenu.addEventListener('click',function(){
    for(let i=0; i < menu_length; i++){
        menu_item[i].classList.remove('assortment--active');
    }
})
})();