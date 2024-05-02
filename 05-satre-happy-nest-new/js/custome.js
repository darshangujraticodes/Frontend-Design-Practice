/* Demo Scripts for Bootstrap Carousel and Animate.css article
 * on SitePoint by Maria Antonietta Perna
 */
(function ($) {
    //Function to animate slider captions
    function doAnimations(elems) {
        //Cache the animationend event in a variable
        var animEndEv = "webkitAnimationEnd animationend";

        elems.each(function () {
            var $this = $(this),
                $animationType = $this.data("animation");
            $this.addClass($animationType).one(animEndEv, function () {
                $this.removeClass($animationType);
            });
        });
    }

    //Variables on page load
    var $myCarousel = $("#home-carousel"),
        $firstAnimatingElems = $myCarousel.find(".item:first").find("[data-animation ^= 'animated']");

    //Initialize carousel
    $myCarousel.carousel({
        interval: 5000,
        cycle: true,
        pause: "false"
    });

    //Animate captions in first slide on page load
    doAnimations($firstAnimatingElems);

    //Other slides to be animated on carousel slide event
    $myCarousel.on("slide.bs.carousel", function (e) {
        var $animatingElems = $(e.relatedTarget).find(
            "[data-animation ^= 'animated']");

        doAnimations($animatingElems);
    });
    // End of bootsrap Carousel--------------------

    // close menu on click menu item
    $('.navigation-menu-list .menu-item a').click(function () {
        $('.menu-close').click();
    });
    // On scroll fixed menu
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if (scroll >= 75) {
            $("#homenavigation").addClass("fixMenu");
        } else {
            $("#homenavigation").removeClass("fixMenu");
        }
    });


    //Menu Smooth Scroll
    $(".m-link").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                // Add hash (#) to URL when done scrolling (default click behavior)
                // window.location.hash = hash;
            });
        } // End if
    });

    //parallax
    $(function () {
        parallaxInit('.parallax')
    });

    //text animation
    // Wrap every letter in a span
    // var textWrapper = document.querySelector('.ml12');
    // textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    // anime.timeline({loop: true})
    //     .add({
    //         targets: '.ml12 .letter',
    //         translateX: [40,0],
    //         translateZ: 0,
    //         opacity: [0,1],
    //         easing: "easeOutExpo",
    //         duration: 1200,
    //         delay: (el, i) => 500 + 30 * i
    //     }).add({
    //             targets: '.ml12 .letter',
    //             translateX: [0,-30],
    //             opacity: [1,0],
    //             easing: "easeInExpo",
    //             duration: 1100,
    //             delay: (el, i) => 100 + 30 * i
    //     });


    // ============================================================ New Code ===========================================

    var textWrappers = document.querySelectorAll('.ml12');

    function animateHeading(index) {
        if (index >= textWrappers.length) {
            index = 0;
        }
        textWrappers[index].classList.remove('hidden');
        textWrappers[index].innerHTML = textWrappers[index].textContent.replace(/\S/g, "<span class='letter'>$&</span>");

        anime.timeline({loop: false})
            .add({
                targets: textWrappers[index].querySelectorAll('.letter'),
                translateX: [40,0],
                translateZ: 0,
                opacity: [0,1],
                easing: "easeOutExpo",
                duration: 1200,
                delay: (el, i) => 500 + 30 * i
            }).add({
                targets: textWrappers[index].querySelectorAll('.letter'),
                translateX: [0,-30],
                opacity: [1,0],
                easing: "easeInExpo",
                duration: 1100,
                delay: (el, i) => 100 + 30 * i,
                complete: function() {
                    textWrappers[index].classList.add('hidden');
                    animateHeading(index + 1);
                }
            });
    }

    animateHeading(0);
    


    // ==================================== New Code End =========================================

    //carousel------

    // $('.gallery-carousel').owlCarousel({
    //     items: 1,
    //     loop: true,
    //     margin: 0,
    //     autoplay: false,
    //     autoplayTimeout: 4000,
    //     smartSpeed: 1500,
    //     dots:false,
    //     nav: true,
    //     navText: ["<img src='images/prev.png'>","<img src='images/next.png'>"]
    // });
    // $('.galnav_carousel').owlCarousel({
    //     items: 1,
    //     loop: true,
    //     margin: 0,
    //     autoplay: false,
    //     autoplayTimeout: 4000,
    //     smartSpeed: 1500,
    //     nav: false,
    //     dots:false
    // });
    // // Own trigger second carousel
    // $('.gallery-carousel .owl-next').click(function() {
    //     $('.galnav_carousel').trigger('next.owl.carousel');
    // });
    // $('.gallery-carousel .owl-prev').click(function() {
    //     $('.galnav_carousel').trigger('prev.owl.carousel');
    // });
    // //click next btn every 10sec
    // setInterval(function(){
    //     $('.gallery-carousel .owl-next').click();
    // }, 10000);


    $('.gall-carousel').owlCarousel({
        items: 2,
        loop: true,
        margin: 0,
        autoplay: true,
        autoplayTimeout: 6000,
        smartSpeed: 1500,
        dots:false,
        nav: true,
        navText: ["<img src='images/prev.png'>","<img src='images/next.png'>"],
        responsive:{
            0:{
                items:1
            },
            768:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

    $('.project-highlights').owlCarousel({
        items: 2,
        loop: true,
        margin: 40,
        autoplay: true,
        autoplayTimeout: 3000,
        smartSpeed: 1500,
        dots:false,
        nav: true,
        navText: ["<img src='images/prev.png'>","<img src='images/next.png'>"],
        responsive:{
            0:{
                items:1
            },
            768:{
                items:3
            },
            1000:{
                items:3
            }
        }
    });
    
    $('.director-carousel').owlCarousel({
        dots:false,
        nav: true,
        navText: ["<img src='images/prev.png'>","<img src='images/next.png'>"],
        responsive:{
            0:{
                items:1,
                loop: true,
                margin: 20,
                autoplay: true,
                autoplayTimeout: 8000,
                smartSpeed: 1500
            },
            768:{
                items:2,
                loop: true,
                margin: 10,
                autoplay: true,
                autoplayTimeout: 8000,
                smartSpeed: 1500
            },
            1000:{
                items:3,
                loop: false,
                margin: 30,
                autoplay: false
            }
        }
    });


    //Fancybox ---------
    $('[data-fancybox="residential"]').fancybox({
        //slide effect- zoom-in-out
        transitionEffect: "slide",
        loop: true,

        buttons: [
            //'slideShow',
            //'share',
            'zoom',
            'fullScreen',
            'close'
            //'download'
        ],
        thumbs: {
            autoStart: false
        }
    });
    $('[data-fancybox="amenities"]').fancybox({
        //slide effect- zoom-in-out
        transitionEffect: "slide",
        loop: true,

        buttons: [
            //'slideShow',
            //'share',
            'zoom',
            'fullScreen',
            'close'
            //'download'
        ],
        thumbs: {
            autoStart: false
        }
    });

    $(".i-am").click(function () {
        $('#interested').modal('show');
    });
    $(".i-am-new").click(function () {
        $('#interested').modal('show');
    });
    $(".price-click").click(function () {
        $('#price-modal').modal('show');
    });
    $(".register-btn").click(function () {
        $('#interested').modal('show');
    });

    $(".bro-btn").click(function () {
        $('#bro-model').modal('show');
    });

    $(".floor-click").click(function () {
        $('#floor-model').modal('show');
    });



    

    //AOS Initialization
    AOS.init({
        //easing: 'ease-in-out-sine'
        easing: 'ease-out-back'
    });

    // Mian PopUp
    if (!Get_Cookie('popout')) {
        //console.log($('.popupDiv'));
        $(window).load(function () {
            // var width = $(window).width();
            // if(width >= 767){
            setTimeout(function () {
                $('#mainpop').modal('show');
            }, 10000);
            // }
        });
    }
    $('.modal .close').click(function () {
        Set_Cookie('popout', 'it works', '', '/', '', '');
    });


    // Jquery Mobile Validation
    jQuery.validator.addMethod("country", function (value, element) {
        return this.optional(element) || /^[^+]/.test(value);
    }, "Enter Number Without Country Code");
    jQuery.validator.addMethod("number", function (value, element) {
        return this.optional(element) || value.match(/^[1-9][0-9]*$/);
    }, "Please enter the number without beginning with '0'");
    jQuery.validator.addMethod("mobile", function (value, element) {
        return this.optional(element) || $(element).intlTelInput("isValidNumber");
    }, "Please enter a valid mobile number");
    jQuery.validator.addMethod("alphabets", function (value, element) {
        return this.optional(element) || /^[a-zA-Z ]*$/.test(value);
    }, "Please enter Alphabets only");
    jQuery.validator.addMethod("email", function (value, element) {
        return this.optional(element) || /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value);
    }, "Please enter a valid email address.");
    jQuery.validator.addMethod("valueNotEquals", function (value, element, arg) {
        return arg !== value;
    }, "Value must not equal arg.");
    if ($('#enquire-now').length > 0) {
        $('#enquire-now').validate({
            rules: {
                fname: {
                    required: true,
                    maxlength: 100
                },
                mobile: {
                    required: true,
                    number: true,
                    minlength: 10,
                    maxlength: 10
                },
                email: {
                    required: true,
                    email: true
                },
                country:{
                    valueNotEquals: ""
                }
            },
            messages: {
                fname: {
                    required: "Enter Your Name"
                },
                mobile: {
                    required: "Enter Your Number"
                },
                email: {
                    required: "Enter Your Email"
                },
                country:{
                    valueNotEquals: "Select Country"
                }
            },
            submitHandler: function(form) {
                 trackecommerce("UA-20609327-31","", "Runwalcodenamerare", $('#email').val(), $('#phone').val()); 
                trackecommerce_ga4("G-7ZNWNBBGBT","", "Runwalcodenamerare", $('#email').val(), $('#phone').val()); 
                
                try {
                    dataLayer.push({
                        'event': 'selldo_form_submitted'
                    });
                } catch (err) { }
                form.submit();
            }
        });
    }
    if ($('#contact-form').length > 0) {
        $('#contact-form').validate({
            rules: {
                fname: {
                    required: true,
                    maxlength: 100
                },
                mobile: {
                    required: true,
                    number: true,
                    minlength: 10,
                    maxlength: 10
                },
                email: {
                    required: true,
                    email: true
                },
                country:{
                    valueNotEquals: ""
                }
            },
            messages: {
                fname: {
                    required: "Enter Your Name"
                },
                mobile: {
                    required: "Enter Your Number"
                },
                email: {
                    required: "Enter Your Email"
                },
                country:{
                    valueNotEquals: "Select Country"
                }
            },
             submitHandler: function(form) {
                 trackecommerce("UA-20609327-31","", "Runwalcodenamerare", $('#email').val(), $('#phone').val()); 
                 trackecommerce_ga4("G-7ZNWNBBGBT","", "Runwalcodenamerare", $('#email').val(), $('#phone').val()); 
                 
                            try {
                    dataLayer.push({
                        'event': 'selldo_form_submitted'
                    });
                } catch (err) { }
                form.submit();
            }
        });
    }
    if ($('#main-popup').length > 0) {
        $('#main-popup').validate({
            rules: {
                fname: {
                    required: true,
                    maxlength: 100
                },
                mobile: {
                    required: true,
                    number: true,
                    minlength: 10,
                    maxlength: 10
                },
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                fname: {
                    required: "Enter Your Name"
                },
                mobile: {
                    required: "Enter Your Number"
                },
                email: {
                    required: "Enter Your Email"
                }
            },
             submitHandler: function(form) {
                 trackecommerce("UA-20609327-31","", "Runwalcodenamerare", $('#email').val(), $('#phone').val()); 
                 trackecommerce_ga4("G-7ZNWNBBGBT","", "Runwalcodenamerare", $('#email').val(), $('#phone').val()); 
                 
                            try {
                    dataLayer.push({
                        'event': 'selldo_form_submitted'
                    });
                } catch (err) { }
                form.submit();
            }
        });
    }
    if ($('#price-popup').length > 0) {
        $('#price-popup').validate({
            rules: {
                fname: {
                    required: true,
                    maxlength: 100
                },
                mobile: {
                    required: true,
                    number: true,
                    minlength: 10,
                    maxlength: 10
                },
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                fname: {
                    required: "Enter Your Name"
                },
                mobile: {
                    required: "Enter Your Number"
                },
                email: {
                    required: "Enter Your Email"
                }
            },
             submitHandler: function(form) {
                 trackecommerce("UA-20609327-31","", "Runwalcodenamerare", $('#email').val(), $('#phone').val()); 
                 trackecommerce_ga4("G-7ZNWNBBGBT","", "Runwalcodenamerare", $('#email').val(), $('#phone').val()); 
                 
                            try {
                    dataLayer.push({
                        'event': 'selldo_form_submitted'
                    });
                } catch (err) { }
                form.submit();
            }
        });
    }
    
    if ($('#brochure-form').length > 0) {
        $('#brochure-form').validate({
            rules: {
                fname: {
                    required: true,
                    maxlength: 100
                },
                mobile: {
                    required: true,
                    number: true,
                    minlength: 10,
                    maxlength: 10
                },
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                fname: {
                    required: "Enter Your Name"
                },
                mobile: {
                    required: "Enter Your Number"
                },
                email: {
                    required: "Enter Your Email"
                }
            },
              
        });
    }


})(jQuery);