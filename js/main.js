///////////// FIND-BUTTON/////////////
$(document).ready(function () {
    $('.nav__find-btn--open').on('click', function () {
        $('.nav__find').removeClass('nav__find--close');
      });

      $('.nav__find-btn-close').on('click', function () {
        $('.nav__find').addClass('nav__find--close');
      });
    });


///////////// REGISTRATION FORM/////////////

    $(document).ready(function() {
      $('button.nav__profile').click( function(event){
        event.preventDefault();
        $('.background').fadeIn(297, function(){
          $('.registration-container') 
          .css('display', 'block')
          .animate({opacity: 1}, 198);
        });
      });
    
      $('.registration__entrance-btn').click( function(){
        $('.entrance-container').animate({opacity: 1}, 198,
          function(){
            $(this).css('display', 'block');
            $('.registration-container').css('display', 'none');
        });
      });

      $('.entrance__registration-btn').click( function(){
        $('.registration-container').animate({opacity: 1}, 198,
          function(){
            $(this).css('display', 'block');
            $('.entrance-container').css('display', 'none');
        });
      });

      $('.entrance__forget-pass--forget').click( function(){
        $('.entrance-container').animate({opacity: 1}, 198,
          function(){
            $(this).css('display', 'block');
            $('.entrance-container--forget').css('display', 'none');
        });
      });

      $('.entrance__registration-btn--forget').click( function(){
        $('.registration-container').animate({opacity: 1}, 198,
          function(){
            $(this).css('display', 'block');
            $('.entrance-container--forget').css('display', 'none');
        });
      });

      $('.entrance__forget-pass').click( function(){
        $('.entrance-container--forget').animate({opacity: 1}, 198,
          function(){
            $(this).css('display', 'block');
            $('.entrance-container').css('display', 'none');
        });
      });

      $('.entrance__entrance-btn--forget').click( function(){
        $('.recovery-container').animate({opacity: 1}, 198,
          function(){
            $(this).css('display', 'block');
            $('.entrance-container--forget').css('display', 'none');
        });
      });

      $('.recovery__registration-btn').click( function(){
        $('.registration-container').animate({opacity: 1}, 198,
          function(){
            $(this).css('display', 'block');
            $('.recovery-container').css('display', 'none');
        });
      });

      $('.recovery__entrance-btn').click( function(){
        $('.entrance-container').animate({opacity: 1}, 198,
          function(){
            $(this).css('display', 'block');
            $('.recovery-container').css('display', 'none');
        });
      });

      $('.registration__close, .entrance__close, .entrance__close--forget, .recovery__close, .background').click( function(){
        $('.registration-container, .entrance-container, .entrance-container--forget, .recovery-container').animate({opacity: 0}, 198,
          function(){
            $(this).css('display', 'none');
            $('.background').fadeOut(297);
        });
      });
    });

///////////// PERSONAL BUTTONS ORDER/////////////

    $(function () {

      $('.personal__block-button-current').on('click', function () {
        $('.order').addClass('disactive');
        $('.personal__block-button-current_container').removeClass('disactive');
        $('.personal__block-button-completed').removeClass('active--btn');
        $(this).addClass('active--btn');
      });
    
      $('.personal__block-button-completed').on('click', function () {
        $('.order').addClass('disactive');
        $('.personal__block-button-completed_container').removeClass('disactive');
        $('.personal__block-button-current').removeClass('active--btn');
        $(this).addClass('active--btn');
      });
    });
///////////// BUTTONS BLOG/////////////
$(function () {

    $('#blog__btn-tutorial').on('click', function () {
      $('.sector').addClass('disactive');
      $('.blog__tutorial').removeClass('disactive');
      $('.blog__btn').removeClass('active--btn');
      $(this).addClass('active--btn');
    });
  
    $('#blog__btn-news').on('click', function () {
      $('.sector').addClass('disactive');
      $('.blog__news').removeClass('disactive');
      $('.blog__btn').removeClass('active--btn');
      $(this).addClass('active--btn');
    });

    $('#blog__btn-questions').on('click', function () {
      $('.sector').addClass('disactive');
      $('.blog__questions').removeClass('disactive');
      $('.blog__btn').removeClass('active--btn');
      $(this).addClass('active--btn');
    });
  });

