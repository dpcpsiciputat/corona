var request = new XMLHttpRequest();

request.open("GET", "https://covid19.mathdro.id/api", true);
request.onload = function() {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  var confirmed = document.getElementById("confirmed");
  var recovered = document.getElementById("recovered");
  var deaths = document.getElementById("deaths");
  var lastUpdate = document.getElementById("lastUpdate");
    if (request.status >= 200 && request.status < 400) {
      for (var i in data) {
        confirmed.innerHTML = data[i].confirmed.value;
        recovered.innerHTML = data[i].recovered.value;
        deaths.innerHTML = data[i].deaths.value;
        lastUpdate.innerHTML = data[i].lastUpdate;
      }
  } else {
    console.log("error");
  }
};

request.send();
