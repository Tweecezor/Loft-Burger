(function(){    
    //слайдер первая попытка
var slider_width = document.querySelector('.burger-slider__item').offsetWidth;
var slider_margin_right = parseInt(getComputedStyle(document.querySelector('.burger-slider__item'), true).marginRight);
//console.log(slider_margin_right);
var step = slider_width + slider_margin_right;
var slider_length = document.querySelectorAll('.burger-slider__item').length;
var maxRight = step*slider_length;
var slider_list = document.querySelector('.burger-slider__list');
//console.log(slider_list);
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
//console.log(left);
//console.log(right);

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


// var text = document.querySelector('.reviews__text');
// var txt = getComputedStyle(text);

// console.log(txt.display);
// if(txt.display=='none'){
//    console.log(true);
// }
// text.style.display = 'block';
// console.log(txt.display);












})();


