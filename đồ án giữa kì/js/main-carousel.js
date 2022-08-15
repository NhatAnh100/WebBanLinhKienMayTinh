
$(function () {
    // slider for slider đầu.

    $('#owl-slider').owlCarousel({
        stagePadding: 50,
        loop:true,
        margin:10,
        nav:true,
        autoplay: true,
        navText:["<img src='img/icon-left.png'>","<img src='img/icon-right.png'>"],
        navigationText: ["<img src='img/icon-left.png'>","<img src='img/icon-right.png'>"],
        items: 1,
        pagination: true,
        itemsDesktop: [1000, 1],
        itemsDesktopSmall: [900, 1],
        itemsTablet: [600, 1],
        itemsMobile: false,
        navigation: true,
    });
});


$(function () {
    $('#product-carousel').owlCarousel({
        loop: false,
        margin: 10,
        nav: true,
        pagination:false,
        nav:true,
        navigation:true,
        navText:["<img src='img/icon-left.png'>","<img src='img/icon-right.png'>"],
        navigationText: ["<img src='img/icon-left.png'>","<img src='img/icon-right.png'>"],
        items: 1,
        items: 4,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4,
                margin: 10
            }
        }
    });

    $('#toilet-carousel').owlCarousel({
        loop: false,
        margin: 10,
        nav: true,
        pagination:false,
        items: 4,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4,
                margin: 10
            }
        }
    });
    $('#kitchen-carousel').owlCarousel({
        loop: false,
        margin: 10,
        nav: true,
        pagination:false,
        items: 4,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4,
                margin: 10
            }
        }
    });

    $('#smarthouse-carousel').owlCarousel({
        loop: false,
        margin: 10,
        nav: true,
        items: 4,
        pagination:false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4,
                margin: 10
            }
        }
    });

    $('#member-carousel').owlCarousel({
        loop: false,
        margin: 10,
        nav: true,
        dots: false,
        pagination:false,
        navigation: true,
        navigationText: ["<img src='img/icon-left.png'>","<img src='img/icon-right.png'>"],
        items: 1,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1,
            }
        }
    });


    $('#partner-carousel').owlCarousel({
        loop: false,
        margin: 10,
        nav: true,
        dots: false,
        pagination:false,
        navigation: true,
        navigationText: ["<img src='img/icon-left.png'>","<img src='img/icon-right.png'>"],
        items: 6,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 4
            },
            1000: {
                items: 6,
            }
        }
    });

})

