//Creo primo dado da 1 a 6 (arrotondo per eccesso)
var dado1 = Math.ceil(Math.random() * 6);
//Creo il secondo dado da 1 a 6 ma arrotondo per difetto.
var dado2 = Math.floor(Math.random() * 6) +1;

if (dado1 > dado2) {
  alert("Vince il Dado1 (" + dado1 + ") contro il Dado2 (" + dado2 + ")");
}
else if (dado1 < dado2) {
  alert("Vince il Dado2 (" + dado2 + ") contro il Dado1 (" + dado1 + ")");
}

else {
  alert("Pareggio! Dado1: " + dado1 + " Dado2: " + dado2);
}
