var clockShow = document.querySelector('.clockShow');
var startStopBtn = document.querySelector('.startStop');
var splitBtn = document.querySelector('.split');
var resetBtn = document.querySelector('.reset');
var watch = new Stopwatch(clockShow, startStopBtn);

startStopBtn.addEventListener( 'click', watch.startStop.bind(watch) );
splitBtn.addEventListener( 'click', watch.split.bind(watch, 'Split') );
resetBtn.addEventListener( 'click', watch.reset.bind(watch) );

function Stopwatch(elem, toggleBtn) {
  var time = 0;
  var interval;
  var offset;
  var count = 0;

  this.isOn = false;

  this.startStop = function () {
    if(!this.isOn) {
      interval = setInterval(update.bind(this), 1);
      offset = Date.now();
      this.isOn = true;
      toggleBtn.innerHTML = 'Stop';
    } else {
      this.split('Stop');
      clearInterval(interval);
      interval = null;
      this.isOn = false;
      toggleBtn.innerHTML = 'Start';
    }
  };

  this.split = function (stopOrSplit) {
    if (this.isOn) {
      var timePassed = delta();
      time += timePassed;
      var formatedTime = timeFormatter(time);
      var newElement = document.createElement('h2');
      var parent = document.body.querySelector('.wrapper');
      newElement.className = 'splitTime';
      newElement.innerHTML = count + ' ' + stopOrSplit + ': ' + formatedTime;

      parent.appendChild(newElement);

      count++;
    }
  };

  this.reset = function () {
    time = 0;
    update();
    this.isOn = false;
    toggleBtn.innerHTML = 'Start';
    removeSplitElements();
  };

  function update() {
    if (this.isOn) {
      var timePassed = delta();
      time += timePassed;
    }

    var formatedTime = timeFormatter(time);
    elem.innerHTML = formatedTime;
  }

  function delta() {
    var now = Date.now();
    var timePassed = now - offset;
    offset = now;
    return timePassed;
  }

  function timeFormatter(timeInMilliseconds) {
    var dateTime = new Date(timeInMilliseconds);
    var hours = dateTime.getUTCHours().toString();
    var minutes = dateTime.getMinutes().toString();
    var seconds = dateTime.getSeconds().toString();
    var milliseconds = dateTime.getMilliseconds().toString();

    if (hours.length < 2) {
      hours = '0' + hours;
    }

    if (minutes.length < 2) {
      minutes = '0' + minutes;
    }

    if (seconds.length < 2) {
      seconds = '0' + seconds;
    }

    if (milliseconds.length < 3) {
      if (milliseconds.length == 1) {
        milliseconds = '00' + milliseconds;
      } else {
        milliseconds = '0' + milliseconds;
      }
    }

    return hours + ':' + minutes + ':' + seconds + '.' + milliseconds;
  }

  function removeSplitElements() {
    var splitElem = document.querySelectorAll('.splitTime');
    var parent = document.body.querySelector('.wrapper');

    for (var i = 0; i < splitElem.length; i++) {
      parent.removeChild(splitElem[i]);
    }

    count = 1;
  }

}
