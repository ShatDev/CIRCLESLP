$(function () {
  const introHeight = document.querySelector('.intro').offsetHeight;
  const topButton = document.getElementById('top-button');
  const $topButton = $('#top-button');

  window.addEventListener(
    'scroll',
    function () {
      if (window.scrollY > introHeight) {
        $topButton.fadeIn();
      } else {
        $topButton.fadeOut();
      }
    },
    false
  );

  topButton.addEventListener('click', function () {
    $('html, body').animate({
      scrollTop: 0
    }, 500);
  });

  window.sr = ScrollReveal({
    reset: false,
    duration: 600,
    easing: 'cubic-bezier(.694,0,.335,1)',
    scale: 1,
    viewFactor: 0.3,
  });

  sr.reveal('.background');
  sr.reveal('.skills');
  sr.reveal('.experience', {
    viewFactor: 0.2
  });
  sr.reveal('.featured-projects', {
    viewFactor: 0.1
  });
  sr.reveal('.other-projects', {
    viewFactor: 0.05
  });
});

if (typeof sr == 'undefined') {
  window.sr = ScrollReveal({
    duration: 1500,
    delay: 50
  });
}
Royal_Preloader.config({
  onComplete: function () {
    triggerReveals();
  }
});

function triggerReveals() {
  sr.reveal('.bottomReveal', {
    origin: 'bottom'
  }).reveal('.leftReveal', {
    origin: 'left'
  }).reveal('.rightReveal', {
    origin: 'right'
  }).reveal('.topReveal', {
    origin: 'top'
  });

  sr.reveal('.rotateBottomReveal', {
    origin: 'bottom',
    rotate: {
      x: 90
    }
  }).reveal('.rotateLeftReveal', {
    origin: 'left',
    rotate: {
      x: 90
    }
  }).reveal('.rotateRightReveal', {
    origin: 'right',
    rotate: {
      x: 90
    }
  }).reveal('.rotateTopReveal', {
    origin: 'top',
    rotate: {
      x: 90
    }
  })

  sr.reveal('.scaleReveal', {
    origin: 'top',
    scale: 0.6
  });
}

$(document).ready(function () {
  equalHeight($('#team .team-box .member-profile'));
});

$(window).resize(function () {
  equalHeight($('#team .team-box .member-profile'));
});

$('.navbar a').on('click', function (e) {
  if (this.hash !== '') {
    e.preventDefault();

    const hash = this.hash;

    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 800);
  }
})

$('.know-btn').on('click', function (e) {
  if (this.hash !== '') {
    e.preventDefault();

    const hash = this.hash;

    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 800);
  }
})

$(function () {
  $(window).scroll(function () {
    if ($(".navbar").offset().top > 50) {
      $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
      $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
  });

  $('a.page-scroll').bind('click', function (event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
  });

  // Closes the Responsive Menu on Menu Item Click
  $('.navbar-collapse ul li a').click(function () {
    $('.navbar-toggle:visible').click();
  });

  $("#to-top").mouseover(function () {
    $("#to-top-copy").animate({
      opacity: "1"
    }, "slow");
  });
  $("#to-top").mouseout(function () {
    $("#to-top-copy").animate({
      opacity: "0"
    }, "slow");
  });
});

Royal_Preloader.config({
  mode: 'progress',
  showProgress: true,
  background: '#171c28'
});