var totalSecondsRemaining;
var intervalHandle;

function resetPage() {
  document.getElementById("inputArea").style.display = "block";
}

function tick() {
  var timeDisplay = document.getElementById("time");

  var hours = Math.floor(totalSecondsRemaining / 3600);
  var minutes = Math.floor((totalSecondsRemaining % 3600) / 60);
  var seconds = totalSecondsRemaining % 60;

  var timeString =
    hours.toString().padStart(2, "0") +
    ":" +
    minutes.toString().padStart(2, "0") +
    ":" +
    seconds.toString().padStart(2, "0");

  timeDisplay.innerHTML = timeString;

  if (totalSecondsRemaining === 0) {
    alert("Timer Done!");
    clearInterval(intervalHandle);
    resetPage();
  }

  totalSecondsRemaining--;
}

function startCountdown() {
  var hoursInput = document.getElementById("hours").value;
  var minutesInput = document.getElementById("minutes").value;
  var secondsInput = document.getElementById("seconds").value;

  if (isNaN(hoursInput) || isNaN(minutesInput) || isNaN(secondsInput)) {
    alert("Please enter valid numbers for hours, minutes, and seconds.");
    return;
  }

  var hours = parseInt(hoursInput, 10) || 0;
  var minutes = parseInt(minutesInput, 10) || 0;
  var seconds = parseInt(secondsInput, 10) || 0;

  totalSecondsRemaining = hours * 3600 + minutes * 60 + seconds;

  intervalHandle = setInterval(tick, 1000);

  document.getElementById("inputArea").style.display = "none";
}

window.onload = function () {
  document.getElementById("inputArea").style.display = "block";
};
