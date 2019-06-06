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
const fullmenu = document.querySelector('.menu');
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
fullmenu.addEventListener('click',function(){
    for(let i=0; i < menu_length; i++){
        menu_item[i].classList.remove('assortment--active');
    }
})
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











const reviews = document.querySelector('.reviews__list'),
      reviews_item = document.querySelector(".reviews__item"),
      reviews_modal = document.querySelector('.reviews-modal'),
      reviews_text = document.querySelector('.reviews-modal__content'),
      reviews_modal_close = document.querySelector('.reviews-modal__close');
// console.log(reviews);
// console.log(reviews_item);
// console.log(reviews_modal);
// console.log(reviews_text);
reviews.addEventListener('click', e => {
    let elem = e.target;
   //console.log(elem);
    if(elem.tagName === "BUTTON"){
        //console.log('jntkxtyj децствие по уполчанию');
        var text = document.querySelectorAll('.reviews__text');
        var txt = getComputedStyle(text[0]);
        if(txt.display=='none'){
            for(let i =0; i< text.length;i++){
                text[i].style.display = 'block';
            }
            console.log(txt.display);
            reviews_modal.style.display = 'block';
            let modal_txt = elem.previousElementSibling;
           // console.log(modal_txt);
           // console.log(modal_txt.children[1]);
            reviews_text.innerHTML = modal_txt.innerHTML;
            for(let i =0; i< text.length;i++){
                text[i].style.display = 'none';
            }
            document.body.classList.add('no-scroll');
            console.log(txt.display);
        } else{    
            reviews_modal.style.display = 'block';
            let modal_txt = elem.previousElementSibling;
        // console.log(modal_txt);
        // console.log(modal_txt.children[1]);
            reviews_text.innerHTML = modal_txt.innerHTML;
            document.body.classList.add('no-scroll');
        }
    }
})
reviews_modal_close.addEventListener('click', function(){
    reviews_modal.style.display = 'none';
    document.body.classList.remove('no-scroll');
})
document.addEventListener('keyup', function(e){
    if(e.keyCode===27){   
        reviews_modal.style.display = 'none';
        document.body.classList.remove('no-scroll');
    }
})

//валидность формы 
const phone = document.querySelector('.phone-mask');
phone.addEventListener('keydown',function(e){
    let isDigit = false;
    let isControl = false;
    let isPlus = false;
    let isDash = false;
    if(e.key>=0||e.key<=9){
        isDigit = true;
    }
    if(e.key == "-"){
        isDash = true;
    }
    if(e.key == "+"){
        isPlus = true;
    }
    if(e.key == "ArrowLeft"||e.key == "ArrowRight"||e.key == "Backspace"){
        isDash = true;
    }
    if(!isControl&&!isDash&&!isDigit&&!isPlus){
        e.preventDefault();
    }
})
const room = document.querySelector('.room');
room.addEventListener('keydown',function(e){
    let isDigit = false;
    let isControl = false;
    if(e.key>=0||e.key<=9){
        isDigit = true;
    }
    if(e.key == "ArrowLeft"||e.key == "ArrowRight"||e.key == "Backspace"){
        isControl = true;
    }
    if(!isControl&&!isDigit){
        e.preventDefault();
    }
})
const floor = document.querySelector('.floor');
floor.addEventListener('keydown',function(e){
    let isDigit = false;
    let isControl = false;
    if(e.key>=0||e.key<=9){
        isDigit = true;
    }
    if(e.key == "ArrowLeft"||e.key == "ArrowRight"||e.key == "Backspace"){
        isControl = true;
    }
    if(!isControl&&!isDigit){
        e.preventDefault();
    }
})

