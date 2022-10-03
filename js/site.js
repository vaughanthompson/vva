$(document).ready(function(){

    // sitewide and activeLinking
    /*
    var str = window.location.pathname;
    if (str.indexOf('/en/') >= 0) {
        $('div.containMNav').load("inc-mobNavEN.html");
        $('div#masthead').load("inc-topNavEN.html");
        $('footer#siteWide').load("inc-footerEN.html");
    } else if (str.indexOf('/de/') >= 0) {
        $('div.containMNav').load("inc-mobNavDE.html");
        $('div#masthead').load("inc-topNavDE.html");
        $('footer#siteWide').load("inc-footerDE.html");
    } else {
        $('div.containMNav').load("/de/inc-mobNavDE.html");
        $('div#masthead').load("/de/inc-topNavDE.html");
        $('footer#siteWide').load("/de/inc-footerDE.html");
    }
    */
  



    $.localScroll({
            target: 'body',
            queue: false,
            hash: false,
            duration: 500,
            easing: 'easeOutQuad'
    });

    // mobile top scroll
    //$('#navMobile').hide();
    
    new Waypoint({
    element: document.getElementsByTagName('body'),
    handler: function(direction) {
        if (direction === 'down') {
            $('#navMobile').fadeTo(1000,'1.0');
        }
        else {
            $('#navMobile').hide();
        }
    },
        offset: '-50%'
    });
/*
    new Waypoint({
        element: document.getElementById('inpageNav'),
        handler: function(direction) {
            if (direction === 'down') {
                $('header.sticky').animate({opacity: "show"}, {queue : false, duration:200});
            }
            else {
                $('header.sticky').animate({opacity: "hide"}, {queue : false, duration:250});
            }
        },
            offset: '5%'
        
        });
 */

       
/* add nav to sliders */


    $(".slickSlider").slick({
        autoplay:true,
        autoplaySpeed:5000,
        arrows:true,
        dots:true,
        fade:true,
        speed:1000,
        pauseOnHover:false
    });


    $(".slickBrands").slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 5,
        arrows:true,
        dots:false,
        fade:false,
        speed:1000,
        responsive: [
            {
              breakpoint: 1100,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: false
              }
            }
        ]
    });

    $(".slickBrands").show();

    $(".slickBrandsHome").slick({
        autoplay: true,
        autoplaySpeed:5000,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 5,
        arrows:true,
        dots:false,
        fade:false,
        speed:1000,
        pauseOnHover:true,
        responsive: [
            {
              breakpoint: 1100,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: false
              }
            }
        ]
    });

    $(".slickBrandsHome").show();
    


    // mobile nav
    $('#navClose').hide();
    $('#navClose').click(function(){
        $(this).hide();
        $('#navCart').show();
        $('#navTrigger').show();
        $("div.mblnavContainer").scrollTo(0);
        $('div.mblnav').hide();
        $('html, body').removeClass('noscroll');
        return false;
    });

    $('#navTrigger').click(function(){
        $(this).hide();
        $('#navCart').hide();
        $('#navClose').show();
        $('div.mblnav').show();
        $('html, body').addClass('noscroll');
        return false;

    });


    // ddown
    $('a.ddownClose').click(function(){
        $(this).parent('div.ddownOuter').fadeTo(250,0).hide(300);
        return false;
    });

    $('div.brandCarousel a.jcb').click(function(){
        $('div.ddownOuter.jcb').fadeTo(250,1);
        return false;
    });
    $('div.brandCarousel a.massey-ferguson').click(function(){
        $('div.ddownOuter.massey-ferguson').fadeTo(250,1);
        return false;
    });
    $('div.brandCarousel a.fendt').click(function(){
        $('div.ddownOuter.fendt').fadeTo(250,1);
        return false;
    });
    $('div.brandCarousel a.dressta').click(function(){
        $('div.ddownOuter.dressta').fadeTo(250,1);
        return false;
    });
    $('div.brandCarousel a.iseki').click(function(){
        $('div.ddownOuter.iseki').fadeTo(250,1);
        return false;
    });
    $('div.brandCarousel a.claas').click(function(){
        $('div.ddownOuter.claas').fadeTo(250,1);
        return false;
    });
    $('div.brandCarousel a.amazone').click(function(){
        $('div.ddownOuter.amazone').fadeTo(250,1);
        return false;
    });
    $('div.brandCarousel a.asv').click(function(){
        $('div.ddownOuter.asv').fadeTo(250,1);
        return false;
    });
    $('div.brandCarousel a.mahindra').click(function(){
        $('div.ddownOuter.mahindra').fadeTo(250,1);
        return false;
    });
    $('div.brandCarousel a.yeomans-plow').click(function(){
        $('div.ddownOuter.yeomans-plow').fadeTo(250,1);
        return false;
    });



    // slideToggle content
    $('div.slideToggleChild').hide();
    $('a.slideToggleTrigger').click(function(){
        $(this).closest('div.slideToggleParent').find('div.slideToggleChild').slideToggle(500);
        $(this).html(($(this).html()=="Close comparison"?"Click to compare":"Close comparison"));
        $(this).parent().find('i').toggleClass('upDown');
        return false;
    });



    // show random div
    var elems = $(".randomShow");
    if (elems.length) {
    var keep = Math.floor(Math.random() * elems.length);
    for (var i = 0; i < elems.length; ++i) {
        if (i !== keep) {
        $(elems[i]).hide();
        }
    }
    }



    // named anchor scrollTo and offset
    var anchorLink = $(window.location.hash);
    if ( anchorLink.length ) {
        $("html, body").animate({scrollTop: anchorLink.offset().top - 50 }, 500);
    }




    // onOff waypoints content area
    $('.onOff').each(function() {
        var inview = new Waypoint.Inview({
        element: this,
        enter: function(direction) {
            // alert('Enter triggered with direction ' + direction)
            },
            entered: function(direction) {     
                $(this[0,'element']).find('.onOffTarget').removeClass('stateInactive');                            
                $(this[0,'element']).find('.onOffTarget').addClass('stateActive');
                    
            },
            exit: function(direction) {
                $(this[0,'element']).find('.onOffTarget').removeClass('stateActive');                            
                $(this[0,'element']).find('.onOffTarget').addClass('stateInactive');
            },
            exited: function(direction) {
                // alert('Exited triggered with direction ' + direction)
            }
        })
    });


});

