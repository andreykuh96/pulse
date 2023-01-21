$(document).ready(function(){
    new Swiper('.swiper', {
        navigation: {
            nextEl: '.slider__next',
            prevEl: '.slider__prev',
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },
    });
    
    (function($) {
        $(function() {
            
          $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
            $(this)
              .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
              .closest('div.catalog__container').find('div.catalog__cards-wrapper').removeClass('catalog__cards-wrapper_active').eq($(this).index()).addClass('catalog__cards-wrapper_active');
            });
          
        });
    })(jQuery);
    
    function toggleCard(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.cards__content').eq(i).toggleClass('cards__content_active');
                $('.cards__list').eq(i).toggleClass('cards__list_active');
            });
        });
    }
    
    toggleCard('.cards__link');
    toggleCard('.cards__list-link');
    
    $('[data-modal="consultation"]').on('click', function() {
        $('.overlay, #consultation').fadeIn();
    });
    
    $('.modal__close').on('click', function() {
        $('.overlay, #consultation, #thanks, #order').fadeOut();
    });
    
    $('.button_mini').each(function(i) {
        $(this).on('click', function() {
            $('#order .modal__subtitle').text($('.cards__title').eq(i).text());
            $('.overlay, #order').fadeIn();
        });
    });
    
    $(window).scroll(function() {
        if ($(this).scrollTop() > 1600) {
             $('.up').fadeIn();
        } else {
            $('.up').fadeOut();
        }
    });
    
    $("a").on('click', function(event) {
      
        if (this.hash !== "") {
        event.preventDefault();
    
        var hash = this.hash;
    
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800, function(){
    
            window.location.hash = hash;
        });
        }
    });

    new WOW().init();
});