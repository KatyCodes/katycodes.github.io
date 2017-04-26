$(".resume-fold h3").siblings().hide();

$(document).ready(function(){
    $('#about').click(function(){
    $('.aboutme').show("slow");
    $('.intro').hide("slow");
    $('.resume').hide("slow");
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
    $('.style').css('background-color', '#F8F8F8')
  });

  $('#resume-btn').click(function(){
    $('.intro').hide("slow");
    $('.resume').show("slow");
    $('.aboutme').hide("slow");
  });

  $(".resume-fold > h3").click(function() {
    $(this).siblings().slideToggle("slow");
      if($(this).find("span").hasClass('glyphicon glyphicon-chevron-down')){
        $(this).find("span").addClass("glyphicon glyphicon-remove");
        $(this).find("span").removeClass("glyphicon-chevron-down");
    } else {
        $(this).find("span").addClass('glyphicon glyphicon-chevron-down');
        $(this).find("span").removeClass("glyphicon-remove");
    }
  });

});
