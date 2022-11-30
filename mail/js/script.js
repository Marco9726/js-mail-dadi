//1 - creare un array con una lista di email 
const list = ['pippo@gmail.com', 'paperino@icloud.it', 'topolino@yahoo.it'];
//2 - chiere all'utente di inserire una email vailda
const user_email = prompt('Inresisci la tua email');
//3 - confrontare se la mail inserita fa parte della lista dell'array
//3.1 - creare un cilo for di ricerca per la lista dell'array
let found = false;
for ( i=0; i < list.length; i++){
    //3.2 - creare la variabile della singola mail della lista dell'array e confrontarla con la mail inserita dall'utente 
    const email = list[i]
    if ( user_email === email) {
        found = true
    }
}
//3.2.1 - se le email corrispondono stampare "Puoi partecipare"
if(found) {
    console.log('Puoi partecipare');
}
//3.2.2 - se non corrispondono stampare "Non puoi partecipare"
else {
    console.log('Non puoi partecipare');
}