function getFakeFeed() {
  const scenarios = [
    { destination: "MG Road", minutesAway: 3 },
    { destination: "Baiyappanahalli", minutesAway: 7 },
    null,
    { destination: "", minutesAway: 0 },
  ];
  const random = scenarios[Math.floor(Math.random() * scenarios.length)];
  return random;
}

const trainInfoEl = document.getElementById("train-info");
function renderTrain() {
  const data = getFakeFeed();

  if (data == null || data.destination == "") {
    trainInfoEl.textContent = "No live data";
  } else {
    trainInfoEl.textContent = `${data.destination} - ${formatMinutes(data.minutesAway)} min`;
  }
}

function formatMinutes(minutes) {
  if (minutes < 10) {
    return '0' + minutes;
  }
  return minutes;
}

renderTrain();
setInterval(renderTrain, 2000);