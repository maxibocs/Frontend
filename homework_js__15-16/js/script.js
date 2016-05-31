  $(document).ready(function() {
    'use strict';
    var searchData;
    var html;
    var content;

    $('.b_searchboxSubmit').click( function (e) {
      e.preventDefault();
      var serchVal = $('.b_searchbox').val();
      if (serchVal == 0) {
        $('#b_content').remove();
        return;
    }
      request(serchVal);

    });
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

  function Worker(){
      this.workingPlace ="";
      this.salary = 0;
    }

  function Human () {
    this.name = 'Jack';
    this.age = '20';
    this.sex = 'male';
    this.growth = '178cm';
    this.weight = '78kg';
  }
  Worker.prototype = new Human();

  Worker.prototype.works = function(workingPlace, salary){
    this.workingPlace = workingPlace;
    this.salary = salary;
  };

  var worker1 = new Worker();
  var worker2 = new Worker();

   worker1.works('Microsoft', '3000$');
   worker2.works("Google", '2000$');

   console.log(worker1, worker2);

  function Student () {
    this.studyPlace = "";
    this.scholarship = 0;
  }

  Student.prototype = new Human();

  Student.prototype.watchTVshows = function(studyPlace, scholarship){
    this.studyPlace = studyPlace;
    this.scholarship = scholarship;
  };

  var student1 = new Student();
  var student2 = new Student();

  student1.watchTVshows("Harvard", '200$');
  student2.watchTVshows("Cambridge", '150$');

  console.log(student1, student2);
