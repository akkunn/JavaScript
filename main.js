'use strict';
{
  let display = document.getElementById('display');
  let start = document.getElementById('start');
  let stop = document.getElementById('stop');
  let reset = document.getElementById('reset');

  let hours = 0;
  let minutes = 0;
  let seconds = 0;
  let milliseconds = 0;

  let setTime;

  const displayTime = function() {
    return display.innerHTML = hours + ":" + minutes + ":" + seconds + ":" + milliseconds;
  };

  function stopWatch() {
    milliseconds++;
    if (milliseconds == 10) {
      seconds++;
      milliseconds = 0;
      if (seconds == 60) {
        minutes++;
        seconds = 0;
        if (minutes == 60) {
          hours++;
          minutes = 0;
        }
      }
    }
    displayTime();
    setTime = setTimeout(stopWatch, 100)
  };


  start.addEventListener('click', () => {
    stopWatch();
    start.classList.toggle('invalid');
    stop.classList.toggle('invalid');
    reset.classList.add('invalid');
  });

  stop.addEventListener('click', () => {
    clearTimeout(setTime);
    stop.classList.toggle('invalid');
    start.classList.toggle('invalid');
    reset.classList.toggle('invalid');
  });
  
  reset.addEventListener('click', () => {
    hours = 0;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    displayTime();
    reset.classList.toggle('invalid');
  });
 
  








}