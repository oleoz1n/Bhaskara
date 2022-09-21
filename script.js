let a = document.getElementById("a"),
  b = document.getElementById("b"),
  c = document.getElementById("c");

function capturar() {
  a2 = a.value;
  b2 = b.value;
  c2 = c.value;
}

function expressar() {
  delta = b2 * b2 - 4 * a2 * c2;
  x1 = (-b2 + Math.sqrt(delta)) / (2 * a2);
  y1 = (-b2 - Math.sqrt(delta)) / (2 * a2);
  if (delta < 0) {
    alert("Delta Negativo");
  } else if (x1 >= 0 && x1 < 1 && y1 >= 0 && y1 < 1) {
    h1.innerText = "x'= " + x1 + "\n" + "x''= " + y1;
  } else if ((x1 >= 0 && x1 < 1 && y1 > 0) || y1 < 0) {
    h1.innerText = "x'= " + x1 + "\n" + "x''= " + y1.toFixed(2);
  } else if (x1 > 0 || (x1 < 0 && y1 >= 0 && y1 < 1)) {
    h1.innerText = "x'= " + x1.toFixed(2) + "\n" + "x''= " + y1;
  } else if (x1 > 0 || (x1 < 0 && y1 > 0) || y1 < 0) {
    h1.innerText = "x'= " + x1.toFixed(2) + "\n" + "x''= " + y1.toFixed(2);
  }
}
