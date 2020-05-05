
  var daylist = ['Sunday', 'Monday', 'Thuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturnday'];
  var body = document.getElementsByTagName('body')[0];
  var el = document.createElement('h2');
  var elTwo = document.createElement('h2');
  body.appendChild(el);
  body.appendChild(elTwo);

  window.onload = timer();
  setInterval(timer, 1000);
  function timer() {
    var today = new Date();
    var day = today.getDay();
    var hour = today.getHours();
    var minute = today.getMinutes();
    var second = today.getSeconds();
    el.innerHTML = 'Today is ' + daylist[day] + '.';
    elTwo.innerHTML = 'Current time is ' + hour + ':' + minute + ':' + second + '.';
  }
