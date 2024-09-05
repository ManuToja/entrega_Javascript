function calculadorPorcelanato(porcelanato, metros) {
  console.log("Usted necesita comprar " + porcelanato * metros + " cajas de porcelanato");
}

let porcelanato = prompt(
  "Selecciona una un color de porcelanato \n 1 - Simil Cemento(5 m2 la caja) \n 2 - Carrara (4 m2 la caja) \n 3 - Simil Madera (10 m2 la caja)"
);

if (porcelanato == "1" || porcelanato === "UNO") {
  porcelanato = 5;
} else if (porcelanato == "2" || porcelanato === "DOS") {
  porcelanato = 4;
} else if (porcelanato == "3" || porcelanato === "TRES") {
  porcelanato = 10;
} else {
  alert("No seleccionaste un modelo");
}

let metros = prompt("Ingrese con numeros cuantos metros cuadrados necesita cubrir");
calculadorPorcelanato(porcelanato, metros);
