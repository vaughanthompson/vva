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
        $('.mblTitle').show();
        $("div.mblnavContainer").scrollTo(0);
        $('div.mblnav').hide();
        $('html, body').removeClass('noscroll');
        return false;
    });

    $('#navTrigger').click(function(){
        $(this).hide();
        $('#navCart').hide();
        $('.mblTitle').hide();
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



        /* lubematch show/hide */
        $('#lubeMatch').hide();
        $('#lubeMatchTrigger').click(function(){
            $('#lubeMatch').slideToggle(500);
            $(this).html(($(this).html()=="Try it"?"Close":"Try it"));
            return false;
        });



        /* product enquiry show/hide */
        $('.inpageEnquiry').hide();
        $('.openInpageEnquiry').click(function(){
            $('.prodContent').hide();
            $('.inpageEnquiry').fadeTo(300,1.0);
            return false;
        });
        $('.closeForm').click(function(){
            $('.inpageEnquiry').hide();
            $('.prodContent').fadeTo(300,1.0);
            return false;
        });



        /* sidebar collapsible nav */
        $('.subnavContent').hide();
        $('.collapseNavTrig').click(function(){
            $(this).siblings('.subnavContent').slideToggle(500);
            //$(this).html(($(this).html()=="Try it"?"Close":"Try it"));
            return false;
        });


});

