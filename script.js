// alert($("h6").text());

if (window.matchMedia( "(max-width: 670px)" ).matches) {
  $(function(){
    $('.flow-chart__wrapper__top').click(function(){
      // $('.flow-chart__wrapper__top__right').slideDown();
      // $('.flow-chart__wrapper__top__right').slideUp();
      var $answer =$(this).find('.answer-a');
      if($answer.hasClass('open')){
        $answer.removeClass('open');
        $answer.slideUp();
        $(this).find('span').text('+');
      } else {
        $answer.addClass('open');
        $answer.slideDown();
        $(this).find('span').text('-');
        
      }
    });
  });
}else{
  $(function(){
    $('.answer-a').show();
  })};