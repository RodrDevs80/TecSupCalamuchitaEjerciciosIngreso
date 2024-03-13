const peso = document.getElementById("peso");
const altura = document.getElementById("altura");
const btn = document.getElementById("btn");
const resul = document.querySelector(".resultado");
btn.addEventListener("click", function () {
  calcularImc();
});

function calcularImc() {
  let resultado = 0;
  imc = "";
  resultado = (
    Number(peso.value) /
    (Number(altura.value) * Number(altura.value))
  ).toFixed(2);

  if (resultado < 18.5) {
    imc = "Indica que tiene BAJO PESO";
  } else if (resultado > 18.5 && resultado < 24.9) {
    imc = "Indica que tiene un PESO NORMAL";
  } else if (resultado > 24.9 && resultado < 29.9) {
    imc = "Indica que tiene SOBREPESO";
  } else if (resultado > 29.9 && resultado < 34.9) {
    imc = "Indica que tiene OBESIDAD EN GRADO I";
  } else if (resultado > 34.9 && resultado < 39.9) {
    imc = "Indica que tiene OBESIDAD EN GRADO II";
  } else if (resultado > 40) {
    imc = "Indica que tiene OBESIDAD EN GRADO III";
  }
  resul.querySelector(
    "#resultado-h3"
  ).textContent = `Su IMC es de:${resultado},${imc}`;
}
