

document.getElementById("redIn").addEventListener("change", redval);
document.getElementById("greenIn").addEventListener("change", greenval);
document.getElementById("blueIn").addEventListener("change", blueval);

function redval() {
  let redIn = document.getElementById("redIn").value;
  let greenIn = document.getElementById("greenIn").value;
  let blueIn = document.getElementById("blueIn").value;
  var colourvar = `rgb(${redIn}, ${greenIn}, ${blueIn})`;
  document.getElementById("coldisp").style.backgroundColor = colourvar;
  document.getElementById(
    "rgbco"
  ).innerHTML = `rgb(${redIn}, ${greenIn}, ${blueIn})`;
  if (redIn > 255) {
    document.getElementById("redIn").value = "255";
    let redIn = document.getElementById("redIn").value;
    let greenIn = document.getElementById("greenIn").value;
    let blueIn = document.getElementById("blueIn").value;
    var colourvar = `rgb(${redIn}, ${greenIn}, ${blueIn})`;
    document.getElementById("coldisp").style.backgroundColor = colourvar;
    document.getElementById(
      "rgbco"
    ).innerHTML = `rgb(${redIn}, ${greenIn}, ${blueIn})`;
  }
  if (greenIn > 255) {
    document.getElementById("greenIn").value = "255";
    let redIn = document.getElementById("redIn").value;
    let greenIn = document.getElementById("greenIn").value;
    let blueIn = document.getElementById("blueIn").value;
    var colourvar = `rgb(${redIn}, ${greenIn}, ${blueIn})`;
    document.getElementById("coldisp").style.backgroundColor = colourvar;
    document.getElementById(
      "rgbco"
    ).innerHTML = `rgb(${redIn}, ${greenIn}, ${blueIn})`;
  }
  if (blueIn > 255) {
    document.getElementById("blueIn").value = "255";
    let redIn = document.getElementById("redIn").value;
    let greenIn = document.getElementById("greenIn").value;
    let blueIn = document.getElementById("blueIn").value;
    var colourvar = `rgb(${redIn}, ${greenIn}, ${blueIn})`;
    document.getElementById("coldisp").style.backgroundColor = colourvar;
    document.getElementById(
      "rgbco"
    ).innerHTML = `rgb(${redIn}, ${greenIn}, ${blueIn})`;
  }
  if (redIn < 0) {
    document.getElementById("redIn").value = "0";
    let redIn = document.getElementById("redIn").value;
    let greenIn = document.getElementById("greenIn").value;
    let blueIn = document.getElementById("blueIn").value;
    var colourvar = `rgb(${redIn}, ${greenIn}, ${blueIn})`;
    document.getElementById("coldisp").style.backgroundColor = colourvar;
    document.getElementById(
      "rgbco"
    ).innerHTML = `rgb(${redIn}, ${greenIn}, ${blueIn})`;
  }
  if (greenIn < 0) {
    document.getElementById("greenIn").value = "0";
    let redIn = document.getElementById("redIn").value;
    let greenIn = document.getElementById("greenIn").value;
    let blueIn = document.getElementById("blueIn").value;
    var colourvar = `rgb(${redIn}, ${greenIn}, ${blueIn})`;
    document.getElementById("coldisp").style.backgroundColor = colourvar;
    document.getElementById(
      "rgbco"
    ).innerHTML = `rgb(${redIn}, ${greenIn}, ${blueIn})`;
  }
  if (blueIn < 0) {
    document.getElementById("blueIn").value = "0";
    let redIn = document.getElementById("redIn").value;
    let greenIn = document.getElementById("greenIn").value;
    let blueIn = document.getElementById("blueIn").value;
    var colourvar = `rgb(${redIn}, ${greenIn}, ${blueIn})`;
    document.getElementById("coldisp").style.backgroundColor = colourvar;
    document.getElementById(
      "rgbco"
    ).innerHTML = `rgb(${redIn}, ${greenIn}, ${blueIn})`;
  }
}

