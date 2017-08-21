$(document).ready(function(){
  $('.carousel').slick({
    SlidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    draggable: false,
    pauseOnFocus: false,
    pauseOnHover: false
  });

  var farUserScrolled = 0;
  $(window).scroll(function(){
    var scrollTop = $(this).scrollTop();
    if (scrollTop - farUserScrolled > 50){
      var navbarHeight = $('.navbar').css('height');
      $('.navbar').animate({top: '-' + navbarHeight}, 150);
      farUserScrolled = scrollTop;
    } else if (farUserScrolled - scrollTop > 50){
      $('.navbar').animate({top: '0px'}, 150);
      farUserScrolled = scrollTop;
    }
  });
});
