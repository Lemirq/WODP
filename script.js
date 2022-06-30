//Variables
const mercury = document.getElementById("mercury");
const venus = document.getElementById("venus");
const earth = document.getElementById("earth");
const mars = document.getElementById("mars");
const jupiter = document.getElementById("jupiter");
const saturn = document.getElementById("saturn");
const uranus = document.getElementById("uranus");
const neptune = document.getElementById("neptune");
const weight = document.getElementById("weight");

weight.addEventListener("input", Calc);

function Calc() {
  if (weight.value > 99999) {
    alert("Max Amount Of Numbers is 99999");
    weight.value = "";
  } else {
    var val = weight.value;
    console.log(val);
    var calculate = val * 0.38;
    calculate = Math.round(calculate);
    mercury.innerHTML = calculate;
    console.log(calculate);

    var val = weight.value;
    console.log(val);
    var calculate = val * 0.9;
    calculate = Math.round(calculate);
    venus.innerHTML = calculate;
    console.log(calculate);

    var val = weight.value;
    console.log(val);
    var calculate = val * 1;
    calculate = Math.round(calculate);
    earth.innerHTML = calculate;
    console.log(calculate);

    var val = weight.value;
    console.log(val);
    var calculate = val * 0.38;
    calculate = Math.round(calculate);
    mars.innerHTML = calculate;
    console.log(calculate);

    var val = weight.value;
    console.log(val);
    var calculate = val * 2.36;
    calculate = Math.round(calculate);
    jupiter.innerHTML = calculate;
    console.log(calculate);

    var val = weight.value;
    console.log(val);
    var calculate = val * 0.92;
    calculate = Math.round(calculate);
    saturn.innerHTML = calculate;
    console.log(calculate);

    var val = weight.value;
    console.log(val);
    var calculate = val * 0.89;
    calculate = Math.round(calculate);
    uranus.innerHTML = calculate;
    console.log(calculate);

    var val = weight.value;
    console.log(val);
    var calculate = val * 1.12;
    calculate = Math.round(calculate);
    neptune.innerHTML = calculate;
    console.log(calculate);
  }
}

function lbs() {
  let unit = document.getElementById("unit");
  if (unit == null) {
    let newElement = document.createElement("h3");
    newElement.setAttribute("class", "value");
    newElement.setAttribute("id", "unit");
    newElement.textContent = "Lbs";
    document.querySelector(".dynamic").appendChild(newElement);
  } else {
    if (unit.innerHTML == "Kg") {
      unit.innerHTML = "Lbs";
    }
  }
}

function kg() {
  let unit = document.querySelector('[id="unit"]');
  document.querySelector('[id="unit"]').style.display = "block";
  document.querySelector('[id="unit"]').innerHTML = "Kg";
}
