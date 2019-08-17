(function(){
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
    console.log('burron');
    let elem = e.target;
   console.log(elem.tagName);
    if(elem.tagName === "BUTTON"){
        console.log('jntkxtyj децствие по уполчанию');
        var text = document.querySelectorAll('.reviews__text');
        var txt = getComputedStyle(text[0]);
        if(txt.display=='none'){
            for(let i =0; i< text.length;i++){
                text[i].style.display = 'block';
            }
            // console.log(txt.display);
            reviews_modal.style.display = 'block';
            let modal_txt = elem.previousElementSibling;
          //  console.log(modal_txt);
          //  console.log(modal_txt.children[1]);
            reviews_text.innerHTML = modal_txt.innerHTML;
            for(let i =0; i< text.length;i++){
                text[i].style.display = 'none';
            }
            document.body.classList.add('no-scroll');
            // console.log(txt.display);
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




})();


