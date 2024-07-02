// 
// slier banner 
var swiper_banner = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var swiper_inc = new Swiper(".mySwiper1", {
    slidesPerView: 3.5,
    spaceBetween: 30,
    loop: true,
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 10
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 1.5,
            spaceBetween: 20
        },
        // when window width is >= 640px
        740: {
            slidesPerView: 2.5,
            spaceBetween: 30
        },
        1024: {
            slidesPerView: 3.5,
            spaceBetween: 30
        }
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".vector_right",
        prevEl: ".vector_left",
    },
});

var swiper_tb = new Swiper(".mySwiper2", {
    slidesPerView: 6,
    spaceBetween: 30,
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 10
        },
        // // when window width is >= 480px
        // 480: {
        //     slidesPerView: 3.5,
        //     spaceBetween: 30
        // },
        // when window width is >= 640px
        640: {
            slidesPerView: 6,
            spaceBetween: 30
        }
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".vector_right",
        prevEl: ".vector_left",
    },
});
// video fancybox
var fancyImages = function () {
    if ($(".fancy").length == 0) return;
    $(".fancy").fancybox({
        loop: true,
        buttons: ["zoom", "share", "slideShow", "fullScreen", "thumbs", "close"],
        thumbs: {
            loop: true,
            autoStart: false,
            axis: "x",
        },
    });
};