function greenval() {
  let redIn = document.getElementById("redIn").value;
  let greenIn = document.getElementById("greenIn").value;
  let blueIn = document.getElementById("blueIn").value;
  var colourvar = `rgb(${redIn}, ${greenIn}, ${blueIn})`;
  document.getElementById("coldisp").style.backgroundColor = colourvar;
  document.getElementById(
    "rgbco"
  ).innerHTML = `rgb(${redIn}, ${greenIn}, ${blueIn})`;
  if (redIn > 255) {
    document.getElementById("redIn").value = "255";
    let redIn = document.getElementById("redIn").value;
    let greenIn = document.getElementById("greenIn").value;
    let blueIn = document.getElementById("blueIn").value;
    var colourvar = `rgb(${redIn}, ${greenIn}, ${blueIn})`;
    document.getElementById("coldisp").style.backgroundColor = colourvar;
    document.getElementById(
      "rgbco"
    ).innerHTML = `rgb(${redIn}, ${greenIn}, ${blueIn})`;
  }
  if (greenIn > 255) {
    document.getElementById("greenIn").value = "255";
    let redIn = document.getElementById("redIn").value;
    let greenIn = document.getElementById("greenIn").value;
    let blueIn = document.getElementById("blueIn").value;
    var colourvar = `rgb(${redIn}, ${greenIn}, ${blueIn})`;
    document.getElementById("coldisp").style.backgroundColor = colourvar;
    document.getElementById(
      "rgbco"
    ).innerHTML = `rgb(${redIn}, ${greenIn}, ${blueIn})`;
  }
  if (blueIn > 255) {
    document.getElementById("blueIn").value = "255";
    let redIn = document.getElementById("redIn").value;
    let greenIn = document.getElementById("greenIn").value;
    let blueIn = document.getElementById("blueIn").value;
    var colourvar = `rgb(${redIn}, ${greenIn}, ${blueIn})`;
    document.getElementById("coldisp").style.backgroundColor = colourvar;
    document.getElementById(
      "rgbco"
    ).innerHTML = `rgb(${redIn}, ${greenIn}, ${blueIn})`;
  }
  if (redIn < 0) {
    document.getElementById("redIn").value = "0";
    let redIn = document.getElementById("redIn").value;
    let greenIn = document.getElementById("greenIn").value;
    let blueIn = document.getElementById("blueIn").value;
    var colourvar = `rgb(${redIn}, ${greenIn}, ${blueIn})`;
    document.getElementById("coldisp").style.backgroundColor = colourvar;
    document.getElementById(
      "rgbco"
    ).innerHTML = `rgb(${redIn}, ${greenIn}, ${blueIn})`;
  }
  if (greenIn < 0) {
    document.getElementById("greenIn").value = "0";
    let redIn = document.getElementById("redIn").value;
    let greenIn = document.getElementById("greenIn").value;
    let blueIn = document.getElementById("blueIn").value;
    var colourvar = `rgb(${redIn}, ${greenIn}, ${blueIn})`;
    document.getElementById("coldisp").style.backgroundColor = colourvar;
    document.getElementById(
      "rgbco"
    ).innerHTML = `rgb(${redIn}, ${greenIn}, ${blueIn})`;
  }
  if (blueIn < 0) {
    document.getElementById("blueIn").value = "0";
    let redIn = document.getElementById("redIn").value;
    let greenIn = document.getElementById("greenIn").value;
    let blueIn = document.getElementById("blueIn").value;
    var colourvar = `rgb(${redIn}, ${greenIn}, ${blueIn})`;
    document.getElementById("coldisp").style.backgroundColor = colourvar;
    document.getElementById(
      "rgbco"
    ).innerHTML = `rgb(${redIn}, ${greenIn}, ${blueIn})`;
  }
}

