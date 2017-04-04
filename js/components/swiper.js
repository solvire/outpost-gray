$(window).load(function(){
  /* One Item */
  var swiper = new Swiper('.js__swiper-one-item', {
    nextButton: '.js__swiper-btn--next',
    prevButton: '.js__swiper-btn--prev',
    speed: 2500,
    autoplay: 3000,
    loop: true,
    effect: 'fade',
    onTransitionStart: function (swiper) {
        $('.s-swiper h1').fadeOut('slow');
    },
    onSlideChangeStart: function (swiper) {
        $('.s-swiper h1').fadeIn(2500);
    }
  });

  /* Slider */
  var swiper = new Swiper('.js__swiper-slider', {
    pagination: '.js__swiper-pagination',
    paginationClickable: true,
    speed: 1000,
    autoplay: 3000,
    loop: true
  });

  // Swiper Clients
  var swiper = new Swiper('.js__swiper-clients', {
    slidesPerView: 5,
    spaceBetween: 50,
    loop: true,
    breakpoints: {
      1024: {
        slidesPerView: 4,
        spaceBetween: 50
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 40
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      600: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      480: {
        slidesPerView: 2,
        spaceBetween: 0
      }
    }
  });

  // Swiper News
  var swiper = new Swiper('.js__swiper-news', {
    pagination: '.js__swiper-pagination',
    paginationClickable: true,
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    breakpoints: {
      1024: {
        slidesPerView: 4,
        spaceBetween: 30
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      600: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      480: {
        slidesPerView: 1,
        spaceBetween: 0
      }
    }
  });

  /* Testimonials */
  var swiper = new Swiper('.js__swiper-testimonials', {
    pagination: '.js__swiper-fraction',
    paginationType: 'fraction',
    paginationClickable: true,
    nextButton: '.js__swiper-btn--next',
    prevButton: '.js__swiper-btn--prev',
    slidesPerView: 1,
    speed: 1000,
    autoplay: 3000,
    loop: true
  });
});