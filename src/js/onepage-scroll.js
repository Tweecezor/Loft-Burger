function generate_dots(){
    let sections = document.querySelectorAll('.section');
    let sections_length = sections.length;
    let change__list = document.querySelector('.change__list');
    for(let i =0; i< sections_length; i++){
        if(i==sections_length-1){
            change__list.insertAdjacentHTML("afterBegin", "<li class='change__item change__item-active'><a href='#' class='change__link'></a></li>");
        } else
        { change__list.insertAdjacentHTML("afterBegin", "<li class='change__item'><a href='#' class='change__link'></a></li>");
        }
    }
}
generate_dots();



var CURRENT_SECTION = 0;

let down_arrow = document.querySelector('.scroll-down-arrow');
down_arrow.addEventListener('click',function(e){
    e.preventDefault();
    CURRENT_SECTION++;
    scroll(CURRENT_SECTION);
    active_dot(CURRENT_SECTION);
})

const list = document.querySelector(".onepage-slider__list");
const nub = 100;
function nav_menu(){
    var nav = document.querySelector('.nav__list');
    // console.log(nav);
    let header__buttons = document.querySelector('.header__buttons');
    // console.log(header__buttons);
    let nav__items = document.querySelectorAll('.nav__item');
    header__buttons.addEventListener('click',e=>{
       if(e.target.text == 'Заказать'){
           CURRENT_SECTION = 7;
            scroll(CURRENT_SECTION);
            active_dot(CURRENT_SECTION);
       } else {
            for(let i = 0; i < nav__items.length; i++){
                nav__items[i].addEventListener('click',e=>{
                    // console.log(i);
                    // console.log("click"+ e.target.text);
                    if(e.target.text === 'Контакты'){
                        CURRENT_SECTION = i+2;
                        scroll(CURRENT_SECTION);
                        active_dot(CURRENT_SECTION);
                    } else{
                        CURRENT_SECTION = i+1;
                        scroll(CURRENT_SECTION);
                        active_dot(CURRENT_SECTION);
                    }
                 })
                // console.log(i);
                // console.log(nav__items[i]);
            }
        }
    })
            
} 
nav_menu();


let inScroll = false;
function wheel(){
    var body = document.querySelector('body');
    // currentSection = 0;
    body.addEventListener('wheel',function(e){
        e.preventDefault();
        e.stopPropagation();
        let direction = e.deltaY;
        direction = e.deltaY>0?'down':'up';
        let sections = document.querySelectorAll('.section');
        let section_length = sections.length;
        if(inScroll === false){
            inScroll = true;
            if(direction == 'up'){
                if(CURRENT_SECTION<section_length-1){
                    CURRENT_SECTION++;
                        scroll(CURRENT_SECTION);
                        active_dot(CURRENT_SECTION);
                }
            } else {
                if(CURRENT_SECTION>0){
                    CURRENT_SECTION--;
                        scroll(CURRENT_SECTION);
                        active_dot(CURRENT_SECTION);
                }
            }
            setTimeout(() => {
                inScroll = false;
            }, 1800);
        }
    },{passive:false})
}
wheel();

function swipe(){
    // var body = document.querySelector('body');
    // currentSection = 0;
    $(window).swipe({
        swipe:function(event,direction,distance,duration,fingerCount,fingerData){
            const nextOrPrev = direction === "up" ? "next": "prev";
            // e.preventDefault();
            // e.stopPropagation();
            // let direction = e.deltaY;
            // direction = e.deltaY>0?'down':'up';
            let sections = document.querySelectorAll('.section');
            let section_length = sections.length;
            if(inScroll === false){
                inScroll = true;
                if(direction == 'up'){
                    if(CURRENT_SECTION<section_length-1){
                        CURRENT_SECTION++;
                            scroll(CURRENT_SECTION);
                            active_dot(CURRENT_SECTION);
                    }
                } else {
                    if(CURRENT_SECTION>0){
                        CURRENT_SECTION--;
                            scroll(CURRENT_SECTION);
                            active_dot(CURRENT_SECTION);
                    }
                }
                setTimeout(() => {
                    inScroll = false;
                }, 1800);
            }
        }
    })
}   
swipe();





let dots = document.querySelectorAll('.change__item');
let dot_length = dots.length;
for(let i = 0; i < dot_length; i++){
    dots[i].addEventListener('click', e=>{
    CURRENT_SECTION = i;
      scroll(CURRENT_SECTION);
      active_dot(CURRENT_SECTION);
    })
}   


function scroll (i){
  console.log(i + nub)
  console.log(`${i} + 10`)
    // list.style.transform = `translateY(${-nub*i})vh`;
    // list.style.color = 'red';
    list.style.transform = `translateY(${-nub*i}vh)`;
    list.style.transition = "1.5s"
}


function active_dot(i){
    let currentDot = document.querySelectorAll('.change__item');
    let activeDot = document.querySelector('.change__item-active');
    if(activeDot.classList.contains('change__item-active')){
        activeDot.classList.remove('change__item-active');
    }
    currentDot[i].classList.add('change__item-active');
}






