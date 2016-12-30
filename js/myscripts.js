$(document).ready(function(){
 //  var i = 1
 //   var timer = setInterval(function() { $('.katy').slideToggle()
 // }, 2000);
  // $('.katy').fadeToggle("slow");
    $('#about').click(function(){
    $('.aboutme').show("slow");
    $('.intro').hide("slow");
    $('.style').hide("slow");
  });
  $('#home').click(function(){
    $('.intro').show("slow");
    $('.aboutme').hide("slow");
    $('.style').hide("slow");
  });
  $('#style').click(function(){
    $('.intro').hide("slow");
    $('.style').show("slow");
    $('.aboutme').hide("slow");
    $('#style').css('background-color', '#F8F8F8')
  });
});