///////////// TUTORIAL BUTTONS/////////////
    $(function () {
      
      $('#turka').on('click', function () {
        $('.blog__tutorial-section').addClass('disactive');
        $('#blog__tutorial-sort--turka').removeClass('disactive');
        $('.blog__tutorial-sort--btn').removeClass('active--btn');
        $(this).addClass('active--btn');
    });

      $('#french').click(function(){
        $('.blog__tutorial-section').addClass('disactive');
        $('#blog__tutorial-sort--french').removeClass('disactive');
        $('.blog__tutorial-sort--btn').removeClass('active--btn');
        $(this).addClass('active--btn');
    });

      $('#makka').on('click', function () {
        $('.blog__tutorial-section').addClass('disactive');
        $('#blog__tutorial-sort--makka').removeClass('disactive');
        $('.blog__tutorial-sort--btn').removeClass('active--btn');
        $(this).addClass('active--btn');
    });

      $('#espresso').click(function(){
        $('.blog__tutorial-section').addClass('disactive');
        $('#blog__tutorial-sort--espresso').removeClass('disactive');
        $('.blog__tutorial-sort--btn').removeClass('active--btn');
        $(this).addClass('active--btn');
    });

      $('#voronka').on('click', function () {
        $('.blog__tutorial-section').addClass('disactive');
        $('#blog__tutorial-sort--voronka').removeClass('disactive');
        $('.blog__tutorial-sort--btn').removeClass('active--btn');
        $(this).addClass('active--btn');
    });

      $('#aeropress').click(function(){
        $('.blog__tutorial-section').addClass('disactive');
        $('#blog__tutorial-sort--aeropress').removeClass('disactive');
        $('.blog__tutorial-sort--btn').removeClass('active--btn');
        $(this).addClass('active--btn');
    });

      $('#cup').on('click', function () {
        $('.blog__tutorial-section').addClass('disactive');
        $('#blog__tutorial-sort--cup').removeClass('disactive');
        $('.blog__tutorial-sort--btn').removeClass('active--btn');
        $(this).addClass('active--btn');
    });

      $('#machine').click(function(){
        $('.blog__tutorial-section').addClass('disactive');
        $('#blog__tutorial-sort--machine').removeClass('disactive');
        $('.blog__tutorial-sort--btn').removeClass('active--btn');
        $(this).addClass('active--btn');
    });
  });
     

  /////////////BLOG__NEWS SHOW MORE/////////////
  $(function () {

    $('.blog__news-container--item_seemore').on('click', function () {
        $('.blog__news-container--more').slideToggle(500);
        if($(this).text() == 'Показать еще')
    {
        $(this).text('Скрыть');
    }
    else
    {
        $(this).text('Показать еще');   
    }
      });
    });

///////////// BLOG--QUESTIONS/////////////
    $(function () {
      $(".click1").click(function () {
        $('.for__open1').slideToggle(500);
      });
      $(".click2").click(function () {
        $('.for__open2').slideToggle(500);
      });
      $(".click3").click(function () {
        $('.for__open3').slideToggle(500);
      });
      $(".click4").click(function () {
        $('.for__open4').slideToggle(500);
      });
      $(".click5").click(function () {
        $('.for__open5').slideToggle(500);
      });
  });

///////////// SLIDER-CONTAINERS/////////////

  $(function () {
    $('.top__slider').slick({
        dots: true,
        arrows: false,
        fade: true,
        autoplay: true
    });

    $('.discount-good__goods').slick({
        slidesToShow:3,
        slidesToScroll:3,
        dots: false,
        arrows: true,
        centerMode: false,
        autoplay: false
    });
      })
///////////// CONTACT-BUTTONS/////////////
$(document).ready(function() {
document.getElementById('contact__btn-contacts').onclick = function() {
    document.getElementById('contact__btn-contacts').classList.add('background-btn--active');
    document.getElementById('contact__btn-magazine').classList.remove('background-btn--active');
    document.getElementById('contact__container-mag').classList.add('close');
    document.getElementById('contact__container-info').classList.remove('close');
    };
 document.getElementById('contact__btn-magazine').onclick = function() {
  document.getElementById('contact__btn-magazine').classList.add('background-btn--active');
  document.getElementById('contact__btn-contacts').classList.remove('background-btn--active');
    document.getElementById('contact__container-info').classList.add('close');
    document.getElementById('contact__container-mag').classList.remove('close');
    };
});