// (function(){
//     $(function(){
//         var generateDots = function(){
//             $('.section').each(function(){
//                 var dot = $('<li>',{
//                     attr : {
//                         class: 'change__item '
//                     },
//                     html: '<a href="#" class="change__link"></a>'
//                 })
//                 $('.change__list').append(dot);
//             })
//         }
//         generateDots();
//         $('.change__item').first().addClass('change__item-active')
//         //let scroll = true;
//         $(document).on('wheel',function(e){
//             e.preventDefault(); 
//             e.stopPropagation();
//             console.log(e.originalEvent.deltaY);
//             let direction = e.originalEvent.deltaY;
//             let reqItem;
//             let reqDot;
//             let container = $('.onepage-slider');
//             let items = container.find('.section');
//             let currentItem = items.filter('.section--active');
//             let currentDotIndex = currentItem.index();
//             let currentDot = $('.change__item').eq(currentDotIndex);
//             console.log(currentDot);
//             if(direction > 0){
//                  reqItem = currentItem.next();
//                  reqDot = currentDot.next();
//                  console.log(reqDot);
//             } else{
//                  reqItem = currentItem.prev();
//                  reqDot = currentDot.prev();
//                  console.log(reqDot);
//             }
//             let reqIndex = reqItem.index();
//             let list = $('.onepage-slider__list');
//             let duration = 1000;
//             if(reqItem.length){
//                 list.animate({
//                     'top' : -(reqIndex*100) + '%'
//                 },duration,function(){
//                     currentItem.removeClass('section--active');
//                     currentDot.removeClass('change__item-active');
//                     reqItem.addClass('section--active');
//                     reqDot.addClass('change__item-active');
//                 })
//             }
//         })
        // $(window).swipe({
        //     swipe:function(event,direction,distance,duration,fingerCount,fingerData){
        //         const nextOrPrev = direction === "up" ? "next": "prev";
        //         let reqItem;
        //         let reqDot;
        //         let container = $('.onepage-slider');
        //         let items = container.find('.section');
        //         let currentItem = items.filter('.section--active');
        //         let currentDotIndex = currentItem.index();
        //         let currentDot = $('.change__item').eq(currentDotIndex);
        //         console.log(currentDot);
        //         if(nextOrPrev === "next"){
        //              reqItem = currentItem.next();
//                      reqDot = currentDot.next();
//                      console.log(reqDot);
//                 } else{
//                      reqItem = currentItem.prev();
//                      reqDot = currentDot.prev();
//                      console.log(reqDot);
//                 }
//                 let reqIndex = reqItem.index();
//                 let list = $('.onepage-slider__list');
//                 let durationAnim = 1000;
//                 if(reqItem.length){
//                     list.animate({
//                         'top' : -(reqIndex*100) + '%'
//                     },durationAnim,function(){
//                         // currentItem.removeClass('section--active');
//                         currentDot.removeClass('change__item-active');
//                         // reqItem.addClass('section--active');
//                         reqDot.addClass('change__item-active');
//                     })
//                 }
//             }
//         })
    
//     $('.wrapper').on("touchmove",e=>{
//         e.preventDefault(); 
//     })
    
    
//         $('body').on('click','.change__item',function(e){
//             {
//                 e.preventDefault();
//                 let $this = $(this);
//                 console.log($(this));
//                 let container = $('.change__list');
//                 let items = container.find('.change__item');
//                 dot($this,items);     
//             }
//         })
//         var dot = function($this,items){
//             let currentItem = items.filter('.change__item-active');
//             let list = $('.onepage-slider__list');
//             let index = $this.index();
//             list.animate({
//                 'top' : -(index*100) + '%'
//             },500,function(){
//                 currentItem.removeClass('change__item-active');
//                 $this.addClass('change__item-active');
//             })
//         }
//         });

//         $('body').on('click','.scroll-down-arrow',function(e){
//             e.preventDefault();
//             let $this = $(this);
//             console.log($(this));
//             // let container = $('.scroll-down-arrow');
//             // let items = container.find('.change__item');
//             let container = $('.change__list');
//             let items = container.find('.change__item');
//             let currentItem = items.filter('.change__item-active');
//             console.log(currentItem.next());
//             let nextItem = currentItem.next();
//             let list = $('.onepage-slider__list');
//             list.animate({
//                 'top': -(1*100)+ '%'
//             },500,function(){
//                 currentItem.removeClass('change__item-active');
//                 nextItem.addClass('change__item-active');
//             })
//         })

//         $('.header__order-btn').on('click',function(e){
//             e.preventDefault();
//             let currentDot = $('.change__item-active');
//             let newDot = $('.change__item').eq(7);
//             let list = $('.onepage-slider__list');
//             list.animate({
//                 'top': -(7*100)+ '%'
//             },500,function(){
//                 currentDot.removeClass('change__item-active');
//                  newDot.addClass('change__item-active');
//             })
//         })

        

