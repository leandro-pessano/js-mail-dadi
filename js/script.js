// Gioco dei dadi
// Generare un numero random da 1  a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// Nome delle variabili
var computer, giocatore, risultato;

// Click su button "gioca"
document.getElementById("gioca").addEventListener('click',
function() {
// codice
// definizione variabili
computer = Math.floor(Math.random()*6) + 1;
giocatore = Math.floor(Math.random()*6) + 1;
risultato = 'Pareggio';
if (computer > giocatore) {
  risultato = 'Hai Perso'
} else if (giocatore > computer) {
    risultato = 'Hai Vinto'
}

// valori a schermo
document.getElementById('ris-computer').innerHTML = computer;
document.getElementById('ris-giocatore').innerHTML = giocatore;
document.getElementById('message').innerHTML = risultato;
//
}
);
