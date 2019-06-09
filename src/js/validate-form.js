

(function(){
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


})();