//         $('body').on('click','.nav__item',function(e){
//             e.preventDefault();
//             console.log(e.target.text);
//             let value=e.target.text;
//             let currentItem = $(this);
//             let currentIndex = currentItem.index()+1;
//             let container = $('.change__list');
//             let items = container.find('.change__item');
//             let activeDot = items.filter('.change__item-active');
//             let currentDot = $('.change__item').eq(currentIndex);
//             console.log(currentIndex);
//             console.log(typeof(value));
//             let list = $('.onepage-slider__list');
//             switch(value){
//                 case 'О нас':  
//                 console.log("sfgsfg");  
//                 list.animate({
//                     'top': -(currentIndex*100)+ '%'
//                 },500,function(){
//                     activeDot.removeClass('change__item-active');
//                     currentDot.addClass('change__item-active');
//                 })
//                 break;
//                 case 'Бургеры':    
//                 list.animate({
//                     'top': -(currentIndex*100)+ '%'
//                 },500,function(){
//                     activeDot.removeClass('change__item-active');
//                     currentDot.addClass('change__item-active');
//                 })
//                 break;
//                 case 'Команда':    
//                 list.animate({
//                     'top': -(currentIndex*100)+ '%'
//                 },500,function(){
//                     activeDot.removeClass('change__item-active');
//                     currentDot.addClass('change__item-active');
//                 })
//                 break;
//                 case 'Меню':    
//                 list.animate({
//                     'top': -(currentIndex*100)+ '%'
//                 },500,function(){
//                     activeDot.removeClass('change__item-active');
//                     currentDot.addClass('change__item-active');
//                 })
//                 break;
//                 case 'Отзывы':    
//                 list.animate({
//                     'top': -(currentIndex*100)+ '%'
//                 },1000,function(){
//                     activeDot.removeClass('change__item-active');
//                     currentDot.addClass('change__item-active');
//                 })
//                 break;
//                 case 'Как мы работаем':    
//                 list.animate({
//                     'top': -(currentIndex*100)+ '%'
//                 },500,function(){
//                     activeDot.removeClass('change__item-active');
//                     currentDot.addClass('change__item-active');
//                 })
//                 break;
//                 case 'Контакты':    
//                 currentDot = $('.change__item').eq(currentIndex+1);
//                 list.animate({
//                     'top': -((currentIndex+1)*100)+ '%'
//                 },500,function(){
//                     activeDot.removeClass('change__item-active');
//                     currentDot.addClass('change__item-active');
//                 })
//                 break;
//             }
//         })
// })();

// var nav = document.querySelector('.nav__list');
// console.log(nav);
// nav.addEventListener('click',e=>{
//     // alert('click');
//     // console.log(e.target);
//     let list = document.querySelector(".onepage-slider__list");
//     // console.log(list);
//     console.log(e);
//     var clicked_nav_item = e.target.text;
//     console.log(clicked_nav_item);
//     let currentArr = document.querySelectorAll(".nav__item");
//     let length = currentArr.length;
//     console.log(length);
//     console.log(currentArr);
//     // let arr = document.querySelector('.nav__list');
//     // let index;
//     // arr.addEventListener('click',e=>{
//     //    console.log('dfgdfg');
//         let current = (e.target.parentNode);
//     // })

//     // e.target.indexOf();
//     // console.log(currentArr.indexOf(current));
//     switch(clicked_nav_item){
//         case 'О нас':  
//         console.log("sfgsfg");  
//         let nub = 100;
//         list.style.top = -nub+"%";
//         // list.animate({
//         //     'top': -(1*100)+ '%'
//         // },500,function(){
//         //     // activeDot.removeClass('change__item-active');
//         //     // currentDot.addClass('change__item-active');
//         // })
//         break;
//         case 'Бургеры':    
//         list.animate({
//             'top': -(2*100)+ '%'
//         },500,function(){
//             // activeDot.removeClass('change__item-active');
//             // currentDot.addClass('change__item-active');
//         })
//         break;
//         case 'Команда':    
//         list.animate({
//             'top': -(3*100)+ '%'
//         },500,function(){
//             // activeDot.removeClass('change__item-active');
//             // currentDot.addClass('change__item-active');
//         })
//         break;
//         case 'Меню':    
//         list.animate({
//             'top': -(4*100)+ '%'
//         },500,function(){
//             // activeDot.removeClass('change__item-active');
//             // currentDot.addClass('change__item-active');
//         })
//         break;
//         case 'Отзывы':    
//         list.animate({
//             'top': -(5*100)+ '%'
//         },1000,function(){
//             // activeDot.removeClass('change__item-active');
//             // currentDot.addClass('change__item-active');
//         })
//         break;
//         case 'Как мы работаем':    
//         list.animate({
//             'top': -(6*100)+ '%'
//         },500,function(){
//             // activeDot.removeClass('change__item-active');
//             // currentDot.addClass('change__item-active');
//         })
//         break;
//         case 'Контакты':    
//         currentDot = $('.change__item').eq(currentIndex+1);
//         list.animate({
//             'top': -((7+1)*100)+ '%'
//         },500,function(){
//             // activeDot.removeClass('change__item-active');
//             // currentDot.addClass('change__item-active');
//         })
//         break;
//     }
// })
