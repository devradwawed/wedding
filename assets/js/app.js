

$(document).ready(function () {
  //slider
  $('header .owl-carousel').owlCarousel({
    loop:false,
    margin:40,
    autoWidth:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true,
            loop:true
        },
        600:{
            items:3,
            nav:true,
            loop:true
        },
        1000:{
            items:3,
            nav:true
            
        }
    }
  })
  $('.countdown').dsCountDown({
    endDate: new Date("may 5, 2022 10:31:00")
    });
})