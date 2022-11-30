//1 - creare un array con una lista di email 
const list = ['pippo@gmail.com', 'paperino@icloud.it', 'topolino@yahoo.it'];
//2 - chiere all'utente di inserire una email vailda
const email_utente = prompt('Inresisci la tua email');
//3 - confrontare se la mail inserita fa parte della lista dell'array
let found = false
for ( i=0; i < list.length; i++){
    const email_list = list[i]
    if ( email_utente == email_list) {
        found = true
    }
}

if(found) {
    console.log('Puoi partecipare');
}

else {
    console.log('Non puoi parteciparer');
}