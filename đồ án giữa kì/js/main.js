
/*====================hover to change image===========*/

$(function(){

});

/*====================Menu Slidebar ao cuoi mobie===========*/


/*====================Menu Slidebar ao cuoi mobie===========*/
$('#open-filters').click(function () {

    $('.open-filters').toggleClass('openf');
    $('.side-bar-right').toggleClass('filter-open')
    $('.menu-open-opacity').toggleClass('menu-close-opacity');

})

/*====================Menu Slidebar ao cuoi mobie / end===========*/

/*====================Menu Slidebar mobie===========*/
$('.open-menu').click(function () {

    $('.menu-open-opacity').addClass('menu-close-opacity');
    $('.myslidebar').addClass('open-myslidebar');
    console.log("Clicked");

})

$('.menu-open-opacity').click(function () {

    $('.menu-open-opacity').removeClass('menu-close-opacity');
    $('.myslidebar').removeClass('open-myslidebar');

})


$('.search-btn').click(function () {
    $('.search-mobie .find-enter').toggleClass('search-show');
    return false;
})

// funtion of soft-by ao-cuoi.html)

$('.nav-category ul.nav-ul li a').click(function () {

    var loai = $(this).data('class');
    //console.log(loai);

    $('.product-box-category').each(function () {

        if ($(this).hasclass(loai)) {

            $(this).fadeIn();
        }
        else {
            $(this).fadeOut();
        }
    })
    return false;

})

$('.button-show-tab').click(function () {
    $('.tab-project ul.nav.nav-tabs').toggleClass('responsive-tabs')
})

$('.ul-list-news li').click(function () {

    $(this).toggleClass('active')

})
$(window).scroll(function () {

    vitritop = $('body,html').scrollTop();
    if (vitritop > 200) {
        $('.menu-main').addClass('fix-top');
        $('.scroll-to-top').addClass('show');
    }
    else {
        $('.menu-main').removeClass('fix-top');
        $('.scroll-to-top').removeClass('show');
    }
})

// adcodion trang chi tiet ao cuoi

$(function () {


    $('.scroll-to-top').click(function () {
        $('body,html').animate({
            scrollTop: 0                       // Scroll to top of body
        }, 500);
    })


    $('.content').slideUp();
    $('.mot-tab h3').on('click', function () {
        $(this).next('.content').slideToggle();
        $(this).toggleClass('xanh');
    });


    $('#recover-password').slideUp();
    $('.get-password').on('click', function () {
        $('#recover-password').slideToggle();
    });

    $('#thumbs').delegate('img', 'click', function () {
        $('#largeImage').attr('src', $(this).attr('src').replace('thumb', 'large'));
        $('#description').html($(this).attr('alt'));
    });

    $('#img_01').elevateZoom({
        zoomType: "window",
        cursor: "crosshair",
        zoomWindowFadeIn: 100,
        zoomWindowFadeOut: 150,
        gallery: 'gallery_01',
        cursor: 'pointer',
        galleryActiveClass: 'active',
        imageCrossfade: false,
        loadingIcon: 'http://www.elevateweb.co.uk/spinner.gif'
    });

    $('[data-fancybox="images"]').fancybox({
        thumbs: {
            autoStart: true
        },
        buttons: [
            'zoom',
            'close'
        ]
    });

    $('[data-fancybox="imagess"]').fancybox({
        thumbs: {
            autoStart: true
        },
        buttons: [
            'zoom',
            'close'
        ]
    });

    var $gallery = $('#gallery').gallerie({
        thumbboxTriggerWidth: 0.10,
        thumbboxSpeed: 0.5,
        imageEvent: 'click',
        elem: 'a.galary',
        wrapAround: true
    });

    var $gallery = $('#gallery2').gallerie({
        thumbboxTriggerWidth: 0.10,
        thumbboxSpeed: 0.5,
        imageEvent: 'click',
        elem: 'a.galary2',
        wrapAround: true
    });

    // xử lý hiện giỏ hàng.

    $('.top-cart-content-inter').hide();

    $('.add-cart').click(function(){
        $('.top-cart-content-inter').fadeIn(1000).delay("2500").fadeOut(1000);  
        return false;
      })

    // jqury cho nút đóng
    
      $('.black-bg').click(function(){
        $('.model').removeClass('noidunghienra');
        // xử lý modol di ra.
        $('.black-bg').removeClass('momodira');
      })

      $('#bottom_click').on('click', function(){
        $("html, body").animate({ scrollTop: $(document).height() }, 1000);          
      })

    $('#service_').on('click', function () { 
        $('html, body').animate({
            scrollTop: $("#service")
                .offset()
                .top - 100
        });
     })
});








