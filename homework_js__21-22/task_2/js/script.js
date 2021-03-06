'use strict';

var mainTest = {
  testTitle: 'Тест по программированию',
  btnTitle: 'Проверить мои результаты',
  questions: [{
    title: 'Вопрос №1',
    answers: [{
      text: 'Вариант ответа №1 &#10003;',
      correct: true
    }, {
      text: 'Вариант ответа №2 	&#10007;',
      correct: false
    }, {
      text: 'Вариант ответа №3 	&#10007;',
      correct: false
    }]
  }, {
    title: 'Вопрос №2',
    answers: [{
      text: 'Вариант ответа №1 &#10003;',
      correct: true
    }, {
      text: 'Вариант ответа №2 	&#10007;',
      correct: false
    }, {
      text: 'Вариант ответа №3 &#10003;',
      correct: true
    }]
  }, {
    title: 'Вопрос №3',
    answers: [{
      text: 'Вариант ответа №1 	&#10007;',
      correct: false
    }, {
      text: 'Вариант ответа №2 	&#10007;',
      correct: false
    }, {
      text: 'Вариант ответа №3 &#10003;',
      correct: true
    }]
  }, {
    title: 'Вопрос №4',
    answers: [{
      text: 'Вариант ответа №1 &#10003;',
      correct: true
    }, {
      text: 'Вариант ответа №2 &#10003;',
      correct: true
    }, {
      text: 'Вариант ответа №3 	&#10007;',
      correct: false
    }]
  }]
};

var strTest = JSON.stringify(mainTest);
localStorage.setItem('strTest', strTest);

$(function () {
  var testData = JSON.parse(localStorage.getItem('strTest'));
  var html = $('.tests_form').html();
  var content = tmpl(html, testData);
  var $body = $('body');

  $body.append(content);

  var amountRight = 0;
  var amountBad = 0;
  var $modal = void 0;
  var $overlay = void 0;
  var i = 0;

  $('.test_btn').on('click', function (e) {

    var amountRightAnswers = 0;
    var amountCorrectAnswers = 0;

    e.preventDefault();
    showModal();
    $overlay.one('click', hideModal);

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = testData.questions[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var questions = _step.value;

        var input = $('input[data-index=' + i + ']');
        var question = questions.title;
        var correctAmount = 0;
        var checkedElem = 0;
        var j = 0;

        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = questions.answers[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var answers = _step2.value;

            var elem = input[j];
            var answerVar = answers.correct;

            if (answerVar === true) {
              correctAmount += 1;
            }
            if (elem.checked) {
              if (answerVar === true) {
                amountRight += 1;
              } else {
                amountBad += 1;
              }
              checkedElem += 1;
            } else {
              amountBad += 1;
            }
            $(elem).removeAttr("checked");
            j++;
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }

        if (correctAmount == amountRight && amountRight !== 0 && amountBad != questions.answers.length && correctAmount == checkedElem) {
          $modal.append('<h3 class="right">' + question + '</h3>');
          amountRightAnswers += amountRight;
        } else {
          $modal.append('<h3 class="wrong">' + question + '</h3>');
        }

        amountCorrectAnswers += correctAmount;
        correctAmount = 0;
        amountRight = 0;
        amountBad = 0;
        i++;
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    i = 0;

    var rightStatistic = Math.round(amountRightAnswers / amountCorrectAnswers * 100);
    $modal.append('<h3>Правильных ответов - ' + rightStatistic + '%</h3>');
  });

  function showModal() {
    $modal = $('<div class="result_modal"><h2>Ваш результат :</h2></div>');
    $overlay = $('<div class="overlay_modal" title="Close results!"></div>');
    $body.append($overlay);
    $body.append($modal);
    $modal.animate({ top: "70%" }, 700);
  }
  function hideModal() {
    $modal.animate({ top: "-70%" }, 700, function () {
      $modal.remove();
      $overlay.remove();
    });
  }
});
