
const birthday = '10 July 2022';
const birthdayDate = new Date(birthday);

function formatTime(t)
{
  return t < 10 ? (`0${t}`) : t;
}

function ConvertSectoDay(n)
{
        var days = parseInt( n / (24 * 3600));

        n = n % (24 * 3600);
        var hours = parseInt(n / 3600);

        n %= 3600;
        var minutes = n / 60;
        console.log(Math.floor(minutes));
        n %= 60;
        var seconds = n;
        return [days, hours, Math.floor(minutes), Math.floor(seconds)];
        console.log(days + ' ' + hours + ' ' + minutes.toFixed() + ' ' + seconds.toFixed() + ' ' );
}

function Countdown()
{
  const currDate = new Date();
  var time = (birthdayDate - currDate) / 1000;
  var timeArray = ConvertSectoDay(time);
  var daysEl = document.getElementById('days');
  var hoursEl = document.getElementById('hours');
  var minutesEl = document.getElementById('minutes');
  var secondsEl = document.getElementById('seconds');
  daysEl.innerHTML = timeArray[0];
  hoursEl.innerHTML = timeArray[1];
  minutesEl.innerHTML = timeArray[2];
  secondsEl.innerHTML = formatTime(timeArray[3]);
}
setInterval(Countdown, 1000);
















//
