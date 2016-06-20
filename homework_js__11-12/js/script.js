$(function () {

  $('.container').carousel({
    btnNext: '.carousel_arrow_right',
    btnPrev: '.carousel_arrow_left',
    visible: 4,
    rotateBy: 1
  });


  var html = $('.user_profile').html();
  var body = $('body');

  var userData = {
      fullName: 'Манойло Александр Юрьевич',
      avatar: 'img/avatar.jpg',
      position: 'Студент GoIT',
      objective: 'Хочу учить фронтенд, потому что:',
      component1: 'Заинтересован в сфере IT',
      component2: 'Нравится верстка сайтов',
      component3: 'Приятно видеть результаты своей работы',
      tel: '+38 066 1447244',
      profile: 'https://www.facebook.com/profile.php?id=100005621168614',
      feadback: 'Frontend - хороший старт для веб-программиста!'
    };

  var content = tmpl(html, userData);

  body.append(content);

});