function blueval() {
  let redIn = document.getElementById("redIn").value;
  let greenIn = document.getElementById("greenIn").value;
  let blueIn = document.getElementById("blueIn").value;
  var colourvar = `rgb(${redIn}, ${greenIn}, ${blueIn})`;
  document.getElementById("coldisp").style.backgroundColor = colourvar;
  document.getElementById(
    "rgbco"
  ).innerHTML = `rgb(${redIn}, ${greenIn}, ${blueIn})`;
  if (redIn > 255) {
    document.getElementById("redIn").value = "255";
    let redIn = document.getElementById("redIn").value;
    let greenIn = document.getElementById("greenIn").value;
    let blueIn = document.getElementById("blueIn").value;
    var colourvar = `rgb(${redIn}, ${greenIn}, ${blueIn})`;
    document.getElementById("coldisp").style.backgroundColor = colourvar;
    document.getElementById(
      "rgbco"
    ).innerHTML = `rgb(${redIn}, ${greenIn}, ${blueIn})`;
  }
  if (greenIn > 255) {
    document.getElementById("greenIn").value = "255";
    let redIn = document.getElementById("redIn").value;
    let greenIn = document.getElementById("greenIn").value;
    let blueIn = document.getElementById("blueIn").value;
    var colourvar = `rgb(${redIn}, ${greenIn}, ${blueIn})`;
    document.getElementById("coldisp").style.backgroundColor = colourvar;
    document.getElementById(
      "rgbco"
    ).innerHTML = `rgb(${redIn}, ${greenIn}, ${blueIn})`;
  }
  if (blueIn > 255) {
    document.getElementById("blueIn").value = "255";
    let redIn = document.getElementById("redIn").value;
    let greenIn = document.getElementById("greenIn").value;
    let blueIn = document.getElementById("blueIn").value;
    var colourvar = `rgb(${redIn}, ${greenIn}, ${blueIn})`;
    document.getElementById("coldisp").style.backgroundColor = colourvar;
    document.getElementById(
      "rgbco"
    ).innerHTML = `rgb(${redIn}, ${greenIn}, ${blueIn})`;
  }
  if (redIn < 0) {
    document.getElementById("redIn").value = "0";
    let redIn = document.getElementById("redIn").value;
    let greenIn = document.getElementById("greenIn").value;
    let blueIn = document.getElementById("blueIn").value;
    var colourvar = `rgb(${redIn}, ${greenIn}, ${blueIn})`;
    document.getElementById("coldisp").style.backgroundColor = colourvar;
    document.getElementById(
      "rgbco"
    ).innerHTML = `rgb(${redIn}, ${greenIn}, ${blueIn})`;
  }
  if (greenIn < 0) {
    document.getElementById("greenIn").value = "0";
    let redIn = document.getElementById("redIn").value;
    let greenIn = document.getElementById("greenIn").value;
    let blueIn = document.getElementById("blueIn").value;
    var colourvar = `rgb(${redIn}, ${greenIn}, ${blueIn})`;
    document.getElementById("coldisp").style.backgroundColor = colourvar;
    document.getElementById(
      "rgbco"
    ).innerHTML = `rgb(${redIn}, ${greenIn}, ${blueIn})`;
  }
  if (blueIn < 0) {
    document.getElementById("blueIn").value = "0";
    let redIn = document.getElementById("redIn").value;
    let greenIn = document.getElementById("greenIn").value;
    let blueIn = document.getElementById("blueIn").value;
    var colourvar = `rgb(${redIn}, ${greenIn}, ${blueIn})`;
    document.getElementById("coldisp").style.backgroundColor = colourvar;
    document.getElementById(
      "rgbco"
    ).innerHTML = `rgb(${redIn}, ${greenIn}, ${blueIn})`;
  }
}


document.getElementById("rdm-btn").addEventListener("click", generate);

function generate() {
  var r = Math.random() * 255;
  r = r.toFixed(0);
  var g = Math.random() * 255;
  g = g.toFixed(0);
  var b = Math.random() * 255;
  b = b.toFixed(0);
  var colourvar = `rgb(${r}, ${g}, ${b})`;
  document.getElementById("coldisp").style.backgroundColor = colourvar;
  document.getElementById("rgbco").innerHTML = `rgb(${r}, ${g}, ${b})`;
  document.getElementById("redIn").value = r;
  document.getElementById("greenIn").value = g;
  document.getElementById("blueIn").value = b;
}

// document.addEventListener("keypress", testFunction);

// let password = "hello";
// let userWord = "";
// function testFunction(event) {
//   userWord = userWord + event.key;

//   if (userWord == password) {
//     alert("You guess the password!");
//   }
//   console.log(userWord);
// }
