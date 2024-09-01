document.addEventListener('DOMContentLoaded', (event) => {
  const playText = document.getElementById('playText');
  const myAudio = document.getElementById('myAudio');

  playText.addEventListener('click', () => {
      if (myAudio.paused) {
          myAudio.play();
      } else {
          myAudio.pause();
      }
  });
});

function updateTimer() {
    future  = Date.parse("September 4, 2024 19:30:00");
    now     = new Date();
    diff    = future - now;
  
    days  = Math.floor( diff / (1000*60*60*24) );
    hours = Math.floor( diff / (1000*60*60) );
    mins  = Math.floor( diff / (1000*60) );
    secs  = Math.floor( diff / 1000 );
  
    d = days;
    h = hours - days  * 24;
    m = mins  - hours * 60;
    s = secs  - mins  * 60;
  
    document.getElementById("timer")
      .innerHTML =
        '<div>' + d + '<span>days</span></div>' +
        '<div>' + h + '<span>hours</span></div>' +
        '<div>' + m + '<span>minutes</span></div>' +
        '<div>' + s + '<span>seconds</span></div>' ;
  }
  setInterval('updateTimer()', 1000 );
