window.addEventListener('DOMContentLoaded', function(){

  // Подключение скролла в попапах Галереи

  new SimpleBar(document.getElementById('popupText'), { 
    autoHide: false,
    scrollbarMaxSize: 300
  });

  new SimpleBar(document.getElementById('popupText2'), { 
    autoHide: false,
    scrollbarMaxSize: 300
  });

  new SimpleBar(document.getElementById('popupText3'), { 
    autoHide: false,
    scrollbarMaxSize: 300
  });

  new SimpleBar(document.getElementById('popupText4'), { 
    autoHide: false,
    scrollbarMaxSize: 300
  });

  new SimpleBar(document.getElementById('popupText5'), { 
    autoHide: false,
    scrollbarMaxSize: 300
  });

  new SimpleBar(document.getElementById('popupText6'), { 
    autoHide: false,
    scrollbarMaxSize: 300
  });


  // Подключение скролла в раскрывающихся списках меню

  // Array.prototype.forEach.call(
  //   document.querySelectorAll('.list-bottom__list'),
  //   el => new SimpleBar()
  // );



  // document.querySelector('.choices__list').id = "selDiv";

  new SimpleBar(document.getElementById('list1'), { 
    autoHide: false,
    scrollbarMaxSize: 300
  });
  
  new SimpleBar(document.getElementById('list2'), { 
    autoHide: false,
    scrollbarMaxSize: 300
  });

  new SimpleBar(document.getElementById('list3'), { 
    autoHide: false,
    scrollbarMaxSize: 300
  });

  new SimpleBar(document.getElementById('list4'), { 
    autoHide: false,
    scrollbarMaxSize: 300
  });

  new SimpleBar(document.getElementById('list5'), { 
    autoHide: false,
    scrollbarMaxSize: 300
  });



    // Бургерное меню

    // Создаём плавность анимации появления мобильного меню
    // Сначала объявим функцию FadeIn

    const fadeIn = (el, timeout, display) => {
      el.style.opacity = 0;
      el.style.display = display || 'block';
      el.style.transition = `opacity ${timeout}ms`;
      setTimeout(() => {
        el.style.opacity = 1;
      }, 10);
    }

    // Объявим функцию FadeOut

    const fadeOut = (el, timeout) => {
      el.style.opacity = 1;
      el.style.transition = `opacity ${timeout}ms`;
      el.style.opacity = 0;

      setTimeout(() => {
        el.style.display = 'none';
      }, timeout);
    };

    var menu = document.querySelector('#menu')
       ,burger = document.querySelector('#burger')
       ,burgerClose = document.querySelector('#burger.open')
       ,flag = false;

      burger.addEventListener('click', function(){      
        if(!flag) {
          fadeIn(menu, 300, 'flex');
          flag = true;          
          document.querySelector('body').classList.add('closed');

        } else {
          fadeOut(menu, 300);
          flag = false;
          document.querySelector('body').classList.remove('closed');
        }       

        burger.classList.toggle('open');

        // Скрытие меню при нажатии на один из пунктов меню

        document.querySelectorAll('.menu__link').forEach(function(oneItem){
            oneItem.addEventListener('click', function(){          

              fadeOut(menu, 300);
              flag = false;
              document.querySelector('body').classList.remove('closed');            
              burger.classList.remove('open');
            });
        });

        burgerClose.addEventListener('click', function(){
          fadeOut(menu, 300);
          flag = false;
          document.querySelector('body').classList.remove('closed');        
          burger.classList.remove('open');
        });
    });   



    // Слайдер в блоке Hero

    const swiper = new Swiper('.hero-slider', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
      slidesPerView: 1,
      speed: 700,
                  
      

      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
        type: 'progressbar'
      },
    
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      
      // Управлять слайдером с клавиатуры
      keyboard: {
          //включаем
          enabled: true,
          //управление клавишами pageUp/pageDown
          pageUpDown: true,
      },

      freeMode: {
          enabled: true,
      },

      autoplay: {
          delay: 2500,            
          waitForTransition: true,
      },
      
  });

  // Слайдер в блоке Gallery
 
  const galswiper = new Swiper('.right-gal', {    
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1, 
    spaceBetween: 38,   
    speed: 700, 
    
    navigation: {
      nextEl: '.button-next',
      prevEl: '.button-prev',
    }, 
 
    keyboard: {       
        enabled: true,  
        pageUpDown: true,
    }, 
    
    shortSwipes: false,

    autoplay: {
        delay: 3000,            
        waitForTransition: true,
    },

    breakpoints: {      
      767: {
        slidesPerView: 2,             
      },

      1600: {
        slidesPerView: 3, 
        spaceBetween: 40             
      }
      
    }
      
  });


  // Слайдер в блоке Articles

  new Swiper('.articles-slider', {    
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,   
    spaceBetween: 30,    
    speed: 700,     
    pagination: {
      el: '.swiper-pagination-articles',
      type: 'bullets',
			clickable: true
    }, 
    navigation: {
      nextEl: '.button-next2',
      prevEl: '.button-prev2',
    }, 
 
    keyboard: {       
        enabled: true,       
        pageUpDown: true,
    },

    freeMode: {
        enabled: true,
    },

    breakpoints: {      
      767: {
        slidesPerView: 2,             
      },

      1023: {
        slidesPerView: 3,                                 
      },

      1399: {
        slidesPerView: 3,
        spaceBetween: 50 
      },      
    }
      
  });


  // Слайдер в блоке Projects

  new Swiper('.projects-slider', {    
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,   
    spaceBetween: 34,    
    speed: 700, 
     
    navigation: {
      nextEl: '.button-next2',
      prevEl: '.button-prev2',
    }, 
 
    keyboard: {       
        enabled: true,       
        pageUpDown: true,
    },

    freeMode: {
        enabled: true,
    },

    breakpoints: {      
      767: {
        slidesPerView: 2, 
        spaceBetween: 50            
      },

      1026: {
        slidesPerView: 3,
        spaceBetween: 50                                 
      },

      1399: {
        slidesPerView: 3,
        spaceBetween: 50 
      },      
    }
      
  });


  // Открытие поля поиска

  var openSearch = document.querySelector('#searchButton')
      ,closeSearch = document.querySelector('#closeSearch')
      ,searchBox = document.querySelector('.search-box__contain');

  openSearch.addEventListener('click', function(){
    fadeIn(searchBox, 500, 'flex');
    flag = true;
  });

  closeSearch.addEventListener('click', function(){
    fadeOut(searchBox, 400);
    flag = false;
  });


  // Кастомизация select
  const element = document.querySelector('.select');
  const choices = new Choices(element, {
    searchEnabled: false,
    itemSelectText: "",
    maxItemCount: -1
  });

  
  // Открытие попапов галерея

  document.querySelectorAll('.right-gal__link').forEach(function(btnTabs){
    btnTabs.addEventListener('click', function(event){
      event.preventDefault(); 
      
      document.querySelector('.gallery__wrapper').classList.add('disabled');

      const path = event.currentTarget.dataset.path;

      document.querySelector(`[data-target="${path}"]`).classList.add('is-open');

      document.querySelector('.gallery__wrapper').classList.remove('disabled');

      document.querySelector('body').classList.add('closed');
    })
  });

  document.querySelectorAll('.popup__close').forEach(function(btnClose){
    btnClose.addEventListener('click', function(event){
      const closeTo = event.currentTarget.dataset.close;

      document.querySelector(`[data-target="${closeTo}"]`).classList.remove('is-open');

      document.querySelector('body').classList.remove('closed');
    })
  });


  // Открытие пунктов нижнего меню

  document.querySelectorAll('.bottom-bar__link').forEach(function(btnBotLink){
    btnBotLink.addEventListener('click', function(event){
      document.querySelectorAll('.list-bottom__list').forEach(function(oneList){
        oneList.classList.remove('is-open');
      });

      const btnMenu = event.currentTarget.dataset.path;

      document.querySelector(`[data-target="${btnMenu}"]`).classList.add('is-open');

      document.querySelectorAll('.list-bottom__link').forEach(function(toClose){
        toClose.addEventListener('click', function(){
          document.querySelector(`[data-target="${btnMenu}"]`).classList.remove('is-open');
        });
      });

      setTimeout(function() {
        document.querySelector(`[data-target="${btnMenu}"]`).classList.remove('is-open');
      }, 5000);

    });
  });


  // Открытие карточки деятеля

  document.querySelectorAll('.cat-list__name').forEach(function(btnArtist){
    btnArtist.addEventListener('click', function(event){
      document.querySelectorAll('.cat-block__artist').forEach(function(artist){
        artist.classList.remove('is-open');
      });

      const newpath = event.currentTarget.dataset.newpath;

      document.querySelector(`[data-newtarget="${newpath}"]`).classList.add('is-open');      
    })
  });


  //Маскирование телефона

  var selector = document.querySelector('input[type="tel"]');
  var im = new Inputmask("+7 (999) 999-99-99");

  im.mask(selector);

      
  // Валидация форм

  new JustValidate('#form', {
    rules: {
      name: {
        required: true,
        minLength: 3,
        maxLength: 10
      },    
      tel: {
        required: true,
        function: (name, value) => {
          // Получить значение без маски
          const phone = selector.inputmask.unmaskedvalue()
          return Number(phone) && phone.length === 10
        }
      }      
    },
    messages: {
      name: {
        minLength: 'Введите более двух символов',
        maxLength: 'Недопустимый формат',
        required: 'Это обязательное поле'
      },
      tel: 'Недопустимый формат'
    },
  });

     
});

jQuery (function($) { 
  $( "#accordion" ).accordion({
    collapsible: true,
    active: false,
    heightStyle: 'content',
    animate: 700
  });

  $(window).resize(function(){   

    if($(window).width() <= '991'){
      $('.cta__button').html(
        'Заказать'
      );   
      
    } else {
      $('.cta__button').html(
        'Заказать обратный звонок'
      );
    }
  });

   /*-----Скроллинг плавный------*/
 
   $('.js-slideTo').on('click', function(e){
    event.preventDefault();

    let href = $(this).attr('href');

    let headerHeight = $('.header').height();

    let offset = $(href).offset().top - headerHeight;

    $('body, html').animate({
      scrollTop: offset,
    }, 700);
  }); 

  

});