const myForm = document.querySelector('#order-form');
//console.log(myForm.elements);
const send = document.querySelector('.order__form-button');
//console.log(myForm.elements.name);
//console.log(send);
const delivery_modal_content = document.querySelector('.delivery-modal__content');
const delivery_modal = document.querySelector('.delivery-modal');
// const delivery_close = document.querySelector('.delivery-modal-close');
const delivery_close = document.querySelector('.delivery-modal-close');
send.addEventListener('click',function(e){
    e.preventDefault();
    if(validateForm(myForm)){
        let url ='https://webdev-api.loftschool.com/sendmail';
        let formData = new FormData();
        formData.append('name',myForm.elements.name.value);
        formData.append('phone',myForm.elements.phone.value);
        formData.append('comment',myForm.elements.comment.value);
        formData.append('to','your@mail.ru');
        console.log(formData.getAll);
        const xhr = new XMLHttpRequest();
        xhr.responseType = 'json';
        xhr.open("POST",url);
        xhr.send(formData);
        xhr.addEventListener('load',function(){
            if(xhr.response.status == 1){
                delivery_modal_content.innerHTML = 'Сообщениие отправлено';
            } else{
                delivery_modal_content.innerHTML = 'Ошибка отправления';
            }
            delivery_modal.style.display = 'block';
            document.body.classList.add('no-scroll');
        })
    }
})
delivery_close.addEventListener('click',function(e){
    e.preventDefault();
    delivery_modal.style.display = 'none';
    document.body.classList.remove('no-scroll');
})
document.addEventListener('keyup', function(e){
    if(e.keyCode===27){   
        delivery_modal.style.display = 'none';
        document.body.classList.remove('no-scroll');
    }
})
function validateForm(form){
    let valid = true;
    if(!validateField(form.elements.name)){
        valid = false;
    }
    if(!validateField(form.elements.phone)){
        valid = false;
    }
    if(!validateField(form.elements.street)){
        valid = false;
    }
    if(!validateField(form.elements.comment)){
        valid = false;
    }
    let radio = document.querySelectorAll('.order__radio-elem');
    let radioFake = document.querySelectorAll('.order__radio-fake');
    let i =0;
        if(!radio[i].checked && !radio[i+1].checked){
            valid = false;
            for(let j=0;j<radioFake.length; j++){
                radioFake[j].style.border = "0.0625rem solid red";
            }
        }
        else{
            for(let j=0;j<radioFake.length; j++){
                radioFake[j].style.border = "0.0625rem solid #d1cfcb";
            }
        }
    return valid;
}
function validateField(field){
  
    if(!field.checkValidity()){
         if(field.name=='room'){
            console.log('комната не валидна');
        }
        field.style.border = "0.0625rem solid red";
        return false;
    } else{
        field.style.border = "0.0625rem solid #d1cfcb";
        return true;
    }
}

// const section = document.querySelectorAll('.section');
// let index = 0;
// document.addEventListener('wheel',function(e){
//     e.preventDefault();
//     index++;
//     section.forEach((sections,i) => {
//         if(i===index){
//             sections.scrollIntoView({behavior:'smooth'});
//         }
//     })
// })
// document.addEventListener('wheel',function(e){
//     console.log(e.deltaY);
// })

var countwheel = 0;

$(function(){
    var generateDots = function(){
        $('.section').each(function(){
            var dot = $('<li>',{
                attr : {
                    class: 'change__item '
                },
                html: '<a href="#" class="change__link"></a>'
            })
            $('.change__list').append(dot);

        })
    }
    generateDots();
    $('.change__item').first().addClass('change__item-active')
    //let scroll = true;
    $(document).on('wheel',function(e){
        e.preventDefault(); 
        e.stopPropagation();
        console.log(e.originalEvent.deltaY);
        let direction = e.originalEvent.deltaY;
        let reqItem;
        let container = $('.onepage-slider');
        let items = container.find('.section');
        let currentItem = items.filter('.section--active');
        let currentDotIndex = currentItem.index();
        let currentDot = $('.change__item').eq(currentDotIndex);
        console.log(currentDot);
        if(direction > 0){
             reqItem = currentItem.next();
             reqDot = currentDot.next();
             console.log(reqDot);
        } else{
             reqItem = currentItem.prev();
             reqDot = currentDot.prev();
             console.log(reqDot);
        }
        let reqIndex = reqItem.index();
        let list = $('.onepage-slider__list');
        let duration = 1000;
        
     
              //  let duration = ;
       // console.log(reqIndex);

        if(reqItem.length){
            list.animate({
                'top' : -(reqIndex*100) + '%'
            },duration,function(){
                currentItem.removeClass('section--active');
                currentDot.removeClass('change__item-active');
                reqItem.addClass('section--active');
                reqDot.addClass('change__item-active');
            })
        }
           
      
    })
    $('body').on('click','.change__item',function(e){
        {
            e.preventDefault();
            let $this = $(this);
            console.log($(this));
            let container = $('.change__list');
            let items = container.find('.change__item');
            dot($this,items);
            
           
        }
    })
    var dot = function($this,items){
        
        let currentItem = items.filter('.change__item-active');
        // let reqItem =
        let list = $('.onepage-slider__list');
      
        let index = $this.index();
       // console.log(index);
        list.animate({
            'top' : -(index*100) + '%'
        },500,function(){
            currentItem.removeClass('change__item-active');
           
            $this.addClass('change__item-active');
        })
    }
    });
  

