/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let iconos = ["♦", "♥", "♠", "♣"];
  let simbolo = ["J", "Q", "R", "A", 2, 3, 4, 5, 6, 7, 8, 9, 10];
  function randumS() {
    let valor = Math.floor(Math.random() * 13);
    return valor;
  }
  function randumI() {
    let valor2 = Math.floor(Math.random() * 4);
    return valor2;
  }
  function randomC() {
    const icono = iconos[randumI()];
    const numero = simbolo[randumS()];
    let carta = [icono, numero];
    return carta;
  }
  let card = randomC();
  if (card[0] == iconos[2] || card[0] == iconos[3]) {
    document.getElementById("icon1").style.color = "black";
    document.getElementById("icon2").style.color = "black";
  }

  document.getElementById("icon1").append(card[0]);
  document.getElementById("icon2").append(card[0]);
  document.getElementById("numero").append(card[1]);
};
