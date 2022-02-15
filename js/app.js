$(document).ready(function() {

    //SELECTOR
    let menuIcon = $("#menu-icon");
    let navLink = $(".nav-link");
    let websiteLoader = $(".website-loader");


    //WEBSITE LOADER
    $(window).on("load", function () {
        websiteLoader.fadeOut(500, function () {
            websiteLoader.remove();
        })
    })

    // NAVBAR FIX TO TOP
    let windowHeight = $(window).height();

    $(window).scroll(function() {

        let currentScrollLocation = $(document).scrollTop();
        
        if(currentScrollLocation > windowHeight - 150) {
            $("#header").addClass("scroll");
        } else {
            $("#header").removeClass("scroll");
            setActive("top");
        }

    });

    //SHOW ACTIVE MENU
    function setActive(current) {
        navLink.removeClass("current");
        $(`.nav-link[href="#${current}"]`).addClass("current");
    }

    function onScroll() {
        let currentSection = $("section[id]");
        currentSection.waypoint(function (direction) {
           if (direction == "down") {
                let currentSectionId = $(this.element).attr("id");
                // console.log(currentSectionId);
                setActive(currentSectionId);
           }
        },{ offset: "150px" });

        currentSection.waypoint(function (direction) {
            if (direction == "up") {
                let currentSectionId = $(this.element).attr("id");
                // console.log(currentSectionId);
                setActive(currentSectionId);
            }
        },{ offset: "-150px" });
    }

    onScroll();

    // CHANGE ICON TO X WHEN MENU OPEN
    menuIcon.click(function() {

        if(menuIcon.hasClass("fa-bars")) {
            menuIcon.removeClass("fa-bars");
            menuIcon.addClass("fa-times");
        } else if ($("#menu-icon").hasClass("fa-times")) {
            menuIcon.removeClass("fa-times");
            menuIcon.addClass("fa-bars");
        }

    })

    // PRICING SECTION SLICK CAROUSEL
    $(".pricing-slide").slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 780,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    // WOW JS INITIALIZE
    wow = new WOW(
        {
            boxClass: 'wow',      // default
            animateClass: 'animate__animated', // default
            offset: 0,          // default
            mobile: true,       // default
            live: true        // default
        }
    )
    wow.init();
});