
(function ($){
    "use strict"

    // code start


    $('header .head-main .ser-res-icon').on('click',function (){
        $('.search-bar').show(900)
    })
    
    $('header .head-main .bar-icon-2').on('click',function (){
        $('.search-bar').hide(500)
    })

    $(window).resize(function (){
        let wSize = $(window).width();
        if (wSize > 480){
            $('.search-bar').removeAttr('style');
        }
    });
    // search area end

    $('header .head-main .head-res-icon .fa-bars').on('click',function (){
        $('header .menu').slideToggle()
    })

    $(window).resize(function (){
        let screenSize = $(window).width();
        if (screenSize > 991){
            $('header .menu').removeAttr('style');
        }
    });
    // menu area end

    $('nav .nav-icon .fa-ellipsis-h').on('click',function (){
        $('nav .american-nav').animate({
            top:0
        }, 1000)
    })
    $('nav .american-nav .fa-times').on('click',function (){
        $('nav .american-nav').animate({
            top:-1500
        }, 1000)
    })
    
    // venobox

    new VenoBox();

    // wow js

    var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animate__animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null,    // optional scroll container selector, otherwise use window,
    resetAnimation: true,     // reset animation on end (default is true)
  }
);
wow.init();

// top-button
$(window).scroll(function (){
    var distence = $(window).scrollTop();
    if (distence > 500){
        $('.top-button').fadeIn();
    }
    else{
        $('.top-button').fadeOut();
    }
    });
    


// login-page


$ ('.form-area form .email input').focus(function (){

    $ ('.form-area form .email label').animate({
        top:'-1000px'
    });
});

$ ('.form-area form .pass input').focus(function (){
    $ ('.form-area form .pass label').animate({
        top:'-1000px'
    });
});

// alert





}) (jQuery);