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

if (check) { //Non c'è bisogno di mettere "check == true" perchè già è un valore booleano vero
  alert("Accesso consentito");
}
else {
  alert("Accesso Negato");
}
