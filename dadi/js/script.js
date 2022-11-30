//1 - genera un numero casuale tra 1 e 6 per il computer
const computerDice = Math.floor( Math.random() * 6 ) +1;
//2 - genera un numero casuale tra 1 e 6 per l'utente
const yourDice = Math.floor( Math.random() * 6 ) +1;
//3 - confrontare i due risultati
//3.1 - se il risultato è pari, stampa "avete preggiato"
if ( computerDice == yourDice){
    console.log('avete pareggiato');
}
//3.2 - se il risultato è del computer è maggiore dell'utente, stampa "hai perso"
else if ( computerDice > yourDice)
{
    console.log('Hai perso');
}
//3.3 - se il risultato è dell'utente è maggiore del computer, stampa "hai vinto"
else { 
    console.log('Hai vinto');
}

console.log(`il computer ha fatto: ${computerDice}, tu hai fatto ${yourDice}`);

