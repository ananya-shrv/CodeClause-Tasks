window.onload = function () {
    var minutes = 0;
    var seconds = 0;
    var milliseconds = 0;
    var intervalHandle;
  
    var minutesDisplay = document.getElementById("minutes");
    var secondsDisplay = document.getElementById("seconds");
    var millisecondsDisplay = document.getElementById("milliseconds");
  
    var startButton = document.getElementById("startButton");
    var stopButton = document.getElementById("stopButton");
    var resetButton = document.getElementById("resetButton");
  
    startButton.addEventListener("click", startStopwatch);
    stopButton.addEventListener("click", stopStopwatch);
    resetButton.addEventListener("click", resetStopwatch);
  
    function startStopwatch() {
      intervalHandle = setInterval(updateTimer, 10);
      startButton.disabled = true;
      stopButton.disabled = false;
    }
  
    function stopStopwatch() {
      clearInterval(intervalHandle);
      startButton.disabled = false;
      stopButton.disabled = true;
    }
  
    function resetStopwatch() {
      clearInterval(intervalHandle);
      minutes = 0;
      seconds = 0;
      milliseconds = 0;
      updateTimer();
      startButton.disabled = false;
      stopButton.disabled = true;
    }
  
    function updateTimer() {
      milliseconds += 10;
  
      if (milliseconds >= 1000) {
        milliseconds = 0;
        seconds++;
      }
  
      if (seconds >= 60) {
        seconds = 0;
        minutes++;
      }
  
      minutesDisplay.textContent = formatTime(minutes);
      secondsDisplay.textContent = formatTime(seconds);
      millisecondsDisplay.textContent = formatTime(Math.floor(milliseconds / 10));
    }
  
    function formatTime(value) {
      return value.toString().padStart(2, "0");
    }
  };
  