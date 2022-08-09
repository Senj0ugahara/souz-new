$(document).ready(function() {
  // Header-menu scroll
  $('a[href^="#"]').click(function() {
    const target = $(this).attr('href')
    $('html, body').animate({
      scrollTop: $(target).offset().top
    }, {
      duration: 500,
      easing: 'linear',
    });
    return false
  })

  // burger
  $('.header__burger').on('click', function() {
    $('.header__burger-line').toggleClass('header__burger-line_active');
    $('.nav').toggleClass('nav--active');
  });

  // header container remove
  if(window.outerWidth <= 1679) {
    $('.header__container').removeClass('header__container');
  };

  //modes tabs
  $('.modes__btn[filter]').click(function() {
    if ($(this).attr('val') == 'off') {
      $('.modes__btn[filter]').attr('val', 'off').removeClass('modes__btn_active');
      $(this).attr('val', 'on').addClass('modes__btn_active');
      $('.modes__content > div').hide(300);
      $('.modes__content > div[filter=' +$(this).attr('filter') + ']').show(300);
    };
  });

  //modes-2 tabs
  $('.modes-2__btn[filter]').click(function() {
    if ($(this).attr('val') == 'off') {
      $('.modes-2__btn[filter]').attr('val', 'off').removeClass('modes-2__btn_active');
      $(this).attr('val', 'on').addClass('modes-2__btn_active');
      $('.modes-2__content > div').hide(300);
      $('.modes-2__content > div[filter=' +$(this).attr('filter') + ']').show(300);
    };
  }); 
});

// set-modal fancybox
$('[data-fancybox="set"]').fancybox({
  loop: true,
});

const swiper1 = new Swiper('.reviews__swiper', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,

  // Navigation arrows
  navigation: {
    nextEl: '.reviews-button-next',
    prevEl: '.reviews-button-prev',
  },

  breakpoints: {
    480: {
      slidesPerView: 1,
    },

    991: {
      slidesPerView: 3,
    },

    1550: {
      slidesPerView: 4,
    }
  }
});

const swiper2 = new Swiper('.modes-2-mobile__swiper', {
  loop: true,
  autoHeight: true,
  slidesPerView: 1,
  spaceBetween: 30,

  // Navigation arrows
  navigation: {
      nextEl: '.modes-2-mobile__icon_next',
      prevEl: '.modes-2-mobile__icon_prev',
  },
});