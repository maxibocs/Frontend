  $(document).ready(function() {
    'use strict';
    var searchData;
    var html;
    var content;

    $('.b_searchboxSubmit').click( function (e) {
      e.preventDefault();
      var serchVal = $('.b_searchbox').val();
      request(serchVal);
    });



    Worker.prototype = new Human();
    Student.prototype = new Human();

    var newWorker = new Worker();
    var newStudent = new Student();
    var newWorker1 = new Worker();
    var newStudent1 = new Student();

    console.log(newWorker);
    console.log(newStudent);
    console.log('age: ',newWorker1.age);
    console.log('name: ',newStudent1.name);
  });

  function request(search) {
    var params = {
      "q": search,
      "count": "10",
      "offset": "0",
      "mkt": "en-us",
      "safesearch": "Moderate"
    };

    $.ajax({
      url: "https://bingapis.azure-api.net/api/v5/search/?" + $.param(params),
      beforeSend: function(xhrObj){
          xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key","8874b9a74fe74a4394c42e6d9f7119c6");

      },
      type: "GET",
      data: "{body}",

    })
    .done(function(data) {
      searchData = data.webPages;
      if (searchData !== undefined){

      html = $('.block-content').html();
      content = tmpl(html, searchData);

      $('#b_content').remove();
      $('body').append(content);
    } else {
      html = $('.block-content2').html();

      $('#b_content').remove();
      $('body').append(tmpl(html));
    }
  });
  }

  function Human () {
    this.name = 'Jack';
    this.age = '20';
    this.sex = 'male';
    this.growth = '178cm';
    this.weight = '78kg';
  }
  function Worker () {
    this.workingPlace = 'Microsoft';
    this.salary = '2000$';
    this.toWork = function () {
      console.log(' work!');
    };
  }
  function Student () {
    this.studyPlace = 'KNU';
    this.scholarship = '100$';
    this.toWatch = function () {
      console.log('Let`s watch!');
    };
  }
