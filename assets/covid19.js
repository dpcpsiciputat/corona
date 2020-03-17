var request = new XMLHttpRequest();

request.open("GET", "https://covid19.mathdro.id/api/recovered", true);
request.onload = function() {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  var table = document.getElementById("dev-table");
  var row;
  var cell;
  if (request.status >= 200 && request.status < 400) {
    for (var i in data) {
      row = table.insertRow(-1);
      cell = row.insertCell(-1);
      no = parseInt(i) + 1;
      cell.innerHTML = no;
      cell = row.insertCell(-1);
      cell.innerHTML = data[i].countryRegion;
      cell = row.insertCell(-1);
      cell.innerHTML = data[i].provinceState;
      cell = row.insertCell(-1);
      cell.innerHTML = data[i].confirmed;
      cell = row.insertCell(-1);
      cell.innerHTML = data[i].recovered;
      cell = row.insertCell(-1);
      cell.innerHTML = data[i].deaths;
    }
  } else {
    console.log("error");
  }
};

request.send();
