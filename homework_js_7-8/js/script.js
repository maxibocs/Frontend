$(function () {

  var $tabs = $('.menu_link');
  var $content = $('.tabs_content');
  var $input = $('.tooltips_form');
  var $tooltips = $('.tooltips_text');
  var $tipsBtn = $('.tooltips_btn');

  $tabs.on('click', function (e) {
    var $action = $tabs.index(this);
    e.preventDefault();

    $('.menu_link_active').removeClass('menu_link_active');
    $(this).addClass('menu_link_active');

    $content.removeClass('tabs_content_active');
    $($content[$action]).addClass('tabs_content_active');
  });

  $input.hover(function () {
    var $action = $input.index(this);
    $($tooltips[$action]).fadeIn(600);
  },
  function () {
    var $action = $input.index(this);
    $($tooltips[$action]).fadeOut(600);
  });

  $($tipsBtn).on('click', function (e) {
    e.preventDefault();
    $($tooltips).fadeIn(600);
  });

});
