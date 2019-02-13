// Inserisco variabili
var email = prompt("Inserisci la tua Email:");
var database = ["pippo@hotmail.it", "prova@live.it", "boolean@boolean.it",
"pluto@live.com", "maria@live.it", "paolo@hotmail.it", "miki@gmail.com"];
var check;

// Controllo se l'email inserita esiste
for (var i = 0; i < database.length; i++) {
  if (email == database[i]) {
    check = true; //Valorizzo variabile con valore booleano
  }
}

if (check == true) {
  alert("Accesso consentito");
}
else {
  alert("Accesso Negato");
}
