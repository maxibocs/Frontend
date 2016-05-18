var mainTest = {
  testTitle: 'Тест по программированию',
  btnTitle: 'Проверить мои результаты',
  questions: [
    {
      title: 'Вопрос №1',
      answers: [
        {
          text: 'Вариант ответа №1 &#10003;',
          correct: true
        },
        {
          text: 'Вариант ответа №2 	&#10007;',
          correct: false
        },
        {
          text: 'Вариант ответа №3 	&#10007;',
          correct: false
        }
      ]
    },
    {
      title: 'Вопрос №2',
      answers: [
        {
          text: 'Вариант ответа №1 &#10003;',
          correct: true
        },
        {
          text: 'Вариант ответа №2 	&#10007;',
          correct: false
        },
        {
          text: 'Вариант ответа №3 &#10003;',
          correct: true
        }
      ]
    },
    {
      title: 'Вопрос №3',
      answers: [
        {
          text: 'Вариант ответа №1 	&#10007;',
          correct: false
        },
        {
          text: 'Вариант ответа №2 	&#10007;',
          correct: false
        },
        {
          text: 'Вариант ответа №3 &#10003;',
          correct: true
        }
      ]
    },
    {
      title: 'Вопрос №4',
      answers: [
        {
          text: 'Вариант ответа №1 &#10003;',
          correct: true
        },
        {
          text: 'Вариант ответа №2 &#10003;',
          correct: true
        },
        {
          text: 'Вариант ответа №3 	&#10007;',
          correct: false
        }
      ]
    }
  ]
};

var strTest = JSON.stringify(mainTest);
localStorage.setItem('strTest', strTest);

$(function () {
  'use strict';
  var testData = JSON.parse(localStorage.getItem('strTest'));
  var html = $('.tests_form').html();
  var content = tmpl(html, testData);
  var $body = $('body');

  $body.append(content);

  var amountRight = 0;
  var amountBad = 0;
  var $modal;
  var $overlay;

  $('.test_btn').on('click', function (e) {

    var amountRightAnswers = 0;
    var amountCorrectAnswers = 0;

    e.preventDefault();
    showModal();
    $overlay.one('click', hideModal);

    for (var i = 0; i <  testData.questions.length; i++) {
      var input = $('input[data-index=' + i + ']');
      var question = testData.questions[i].title;
      var correctAmount = 0;
      var checkedElem = 0;

      for (var j = 0; j < testData.questions[i].answers.length; j++) {
        var elem = input[j];
        var answerVar = testData.questions[i].answers[j].correct;

        if (answerVar === true) {
          correctAmount += 1;
        }
        if ( elem.checked ) {
          if ( answerVar === true ) {
            amountRight += 1;
          } else {
            amountBad += 1;
          }
          checkedElem += 1;
        } else {
          amountBad += 1;
        }
        $(elem).removeAttr("checked");
      }

        if(correctAmount == amountRight && amountRight !== 0 &&
            amountBad != testData.questions[i].answers.length &&
            correctAmount == checkedElem) {
          $modal.append('<h3 class="right">' + question + '</h3>');
          amountRightAnswers += amountRight;
        } else {
          $modal.append('<h3 class="wrong">' + question + '</h3>');
        }

        amountCorrectAnswers += correctAmount;
        correctAmount = 0;
        amountRight = 0;
        amountBad = 0;
    }

    var rightStatistic = Math.round((amountRightAnswers/amountCorrectAnswers)*100);
    $modal.append('<h3>Правильных ответов - ' + rightStatistic + '%</h3>');

  });

  function showModal () {
    $modal = $('<div class="result_modal"><h2>Ваш результат :</h2></div>');
    $overlay = $('<div class="overlay_modal" title="Close results!"></div>');
    $body.append($overlay);
    $body.append($modal);
    $modal.animate({ top: "70%" }, 700);
  }
  function hideModal () {
    $modal.animate({ top: "-70%" }, 700, function () {
      $modal.remove();
      $overlay.remove();
    });
  }

});
