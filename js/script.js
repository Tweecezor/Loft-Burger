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
//слайдер первая попытка
var slider_width = document.querySelector('.burger-slider__item').offsetWidth;

var slider_margin_right = parseInt(getComputedStyle(document.querySelector('.burger-slider__item'), true).marginRight);
console.log(slider_margin_right);
var step = slider_width + slider_margin_right;
var slider_length = document.querySelectorAll('.burger-slider__item').length;
var maxRight = step*slider_length;
var slider_list = document.querySelector('.burger-slider__list');
console.log(slider_list);
var left = document.querySelector('.left-arrow');
var right = document.querySelector('.right-arrow');
let currentRight = 0;
slider_list.style.right = currentRight;

right.addEventListener("click", function(e) {
    e.preventDefault();
    console.log('клик по правой');
    if (currentRight < maxRight) {
        console.log(currentRight);
      currentRight += step;
       console.log(currentRight);
      slider_list.style.right = currentRight + "px";
    }
    if(currentRight==maxRight){
        currentRight = 0;
        console.log(currentRight);
       slider_list.style.right = currentRight + "px";
    }
  });

left.addEventListener('click',function(e){
    e.preventDefault();
    console.log('клик по левой');
    if (currentRight >= 0){
        currentRight -= step;
        slider_list.style.right = currentRight + "px";
    }
    if(currentRight<0){
        currentRight = maxRight - step;
        console.log(currentRight);
       slider_list.style.right = currentRight + "px";
    }
})
console.log(left);
console.log(right);
// const slider = document.querySelector('.burger-slider__content_list'),
//       slider_item = document.querySelectorAll('.burger-slider__content_item'),
//       slider_length = slider_item.length;
// slider.addEventListener('click',function(){
//     for(let i=0; i < slider_length; i++){
//         slider_item[i].classList.remove('burger-slider__content_item--active');
//     }
//     for(let i=0; i < slider_length; i++){
//         slider_item[i].addEventListener('click',function(e){
//             e.preventDefault();
//             e.stopPropagation();
//             if(slider_item[i].classList.contains('burger-slider__content_item--active')){
//                 slider_item[i].classList.remove('burger-slider__content_item--active');
//             } else{
//                 for(let i=0; i < menu_length; i++){
//                     slider_item[i].classList.remove('burger-slider__content_item--active');
//                 }
//                 slider_item[i].classList.add('burger-slider__content_item--active');
//             }
//         });
//     }
// });

const reviews = document.querySelector('.reviews__list'),
      reviews_item = document.querySelector(".reviews__item"),
      reviews_modal = document.querySelector('.reviews-modal'),
      reviews_text = document.querySelector('.reviews-modal__content'),
      reviews_modal_close = document.querySelector('.reviews-modal__close');
console.log(reviews);
console.log(reviews_item);
console.log(reviews_modal);
console.log(reviews_text);
reviews.addEventListener('click', e => {
    let elem = e.target;
    console.log(elem);
    if(elem.tagName === "BUTTON"){
        console.log('jntkxtyj децствие по уполчанию');
        reviews_modal.style.display = 'block';
        let modal_txt = elem.previousElementSibling;
        console.log(modal_txt);
        console.log(modal_txt.children[1]);
        reviews_text.innerHTML = modal_txt.innerHTML;
    }
})
reviews_modal_close.addEventListener('click', function(){
    reviews_modal.style.display = 'none';
})
document.addEventListener('keyup', function(e){
    if(e.keyCode===27){   
        reviews_modal.style.display = 'none';
    }
})
