//    jquery js raw code    //


// $(document).ready(function(){
  
//  $('#all').click(function(){
//     $('#appDesign').show(400);
//     $('#webDesign').show(400);
//     $('#uiDesign').show(400);
//     $('#Photoshop').show(400);
//     $('#motionGraphics').show(400);
//     $('#seoExp').show(400);
//  });

//   $('#app').click(function(){
//     $('#appDesign').show(400);
//     $('#webDesign').hide(400);
//     $('#uiDesign').hide(400);
//     $('#Photoshop').hide(400);
//     $('#motionGraphics').hide(400);
//     $('#seoExp').hide(400);
//  });

//     $('#web').click(function(){
//     $('#appDesign').hide(400);
//     $('#webDesign').show(400);
//     $('#uiDesign').hide(400);
//     $('#Photoshop').hide(400);
//     $('#motionGraphics').hide(400);
//     $('#seoExp').hide(400);
//  });

//     $('#ui').click(function(){
//     $('#appDesign').hide(400);
//     $('#webDesign').hide(400);
//     $('#uiDesign').show(400);
//     $('#Photoshop').hide(400);
//     $('#motionGraphics').show(400);
//     $('#seoExp').hide(400);
//  });

//     $('#ps').click(function(){
//     $('#appDesign').hide(400);
//     $('#webDesign').hide(400);
//     $('#uiDesign').hide(400);
//     $('#Photoshop').show(400);
//     $('#motionGraphics').hide(400);
//     $('#seoExp').show(400);
//  });

// });



$(document).ready(function(){
  
 $('#allBtn').click(function(){
    $('#appDesign').show(1000);
    $('#webDesign').show(1000);
    $('#uiDesign').show(1000);
    $('#Photoshop').show(1000);
    $('#motionGraphics').show(1000);
    $('#seoExp').show(1000);
 });

  $('#appBtn').click(function(){
    $('#appDesign').show(1000);
    $('#webDesign').hide(1000);
    $('#uiDesign').hide(1000);
    $('#Photoshop').hide(1000);
    $('#motionGraphics').hide(1000);
    $('#seoExp').hide(1000);
 });

    $('#webBtn').click(function(){
    $('#appDesign').hide(1000);
    $('#webDesign').show(1000);
    $('#uiDesign').hide(1000);
    $('#Photoshop').hide(1000);
    $('#motionGraphics').hide(1000);
    $('#seoExp').hide(1000);
 });

    $('#uiBtn').click(function(){
    $('#appDesign').hide(1000);
    $('#webDesign').hide(1000);
    $('#uiDesign').show(1000);
    $('#Photoshop').hide(1000);
    $('#motionGraphics').show(1000);
    $('#seoExp').hide(1000);
 });

    $('#psBtn').click(function(){
    $('#appDesign').hide(1000);
    $('#webDesign').hide(1000);
    $('#uiDesign').hide(1000);
    $('#Photoshop').show(1000);
    $('#motionGraphics').hide(1000);
    $('#seoExp').show(1000);
 });

});



  //   // Gallery filter Jquery codes 
  //   var $grid = $('.grid').isotope({

  //   });

  //   // filter items on button click 
  //   $('.gallery-btn-area').on( 'click', 'li' , function() {
  //     $(this).addClass('active').siblings().removeClass('active');
  //     var filterValue = $(this).attr('data-filter');
  //     $grid.isotope({ filter: filterValue });
  // });
    
  //   $('.grid').isotope({
  //    itemSelector: '.gallery-item',
  //    percentPosition: true,
  //    masonry: {
  //     // use outer width of grid-sizer for cloumnwidth
  //     columnWidth:'.gitem'
  //    }

  //   });



    // $('.owl-carousel').owlCarousel({
    //   loop:true,
    //   margin:10,
    //   nav:true,
    //   dots:true,
    //   autoplay:true,
    //   autoplayTimeout:2000,
    //   responsive:{
    //       0:{
    //           items:1
    //       },
    //       600:{
    //           items:1
    //       },
    //       1000:{
    //           items:1
    //       }
    //   }
    // });



$(document).ready(function(){

  $(".jquery .fa-plus").click(function(){
    $(".jquery p").slideDown("fast");
    $(".jquery .fa-plus").hide();
  });

    $(".jquery h1").click(function(){
    $(".jquery p").slideDown("fast");
    $(".jquery .fa-plus").hide();
  });

  $(".jquery p").click(function(){
    $(".jquery p").slideUp("fast");
    $(".jquery .fa-plus").show("fast");
  });

});





$(document).ready(function(){

   $('#tab02').hide();
    $('#tab03').hide();

 $('#tab1').click(function(){
    $('#tab01').show();
    $('#tab02').hide();
    $('#tab03').hide();

 });

  $('#tab2').click(function(){
    $('#tab01').hide();
    $('#tab02').show();
    $('#tab03').hide();

 });

   $('#tab3').click(function(){
    $('#tab01').hide();
    $('#tab02').hide();
    $('#tab03').show();

 });

});







 
  

  function toggle(){
   var bar = document.querySelector(".menu-sec");
   bar.classList.add('active');
  }
  function toggle2(){
   var bar = document.querySelector(".menu-sec");
   bar.classList.remove('active');
  }






