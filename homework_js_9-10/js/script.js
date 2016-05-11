/*----dropdown menu jQuery-----*/

$(document).ready(function() {
    $( '.dropdown' ).hover(
        function(){
            $(this).children('.sub-menu').slideDown(200);
        },
        function(){
            $(this).children('.sub-menu').slideUp(200);
        }
    );
});

/*-----jCarousel-----*/

$(function() {
  var $jcarousel = $('.jcarousel');

  $jcarousel.jcarousel({
    wrap: 'circular'
  })
  .jcarouselAutoscroll({
      interval: 4000,
      target: '+=1',
      autostart: true
  })
  .on('jcarousel:create jcarousel:reload', function() {
    var element = $(this),
      width = element.innerWidth();
      element.jcarousel('items').css('width', width + 'px');
    })
  .jcarousel({  });
  $('.jcarousel-prev').jcarouselControl({
    target: '-=1'
  });
  $('.jcarousel-next').jcarouselControl({
    target: '+=1'
  });
  $('.jcarousel-pagination')
  .on('jcarouselpagination:active', 'a', function() {
      $(this).addClass('active');
  })
  .on('jcarouselpagination:inactive', 'a', function() {
      $(this).removeClass('active');
  })
  .on('click', function(e) {
      e.preventDefault();
  })
  .jcarouselPagination({
      item: function(page) {
          return '<a href="#' + page + '">' + page + '</a>';
      }
  });

  $jcarousel
  .on('jcarousel:create jcarousel:reload', function() {
    var element = $(this),
    width = element.innerWidth();
    element.jcarousel('items').css('width', width + 'px');
  })
  .jcarousel({  });

/*------Select-------*/

  $("#country_id").selectbox();

});

/*------Checkbox-----*/

var $jq132 = jQuery.noConflict(true);

(function($) {

  $jq132(document).ready(function(){

    $jq132(".niceCheck").each(

      function() {

        changeCheckStart($jq132(this));

    });

});

function changeCheck(el){

  var input = el.find("input").eq(0);

  if(el.attr("class").indexOf("niceCheckDisabled")==-1)
  {
      if(!input.attr("checked")) {
      el.addClass("niceChecked");
      input.attr("checked", true);
    } else {
      el.removeClass("niceChecked");
      input.attr("checked", false).focus();
    }
  }

    return true;
}

function changeVisualCheck(input){

var wrapInput = input.parent();
  if(!input.attr("checked")) {
    wrapInput.removeClass("niceChecked");
  }
  else
  {
    wrapInput.addClass("niceChecked");
  }
}

function changeCheckStart(el){

try
{
var checkName = el.attr("name"),
    checkId = el.attr("id"),
    checkChecked = el.attr("checked"),
    checkDisabled = el.attr("disabled"),
    checkTab = el.attr("tabindex"),
    checkValue = el.attr("value");
  if(checkChecked)
    el.after("<span class='niceCheck niceChecked'>"+
      "<input type='checkbox'"+
      "name='"+checkName+"'"+
      "id='"+checkId+"'"+
      "checked='"+checkChecked+"'"+
      "value='"+checkValue+"'"+
      "tabindex='"+checkTab+"' /></span>");
  else
    el.after("<span class='niceCheck'>"+
      "<input type='checkbox'"+
      "name='"+checkName+"'"+
      "id='"+checkId+"'"+
      "value='"+checkValue+"'"+
      "tabindex='"+checkTab+"' /></span>");

  if(checkDisabled)
  {
    el.next().addClass("niceCheckDisabled");
    el.next().find("input").eq(0).attr("disabled","disabled");
  }

  el.next().bind("mousedown", function(e) { changeCheck($jq132(this)) });
  el.next().find("input").eq(0).bind("change", function(e) { changeVisualCheck($jq132(this))});
  if($jq132.browser.msie)
  {
    el.next().find("input").eq(0).bind("click", function(e) { changeVisualCheck($jq132(this)) });
  }
  el.remove();
}
catch(e)
{

}

  return true;
}

}($jq132));
