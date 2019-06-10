

(function(){
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
            let reqDot;
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
            if(reqItem.length){
                list.animate({
                    'top' : -(reqIndex*100) + '%'
                },duration,function(){
                    // currentItem.removeClass('section--active');
                    currentDot.removeClass('change__item-active');
                    // reqItem.addClass('section--active');
                    reqDot.addClass('change__item-active');
                })
            }
        })
        $(window).swipe({
            swipe:function(event,direction,distance,duration,fingerCount,fingerData){
                const nextOrPrev = direction === "up" ? "next": "prev";
                let reqItem;
                let reqDot;
                let container = $('.onepage-slider');
                let items = container.find('.section');
                let currentItem = items.filter('.section--active');
                let currentDotIndex = currentItem.index();
                let currentDot = $('.change__item').eq(currentDotIndex);
                console.log(currentDot);
                if(nextOrPrev === "next"){
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
                let durationAnim = 1000;
                if(reqItem.length){
                    list.animate({
                        'top' : -(reqIndex*100) + '%'
                    },durationAnim,function(){
                        // currentItem.removeClass('section--active');
                        currentDot.removeClass('change__item-active');
                        // reqItem.addClass('section--active');
                        reqDot.addClass('change__item-active');
                    })
                }
            }
        })
    
    $('.wrapper').on("touchmove",e=>{
        e.preventDefault(); 
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
            let list = $('.onepage-slider__list');
            let index = $this.index();
            list.animate({
                'top' : -(index*100) + '%'
            },500,function(){
                currentItem.removeClass('change__item-active');
                $this.addClass('change__item-active');
            })
        }
        });

        $('body').on('click','.scroll-down-arrow',function(e){
            e.preventDefault();
            let $this = $(this);
            console.log($(this));
            // let container = $('.scroll-down-arrow');
            // let items = container.find('.change__item');
            let container = $('.change__list');
            let items = container.find('.change__item');
            let currentItem = items.filter('.change__item-active');
            console.log(currentItem.next());
            let nextItem = currentItem.next();
            let list = $('.onepage-slider__list');
            list.animate({
                'top': -(1*100)+ '%'
            },500,function(){
                currentItem.removeClass('change__item-active');
                nextItem.addClass('change__item-active');
            })
        })

        $('.header__order-btn').on('click',function(e){
            e.preventDefault();
            let currentDot = $('.change__item-active');
            let newDot = $('.change__item').eq(7);
            let list = $('.onepage-slider__list');
            list.animate({
                'top': -(7*100)+ '%'
            },500,function(){
                currentDot.removeClass('change__item-active');
                 newDot.addClass('change__item-active');
            })
        })


        $('body').on('click','.nav__item',function(e){
            e.preventDefault();
            console.log(e.target.text);
            let value=e.target.text;
            let currentItem = $(this);
            let currentIndex = currentItem.index()+1;
            let container = $('.change__list');
            let items = container.find('.change__item');
            let activeDot = items.filter('.change__item-active');
            let currentDot = $('.change__item').eq(currentIndex);
            console.log(currentIndex);
            console.log(typeof(value));
            let list = $('.onepage-slider__list');
            switch(value){
                case 'О нас':  
                console.log("sfgsfg");  
                list.animate({
                    'top': -(currentIndex*100)+ '%'
                },500,function(){
                    activeDot.removeClass('change__item-active');
                    currentDot.addClass('change__item-active');
                })
                break;
                case 'Бургеры':    
                list.animate({
                    'top': -(currentIndex*100)+ '%'
                },500,function(){
                    activeDot.removeClass('change__item-active');
                    currentDot.addClass('change__item-active');
                })
                break;
                case 'Команда':    
                list.animate({
                    'top': -(currentIndex*100)+ '%'
                },500,function(){
                    activeDot.removeClass('change__item-active');
                    currentDot.addClass('change__item-active');
                })
                break;
                case 'Меню':    
                list.animate({
                    'top': -(currentIndex*100)+ '%'
                },500,function(){
                    activeDot.removeClass('change__item-active');
                    currentDot.addClass('change__item-active');
                })
                break;
                case 'Отзывы':    
                list.animate({
                    'top': -(currentIndex*100)+ '%'
                },1000,function(){
                    activeDot.removeClass('change__item-active');
                    currentDot.addClass('change__item-active');
                })
                break;
                case 'Как мы работаем':    
                list.animate({
                    'top': -(currentIndex*100)+ '%'
                },500,function(){
                    activeDot.removeClass('change__item-active');
                    currentDot.addClass('change__item-active');
                })
                break;
                case 'Контакты':    
                currentDot = $('.change__item').eq(currentIndex+1);
                list.animate({
                    'top': -((currentIndex+1)*100)+ '%'
                },500,function(){
                    activeDot.removeClass('change__item-active');
                    currentDot.addClass('change__item-active');
                })
                break;
            }
        })
})();



        