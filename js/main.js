// OPEN CONTACT
if(screen.width > 850) {
  $('.contact__btn, .button--about, .contact__btn--menu').click(function() {
    $('.contact__modal').toggleClass('hide');
    $('body').css({
      'animation': 'hideScrollBar',
      'animation-delay': '1s',
      'animation-duration': '0s',
      'animation-fill-mode': 'both',
    });
    $('.header__nav, .header__content, .social-vertical-stripe').css({
      'animation': 'hideHeader',
      'animation-delay': '0s',
      'animation-duration': '0.5s',
      'animation-fill-mode': 'both',
    });
    $('.contact__modal-block-wrap').css({
      'animation': 'showShadow',
      'animation-delay': '0.3s',
      'animation-duration': '0.5s',
      'animation-fill-mode': 'both',
    });
    $('.contact__modal-block.left').css({
      'animation': 'moveModalBlockForvardLeft',
      'animation-delay': '0s',
      'animation-duration': '0.5s',
      'animation-fill-mode': 'both',
    });
    $('.contact__modal-block.right').css({
      'animation': 'moveModalBlockForvardRight',
      'animation-delay': '0.2s',
      'animation-duration': '0.5s',
      'animation-fill-mode': 'both',
    });
  });
} else {
  $('.contact__btn, .button--about, .contact__btn--menu').click(function() {
    $('.contact__modal').toggleClass('hide');
    $('body').css({
      'position': 'fixed',
      'animation': 'hideScrollBar',
      'animation-delay': '0s',
      'animation-duration': '0s',
      'animation-fill-mode': 'both',
    });
    $('.header__nav, .header__content, .social-vertical-stripe').css({
      'animation': 'hideHeader',
      'animation-delay': '0s',
      'animation-duration': '0.5s',
      'animation-fill-mode': 'both',
    });
    $('.contact__modal-block-wrap').css({
      'animation': 'showShadow',
      'animation-delay': '0.3s',
      'animation-duration': '0.5s',
      'animation-fill-mode': 'both',
    });
    $('.contact__modal-block.left').css({
      'animation': 'moveModalBlockForvardLeft_mob',
      'animation-delay': '0.1s',
      'animation-duration': '0.5s',
      'animation-fill-mode': 'both',
    });
    $('.contact__modal-block.right').css({
      'animation': 'moveModalBlockForvardRight_mob',
      'animation-delay': '0s',
      'animation-duration': '0.5s',
      'animation-fill-mode': 'both',
    });
  });
}

// CLOSE CONTACT
if(screen.width > 850) {
  $('.header__close--contact').click(function() {
    setTimeout(function () {
      $('.contact__modal').toggleClass('hide');
    }, 900);
    $('body').css({
      'animation': 'showScrollBar',
      'animation-delay': '0.8s',
      'animation-duration': '0s',
      'animation-fill-mode': 'both',
    });
    $('.header__nav, .header__content, .social-vertical-stripe').css({
      'animation': 'showHeader',
      'animation-delay': '0s',
      'animation-duration': '0.5s',
      'animation-fill-mode': 'both',
    });
    $('.contact__modal-block-wrap').css({
      'animation': 'hideShadow',
      'animation-delay': '0s',
      'animation-duration': '0.5s',
      'animation-fill-mode': 'both',
    });
    $('.contact__modal-block.left').css({
      'animation': 'moveModalBlockBackwardLeft',
      'animation-delay': '0s',
      'animation-duration': '0.5s',
      'animation-fill-mode': 'both',
    });
    $('.contact__modal-block.right').css({
      'animation': 'moveModalBlockBackwardRight',
      'animation-delay': '0s',
      'animation-duration': '0.5s',
      'animation-fill-mode': 'both',
    });
  });
} else {
  $('.header__close--contact').click(function() {
    setTimeout(function () {
      $('.contact__modal').toggleClass('hide');
    }, 900);
    $('body').css({
      'position': 'static',
      'animation': 'showScrollBar',
      'animation-delay': '0s',
      'animation-duration': '0s',
      'animation-fill-mode': 'both',
    });
    $('.header__nav, .header__content, .social-vertical-stripe').css({
      'animation': 'showHeader',
      'animation-delay': '0s',
      'animation-duration': '0.5s',
      'animation-fill-mode': 'both',
    });
    $('.contact__modal-block-wrap').css({
      'animation': 'hideShadow',
      'animation-delay': '0s',
      'animation-duration': '0.5s',
      'animation-fill-mode': 'both',
    });
    $('.contact__modal-block.left, .contact__modal-block.right').css({
      'animation': 'moveModalBlockBackward_mob',
      'animation-delay': '0s',
      'animation-duration': '0.5s',
      'animation-fill-mode': 'both',
    });
  });
}

// OPEN MOBILE MENU
$('.header__burger').click(function() {
  $('.mobile-menu').toggleClass('hide');
  $('.header__close--menu').addClass('header__close--menu-active');
  $('body').css({
    'animation': 'hideScrollBar',
    'animation-delay': '0s',
    'animation-duration': '0s',
    'animation-fill-mode': 'both',
  });
  $('.mobile-menu').css({
    'animation': 'openMobileMenu',
    'animation-delay': '0',
    'animation-duration': '0.5s',
    'animation-fill-mode': 'both',
  });
  $('.header__close--menu').css({
    'animation': 'openHeaderClose',
    'animation-delay': '0.5s',
    'animation-duration': '0.5s',
    'animation-fill-mode': 'both',
  });
  $('.header__mobile-nav').css({
    'animation': 'openHeaderNav',
    'animation-delay': '0.2s',
    'animation-duration': '0.5s',
    'animation-fill-mode': 'both',
  });
  $('.header__mobile-social-nav').css({
    'animation': 'openHeaderSocial',
    'animation-delay': '0.2s',
    'animation-duration': '0.5s',
    'animation-fill-mode': 'both',
  });
});

// CLOSE MOBILE MENU
$('.header__close--menu-active, .contact__btn--menu').click(function() {
  setTimeout(function () {
    $('.mobile-menu').toggleClass('hide');
  }, 900);
  $('.header__close--menu').removeClass('header__close--menu-active');
  $('body').css({
    'animation': 'showScrollBar',
    'animation-delay': '0s',
    'animation-duration': '0s',
    'animation-fill-mode': 'both',
  });
  $('.mobile-menu').css({
    'animation': 'closeMobileMenu',
    'animation-delay': '0.4s',
    'animation-duration': '0.5s',
    'animation-fill-mode': 'both',
  });
  $('.header__close--menu').css({
    'animation': 'closeHeaderClose',
    'animation-delay': '0s',
    'animation-duration': '0.5s',
    'animation-fill-mode': 'both',
  });
  $('.header__mobile-nav').css({
    'animation': 'closeHeaderNav',
    'animation-delay': '0s',
    'animation-duration': '0.5s',
    'animation-fill-mode': 'both',
  });
  $('.header__mobile-social-nav').css({
    'animation': 'closeHeaderSocial',
    'animation-delay': '0s',
    'animation-duration': '0.5s',
    'animation-fill-mode': 'both',
  });
})

// Scroll

$("body").on('click', '[href*="exp"]', function(e){
  var fixed_offset = 20;
  $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
  e.preventDefault();
});

$("body").on('click', '[href*="main"]', function(e){
  var fixed_offset = 20;
  $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 800);
  e.preventDefault();
});