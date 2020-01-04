$('.navigation').on('click', '.mobile_menu', function () {
  $(".navigation ul").slideToggle(400);
});



jQuery(document).ready(function () {
  var mainSlider = new Swiper('.swiper-container', {
    autoplay: true,
    loop: true,
    speed: 1000

  })
});

jQuery(document).ready(function () {
  var textSlider = new Swiper('.swiper-container', {

    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    autoplay: true,
    loop: true,
    speed: 1000
  })
});

jQuery(window).resize(function () {
  const windowWidth = $(window).width();
  console.log(windowWidth);
  if(windowWidth > 540){
      $('.navigation ul').css({display : 'flex'})
  }
   else {
    $('.navigation ul').css({display : 'none'})
   }
});